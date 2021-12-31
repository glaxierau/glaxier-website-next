import { combineReducers } from 'redux'
import services from './services'
import about from './about'
import data from './data'
import contactForm from './contactForm'

const rootReducer = combineReducers({
    services,
    about,
    data,
    contactForm
})

export default rootReducer