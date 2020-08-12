import { combineReducers } from 'redux';
import userReducer   from './userReducer';
import todoReducer from './todoReducer'
import newsReducer from './newsReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
    user: userReducer,
    todo: todoReducer,
    articles: newsReducer,
    weather: weatherReducer
})

