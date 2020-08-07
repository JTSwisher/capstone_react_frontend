import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class TodoForm extends Component {

    state = {
        title: '',
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
            title: '',
            body: ''
        })
    }

    render() {
        return(
            <div>
                <Card style={{ width: '25rem' }}>
                <Card.Header>New Todo</Card.Header>
                    <Form style={{ width: '20rem' }} onSubmit={ (event) => this.handleSubmit(event)}>
                        <Form.Group>
                            <Form.Control type="title" value={this.state.title} name="title" placeholder="Title" onChange={this.handleChange}/>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.Control type="body" value={this.state.body} name="body" placeholder="Details" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button type="submit">Add</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default TodoForm;