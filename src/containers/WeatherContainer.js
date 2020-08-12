import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions/WeatherActions'
import WeatherForm from '../components/weather/WeatherForm'

class WeatherContainer extends Component {

    render() {
        const containerStyle = {
            position: "fixed", 
            width: '48%', 
            border: "1px solid black", 
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
        weather: state.currentWeather
    }
}

export default connect(null, mapDispatchToProps)(WeatherContainer);