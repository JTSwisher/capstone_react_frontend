import React, { Component } from 'react';

class Todo extends Component {

    render() {
        const { todo } = this.props
       
        return (
        <li>{todo.title}</li>
        )
    }
}

export default Todo;