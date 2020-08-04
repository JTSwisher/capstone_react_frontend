import React, { Component } from 'react';
import AuthenticationForm from './AuthenticationForm'

class AuthenticationPage extends Component {

    render() {
        return (
            <div>
                <h1>Authentication page</h1>
                <AuthenticationForm />
            </div>
        )
        
    }
}

export default AuthenticationPage;