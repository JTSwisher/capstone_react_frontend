import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Icons } from './Icons'


class Weather extends Component {

  

    render() {
       let icon = Icons['5']
        // use Icons import based on weather icon id to source correct icon from import for render
       const { weather } = this.props
        
        return (
            <div>
                <img style={{height: "50px", width: "80px"}} src={icon}></img>
            </div>
        )
    }
}

export default Weather;