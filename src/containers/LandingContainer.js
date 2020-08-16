import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

class LandingContainer extends Component {

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

        const buttonStyle ={
            margin: "10px"
        }
        return (
            <div style={ containerStyle}>
                <div style={{display: "inline-block"}}>
                    <h1>Welcome to DailyDash!</h1>
                    <LinkContainer to="/login" style={buttonStyle} >
                        <Button variant="info" type="submit">Login / Signup</Button>
                    </LinkContainer>
                </div>
            </div>
        )
    }
}

export default LandingContainer;