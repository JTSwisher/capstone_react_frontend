import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Todo extends Component {

    render() {
        const { todo } = this.props
        
        return (
            <Card style={{ display: "inline-block", width: '90%', margin: "10px"}}>
                <Card.Body>
                    <Card.Text>{todo.body}</Card.Text>
                    <Button variant="success" onClick={ () => this.props.completed(todo.user_id, todo.id)} >Complete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Todo;