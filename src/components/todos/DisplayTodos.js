import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Todo  from './Todo'
import { todoCompleted } from '../../actions/TodoActions'

class DisplayTodos extends Component {
    render() {
        // map over todos props pass each todo object down to <Todo/> for styling along with todoCompleted action creator
        const todos = this.props.todos.map(t => <Todo key={t.id} todo={t} completed={this.props.completed} /> ) 
        console.log(todos)
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