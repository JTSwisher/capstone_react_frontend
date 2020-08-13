import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthenticationForm from '../components/authentication/AuthenticationForm';
import { authenticate } from '../actions/AuthenticationActions'


class AuthenticationContainer extends Component {

    render() {
        const containerStyle = {
            backgroundColor: "#bd4f6c",
            backgroundImage: "linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            margin: "0",
            paddingTop: "200px",
            color: "white"
        }

        return (
            <div style={ containerStyle }>
                <div style={{display: "inline-block", width: "50%", height: "50%" }}>
                    <AuthenticationForm authenticateUser={this.props.authenticate} />
                </div>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: user_data => dispatch(authenticate(user_data))
    }
}



export default connect(null,mapDispatchToProps)(AuthenticationContainer);