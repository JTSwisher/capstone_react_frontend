const API_KEY = process.env.REACT_APP_NEWS_API_KEY  

export const getNews = (genre) => {
    return (dispatch) => {
        dispatch({type: "FETCHING_NEWS"});
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${genre}&pageSize=80&apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(resJSON => {
            dispatch({type: "NEWS_RECEIVED", resJSON})
        })
        .catch(error => console.log(error))
    }
}

