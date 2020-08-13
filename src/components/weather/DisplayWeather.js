import React, { Component } from 'react';
import Weather from './Weather'

class DisplayWeather extends Component {

    render() {
       const weather = this.props.weather.map(w => console.log(w) )
       console.log(this.props.weather)
        return (
            <div>
               <Weather />
            </div>
        )
    }
}

export default DisplayWeather;

