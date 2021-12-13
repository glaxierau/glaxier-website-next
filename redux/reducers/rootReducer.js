import { combineReducers } from 'redux'
import services from './services'
import about from './about'
import data from './data'

const rootReducer = combineReducers({
    services,
    about,
    data
})

export default rootReducer