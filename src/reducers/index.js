import { combineReducers } from 'redux'
import { characteReducer } from './characterReducer'

export default combineReducers({
    character : characteReducer
}) 