import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoForm from '../components/todos/TodoForm'

class TodoContainer extends Component {

  

    render() {
        console.log(this.props.user)
        return (
            <div className="todos">
                <h1>Todo's</h1>
                <TodoForm />
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create: todo_data => dispatch(createTodo(todo_data))
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);