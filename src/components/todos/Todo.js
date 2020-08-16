import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Todo extends Component {

    render() {
        const { todo } = this.props
        
        return (
            <Card style={{ display: "inline-block", width: '90%', margin: "10px", boxShadow: "1px 1px 2px black",borderRadius: "10px", color: "black", backgroundColor: "#D1E8E2"}}>
                <Card.Body>
                    <Card.Text>{todo.body}</Card.Text>
                    <Button variant="info" onClick={ () => this.props.completed(todo.user_id, todo.id)} >Complete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Todo;