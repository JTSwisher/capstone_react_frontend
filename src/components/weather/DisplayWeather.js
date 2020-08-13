import React, { Component } from 'react';
import Weather from './Weather'

class DisplayWeather extends Component {

    render() {
       const weather = this.props.weather.map((w, idx) => <Weather id={idx} weather={w}/> )
       let location = this.props.location
        return (
            <div>
               <h4>Weather Forecast: {location}</h4> 
               { weather }
            </div>
        )
    }
}

export default DisplayWeather;

