const API_KEY = process.env.REACT_APP_WEATHER_API_KEY  

export const getWeather = (zip) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_WEATHER"});
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`)
        .then(response => response.json())
        .then(resJSON => {
            dispatch({type: "WEATHER_RECEIVED", resJSON})
        })
        .catch(error => console.log(error))
    }
}