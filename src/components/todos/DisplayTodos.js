import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Todo  from './Todo'
import { todoCompleted } from '../../actions/TodoActions'

class DisplayTodos extends Component {
    

    
    render() {
        const todos = this.props.todos.map(t => <Todo key={t.id} todo={t} completed={this.props.completed} /> )
        return (
            <div>
                 { todos }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        completed: (userId, id) => dispatch(todoCompleted(userId, id))
    }
}


export default connect(null, mapDispatchToProps)(DisplayTodos);