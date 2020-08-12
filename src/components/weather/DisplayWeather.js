import React, { Component } from 'react';
import Weather from './Weather'

class DisplayWeather extends Component {

    render() {
       const weather = this.props.weather.map(w => <Weather weather={w} />)
        
        return (
            <div>
                { weather }
            </div>
        )
    }
}

export default DisplayWeather;