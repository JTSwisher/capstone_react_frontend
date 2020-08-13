import React, { Component } from 'react';
import Weather from './Weather'

class DisplayWeather extends Component {

    render() {
       const weather = this.props.weather.map((w, idx) => <Weather id={idx} weather={w} /> )
        return (
            <div>
               { weather }
            </div>
        )
    }
}

export default DisplayWeather;

