import React, { Component } from 'react';

class AuthenticationForm extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    }

    handleOnChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.authenticateUser(this.state);
        this.setState({
            username: '',
            email: '',
            password: ''
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={ (event) => this.handleOnSubmit(event)}>
                    <label htmlFor="name">Username</label>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="name">Email</label>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    /><br />
                    <label htmlFor="name">Password</label>
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <button type="submit">Log In</button>

                </form>
            </div>
        )
    }
}

export default AuthenticationForm