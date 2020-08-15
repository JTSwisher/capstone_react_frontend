import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocationKey } from '../actions/WeatherActions'
import WeatherForm from '../components/weather/WeatherForm'
import DisplayWeather from '../components/weather/DisplayWeather'

class WeatherContainer extends Component {

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            borderRadius: "25px", 
            height: "28%", 
            padding:"1%", 
            left: "1%", 
            top: "7%",
            textAlign: "center", 
            backgroundColor: "#a4b3b6",
            overflow: "scroll"
        };

        return(
            <div className="weather" style={ containerStyle }>
                <WeatherForm getLocationKey={this.props.getKey} />
                <DisplayWeather weather={this.props.weather} location={this.props.location}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getKey: (zip) => dispatch(getLocationKey(zip))
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather.weatherForecast,
        location: state.weather.location
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);

