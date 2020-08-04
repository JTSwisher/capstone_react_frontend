import React, { Component } from 'react';
import AuthenticationForm from './AuthenticationForm';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/AuthenticationActions'

class AuthenticationPage extends Component {

    render() {
        return (
            <div>
                <h1>Authentication page</h1>
                <AuthenticationForm authenticateUser={this.props.authenticate}/>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: data => dispatch(authenticate(data))
    }
}

export default connect(null, mapDispatchToProps)(AuthenticationPage);