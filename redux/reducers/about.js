import * as t from '../types'
const initialState = {
    about: null
}
const about = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_ABOUT:
            return { ...state, about: action.about };
        default:
            return { ...state }
    }
}

export default about