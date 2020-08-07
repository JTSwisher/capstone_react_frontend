import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Todo extends Component {

    render() {
        const { todo } = this.props
        console.log(todo)
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Header><Card.Title>{todo.title}</Card.Title></Card.Header>
                <Card.Body>
                    <Card.Text>{todo.body}</Card.Text>
                    <Button onClick={ () => this.props.completed(todo.user_id, todo.id)} >Complete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Todo;