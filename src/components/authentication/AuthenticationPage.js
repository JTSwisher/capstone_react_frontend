import React, { Component } from 'react';
import AuthenticationForm from './AuthenticationForm';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/AuthenticationActions'

class AuthenticationPage extends Component {

    render() {
        return (
            <div>
                <AuthenticationForm authenticateUser={this.props.authenticate}/>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: user_data => dispatch(authenticate(user_data))
    }
}

export default connect(null, mapDispatchToProps)(AuthenticationPage);