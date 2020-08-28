import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../History';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 

class NavContainer extends Component {

    // On logout button click, clear local storage redirect "/"
    handleClick = event => {
        window.localStorage.clear();
        history.push("/")
    }

    // function returns current date in (Sat, Aug 22) format 
    getDate = () => {
        let d = new Date();
        let dateString = d.toString()
        let dateArray = dateString.split(" ");
        let day = dateArray.slice(0,1);
        let month = dateArray.slice(1,2);
        let dayNumber = dateArray.slice(2,3)
        let currentDate = day + ", " + month + " " + dayNumber;
        return currentDate
    }

    render() {
        return (
            <div>
                <Nav className="navbar  navbar-expand-sm navbar-light bg-light">
                    <h4>Daily Dash - {this.getDate()}</h4>
                    <ul className=" navbar-nav ml-auto">
                        <li className="nav-item" style={{margin: "5px 10px 5px 4px"}}>
                            <h4>Hey, {this.props.user.username}</h4>
                        </li>
                        <li className="nav-item">
                            <Button variant="info" onClick = {event => this.handleClick(event)}>Logout</Button>
                        </li>
                    </ul>
                   
                </Nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.currentUser}
}

export default connect(mapStateToProps)(NavContainer);