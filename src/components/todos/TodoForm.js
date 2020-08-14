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
                <Card style={{ display: "inline-block", width: '90%', margin: "10px"}}>
                    <Card.Header>Add Todo</Card.Header>
                        <Form style={{ width: '85%' }} onSubmit={ (event) => this.handleSubmit(event)}>
                            <Form.Group style={{ marginBottom: "10px", paddingLeft: "10px" }}>
                                <Form.Control as="textarea" type="body" value={this.state.body} name="body" placeholder="Details" onChange={(event) => this.handleChange(event)}/>
                            </Form.Group>
                            <Button style={{margin: "10px" }} type="submit">Add</Button>
                        </Form>
                </Card>
            </div>
        )
    }
}

export default TodoForm;