const weatherReducer = (state= {currentWeather: [], requesting: false}, action) => {
    switch(action.type) {
        case "FETCHING_WEATHER":
            return {...state, currentWeather: [...state.currentWeather], requesting: true}
        case "WEATHER_RECEIVED":
            return {...state, currentWeather: [...state.currentWeather].concat(action.resJSON), requesting: false}
        default: 
            return state;
    }
}

export default weatherReducer;

