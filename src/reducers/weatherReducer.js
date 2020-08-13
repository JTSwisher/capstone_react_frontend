const weatherReducer = (state= {weatherForecast: [], requesting: false}, action) => {
    switch(action.type) {
        case "FETCHING_LOCATION_KEY":
            return {...state, weatherForecast: [], requesting: true}
        case "FETCHING_WEATHER_FORECAST":
            return {...state, weatherForecast: [], requesting: true}
        case "WEATHER_FORECAST_RECEIVED":
            return {...state, weatherForecast: [].concat(action.weather), requesting: false}
        default: 
            return state;
    }
}

export default weatherReducer;

