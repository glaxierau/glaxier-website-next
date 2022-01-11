import { combineReducers } from 'redux'
import services from './services'
import about from './about'
import data from './data'
import contactForm from './contactForm'
import state from './state'

const rootReducer = combineReducers({
    services,
    about,
    data,
    contactForm,
    state
})

export default rootReducer