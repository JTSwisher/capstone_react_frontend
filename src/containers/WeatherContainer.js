import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/WeatherActions'
import WeatherForm from '../components/weather/WeatherForm'
import DisplayWeather from '../components/weather/DisplayWeather'

class WeatherContainer extends Component {

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            border: "2px solid black",
            borderRadius: "25px", 
            height: "21%", 
            padding:"2%", 
            left: "1%", 
            top: "6%",
            textAlign: "center", 
            backgroundColor: "lightcyan",
            overflow: "scroll"
        };

        return(
            <div className="weather" style={ containerStyle }>
                <WeatherForm getWeather={this.props.get}/>
                <DisplayWeather weather={this.props.weather}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: (zip) => dispatch(getWeather(zip))
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather.currentWeather
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);