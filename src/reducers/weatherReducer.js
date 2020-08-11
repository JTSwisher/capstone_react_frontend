const weatherReducer = (state= {currentWeather: [], forecastWeather: [], requesting: false}, action) => {
    switch(action.type) {
        case "FETCHING_WEATHER":
            return {...state, currentWeather: [], forecastWeather: [], requesting: true}
        case "WEATHER_RECEIVED":
            return {...state, currentWeather: [], forecastWeather: [], requesting: false}
        default: 
            return state;
    }
}

export default weatherReducer;