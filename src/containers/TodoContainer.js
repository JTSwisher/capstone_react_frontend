import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from '../components/todos/TodoForm'
import DisplayTodos from '../components/todos/DisplayTodos'

import { createTodo, getTodos } from '../actions/TodoActions'

class TodoContainer extends Component {

    componentDidMount() {
        this.props.get(this.props.user.id)
    }

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            border: "2px solid black", 
            borderRadius: "25px",
            height: "60%", 
            padding:"2%", 
            left: "1%", 
            bottom: "1%",
            textAlign: "center", 
            backgroundColor: "white",
            overflow: "scroll"
        };

        return (
            <div className="todos" style={ containerStyle }>
                <h1>Todo's</h1>
                <TodoForm createTodo={this.props.create} user={this.props.user.id}/>
                <DisplayTodos todos={this.props.todos} />
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: (todo_data, user_id) => dispatch(createTodo(todo_data, user_id)),
        get: (user_id) => dispatch(getTodos(user_id))
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user, todos: state.todo.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
