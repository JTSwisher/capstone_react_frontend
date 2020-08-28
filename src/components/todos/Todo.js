import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Todo extends Component {


    convertDate = (date) => {
        let isoDate = date;
        let dateObject = new Date(isoDate); // changes isoDate string to Date Object
        let dateString = dateObject.toString();
        let dateArr = dateString.split(" ")
        let monthDay = dateArr.slice(1,3).join(" ")
        let year = dateArr.slice(3,4)
        let finalDate = monthDay + ", " + year;
        return finalDate;
    }


    render() {
        const { todo } = this.props
        let body = todo.body;
        let createdDate = this.convertDate(todo.created_at);

        const cardStyle = {
            display: "inline-block",
            width: '90%',
            margin: "10px",
            padding: "0",
            boxShadow: "1px 1px 2px black",
            borderRadius: "10px",
            color: "black",
            backgroundColor: "#D1E8E2"
        };

        return (
            <Card style={ cardStyle }>
                <Card.Body>
                    <Card.Text>{ body }</Card.Text>
                    <Card.Subtitle style={{marginBottom: "5px", fontSize: "13px"}}>Created: { createdDate }</Card.Subtitle>
                    <Button variant="info" onClick={ () => this.props.completed(todo.user_id, todo.id)}>Complete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Todo;
