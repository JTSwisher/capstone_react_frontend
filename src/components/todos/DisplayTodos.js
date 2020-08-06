import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Todo  from './Todo'

class DisplayTodos extends Component {

   

    render() {
       
        const todos = this.props.todos.map(t => <Todo key={t.id} todo={t} /> ) 
        return (
            <div>
                <ul>
                { todos } 
                </ul>
            </div>
        )
    }
}
//state props are being rendered as an array wtih an array inside containing the todos
const mapStateToProps = (state) => {
    return {todos: state.todo.todos}
}

export default connect(mapStateToProps)(DisplayTodos);