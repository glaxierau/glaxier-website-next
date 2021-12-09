import { combineReducers } from 'redux'
import services from './services'
import about from './about'

const rootReducer = combineReducers({
    services,
    about
})

export default rootReducer