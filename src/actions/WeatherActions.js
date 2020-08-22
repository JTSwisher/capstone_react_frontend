const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

// GET request to retrieve unique locationKey based on user provided zipCode
export const getLocationKey = (zip) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_LOCATION_KEY"});
        fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/US/search?apikey=${API_KEY}&q=${zip}`)
        .then(response => response.json())
        .then(resJSON => {
            // if resJSON.length equals 0 render alert informing user no data for provided zipcode
            if (resJSON.length !== 0) {
                const location = resJSON['0']['EnglishName'];
                dispatch({type: "LOCATION_FETCHED", location}); // set location city in app state
                const locationKey = resJSON['0']['Key'];
                dispatch(getWeatherForecast(locationKey)) // get weather data associated with locationKey
            } else {
                window.alert(`No weather data found for zipcode (${zip}), please try again.`)
            }
        })
        .catch(error => console.log(error))
    }
}

//GET weather data associated with passed in locationKey
export const getWeatherForecast = (locationKey) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_WEATHER_FORECAST"});
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`)
        .then(response => response.json())
        .then(resJSON => {
            const weather = resJSON.DailyForecasts;
            dispatch({type: "WEATHER_FORECAST_RECEIVED", weather})
        })
        .catch(error => console.log(error))
    }
}