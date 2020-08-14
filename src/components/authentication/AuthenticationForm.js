import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class AuthenticationForm extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.authenticateUser(this.state);
    }

   
   

    render() {
        return(
            <>
            <h2>Login/Signup</h2>
            <Card style={{ display: "inline-block", width: "30%", textAlign: "center",}}>
                <Form style={{ display: "inline-block", width: '85%', paddingRight: "15px", paddingTop: "15px" }} onSubmit={ (event) => this.handleSubmit(event)}>
                    <Form.Control style={{margin: "10px" }} type="username" value={this.state.title} name="username" placeholder="Username" onChange={(event) => this.handleChange(event)}/>
                    <Form.Control style={{margin: "10px" }} type="email" value={this.state.title} name="email" placeholder="Email" onChange={(event) => this.handleChange(event)}/>
                    <Form.Control style={{margin: "10px" }} type="password" value={this.state.title} name="password" placeholder="Password" onChange={(event) => this.handleChange(event)}/>
                    <Button style={{margin: "10px" }} type="submit">Login</Button>
                    <LinkContainer to="/" style={{margin: "10px" }}>
                        <Button type="submit" variant="danger" >Cancel</Button>
                    </LinkContainer>
                </Form>
            </Card>
            </>
        )
    }
}





export default AuthenticationForm;