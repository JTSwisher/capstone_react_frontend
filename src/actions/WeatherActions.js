const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

export const getLocationKey = (zip) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_LOCATION_KEY"});
        fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/US/search?apikey=${API_KEY}&q=${zip}`)
        .then(response => response.json())
        .then(resJSON => {
            const location_key = resJSON['0']['Key']
            dispatch(getWeatherForecast(location_key))
        })
        .catch(error => console.log(error))
    }
}

export const getWeatherForecast = (location_key) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_WEATHER_FORECAST"});
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location_key}?apikey=${API_KEY}`)
        .then(response => response.json())
        .then(resJSON => {
            const weather = resJSON.DailyForecasts;
            dispatch({type: "WEATHER_FORECAST_RECEIVED", weather})
        })
        .catch(error => console.log(error))
    }
}