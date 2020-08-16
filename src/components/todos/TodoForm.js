import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class TodoForm extends Component {

    state = {
        body: '',
        user_id: this.props.user
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state, this.props.user)
        this.setState({
            body: ''
        })
    }

    render() {
        return(
            <div>
                <Card style={{ display: "inline-block", width: '90%', margin: "10px",boxShadow: "1px 1px 2px black",borderRadius: "10px", padding: "0px", backgroundColor: "#D1E8E2"}}>
                        <Card.Body>
                            <Form style={{ width: '85%', display: "inline-block" }} onSubmit={ (event) => this.handleSubmit(event)}>
                            <Card.Title>Add Todo</Card.Title>
                                <Form.Group style={{ marginBottom: "10px", marginLeft: "10px",boxShadow: "1px 1px 2px black" }}>
                                    <Form.Control as="textarea" type="body" value={this.state.body} name="body" placeholder="Details" onChange={(event) => this.handleChange(event)}/>
                                </Form.Group>
                                <Button style={{margin: "10px" }} type="submit" variant="info">Add</Button>
                            </Form>
                        </Card.Body>
                </Card>
            </div>
        )
    }
}

export default TodoForm;