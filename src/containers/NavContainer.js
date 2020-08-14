import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import history from '../History';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 

class NavContainer extends Component {

    handleClick = event => {
        window.localStorage.clear();
        history.push("/")
    }

    render() {
        return (
            <div>
                <Nav className="navbar  navbar-expand-sm navbar-light bg-light">
                    <ul className=" navbar-nav ml-auto">
                        <li className="nav-item" style={{margin: "5px 10px 5px 4px"}}>
                            <h4>Hey, {this.props.user.username}</h4>
                        </li>
                        <li className="nav-item">
                            <Button onClick = {event => this.handleClick(event)}>Logout</Button>
                        </li>
                    </ul>
                   
                </Nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.current_user}
}

export default connect(mapStateToProps)(NavContainer);