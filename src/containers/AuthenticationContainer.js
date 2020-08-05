import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import AuthenticationForm from '../components/authentication/AuthenticationForm';
import { authenticate } from '../actions/AuthenticationActions'


class AuthenticationContainer extends Component {

    

    render() {
        return (
            <div>
                <AuthenticationForm authenticateUser={this.props.authenticate} />
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: user_data => dispatch(authenticate(user_data))
    }
}

const mapStateToProps = ({ current_user }) => ({ current_user })

export default connect(mapStateToProps ,mapDispatchToProps)(AuthenticationContainer);