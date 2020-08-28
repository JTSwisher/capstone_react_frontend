const weatherReducer = (state= {weatherForecast: [], location: '', requesting: false}, action) => {
    switch(action.type) {
        case "FETCHING_LOCATION_KEY":
            return {...state, weatherForecast: [], requesting: true}
        case "LOCATION_FETCHED":
            return {...state, weatherForecast: [], location: `${action.location}`, requesting: true}
        case "FETCHING_WEATHER_FORECAST":
            return {...state, weatherForecast: [], requesting: true}
        case "WEATHER_FORECAST_RECEIVED":
            return {...state, weatherForecast: action.weather, requesting: false}
        default: 
            return state;
    }
}

export default weatherReducer;

