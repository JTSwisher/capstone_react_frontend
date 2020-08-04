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

    }


    render() {
        return(
            <div>
                <h1>hey</h1>
                <form onSubmit={ (event) => this.handleOnSubmit(event)}>
                    <label for="name">Username</label>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <label for="name">Email</label>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <label for="name">Password</label>
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