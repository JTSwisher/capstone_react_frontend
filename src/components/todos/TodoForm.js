import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';

class TodoForm extends Component {

    state = {
        body: '',
        user_id: localStorage.user
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state, localStorage.user)
        this.setState({
            body: ''
        })
    }

    render() {
        return(
            <div style={{ display: "inline-block", width: '90%', margin: "10px",boxShadow: "1px 1px 2px black", borderRadius: "10px", padding: "0px", backgroundColor: "#D1E8E2"}}>
                <Form  onSubmit={ (event) => this.handleSubmit(event)} >
                    <Form.Row style={{ margin: "10px", marginLeft: "10px"}}>
                        <Col xs={10}>
                        <Form.Control type="body" value={this.state.body} name="body" placeholder="Details" onChange={(event) => this.handleChange(event)}/>
                        </Col>
                        <Col xs={2}>
                        <Button style={{right: "0" }} type="submit" variant="info">Add</Button>
                        </Col>
                    </Form.Row>
                </Form>          
            </div>
        )
    }
}

export default TodoForm;