import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import two from '../../icons/2.png'
//import icons from icons folder in src directory
// create case statement to determine logo that ias associated with weather card being rendered

class Weather extends Component {



    render() {
       const { weather } = this.props
        
        return (
            <div>
                <img src={two}></img>
            </div>
        )
    }
}

export default Weather;