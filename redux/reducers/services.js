import * as t from '../types'
const initialState = {
    services: null,
    serviceMap: null,
    error: null
}
const services = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_SERVICES:
            return { ...state, services: action.services, serviceMap: action.serviceMap, error: action.error };
        default:
            return { ...state }
    }
}

export default services