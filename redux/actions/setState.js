import * as t from '../types'
const setState = (common, error) => {
    type: t.GET_STATE,
        common,
        error
}

export default setState