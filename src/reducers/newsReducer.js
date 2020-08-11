const newsReducer = (state= {articles: [], requesting: false}, action) => {
    switch(action.type) {
        case "FETCHING_NEWS":
            return {...state, articles: [], requesting: true}
        case "NEWS_RECEIVED":
            return {...state, articles: [...state.articles].concat(action.resJSON.articles), requesting: false}
        default: 
            return state;
    }
}

export default newsReducer;