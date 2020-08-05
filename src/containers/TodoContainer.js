import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from '../components/todos/TodoForm'
import { createTodo } from '../actions/TodoActions'

class TodoContainer extends Component {


    render() {
        console.log(this.props.user.id)
        return (
            <div className="todos">
                <h1>Todo's</h1>
                <TodoForm createTodo={this.props.create} user={this.props.user.id}/>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: (todo_data, user_id) => dispatch(createTodo(todo_data, user_id))
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);