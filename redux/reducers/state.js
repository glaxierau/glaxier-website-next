import * as t from '../types'
const initialState = {
    state: [],
    error: null
}
const state = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_STATE:
            return { ...state, state: action.state, error: action.error };
        default:
            return { ...state }
    }
}

export default state