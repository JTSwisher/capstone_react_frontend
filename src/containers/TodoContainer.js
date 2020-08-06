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
        return (
            <div className="todos">
                <h1>Todo's</h1>
                <TodoForm createTodo={this.props.create} user={this.props.user.id}/>
                <DisplayTodos getTodos={this.props.get} />
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
    return {user: state.user.current_user}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);