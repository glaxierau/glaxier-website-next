import * as t from '../types'
const initialState = {
    data: null
}
const data = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_DATA:
            return { ...state, data: action.data };
        default:
            return { ...state }
    }
}

export default data