import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from '../components/todos/TodoForm'
import DisplayTodos from '../components/todos/DisplayTodos'

import { createTodo, getTodos, todoCompleted } from '../actions/TodoActions'

class TodoContainer extends Component {

    componentDidMount() {
        this.props.get(this.props.user.id)
    }

    render() {
        return (
            <div className="todos">
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
        //completed: (user_id, id) => dispatch(todoCompleted(user_id, id))
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user, todos: state.todo.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
