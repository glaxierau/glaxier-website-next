import * as t from '../types'
const initialState = {
    form: [
        { type: 'Additional Information', value: null },
        { type: 'Services', services: [] },
        { type: 'Expected Revenue', revenue: null },
        { type: 'Industry of Business', value: null },
        { type: 'Contact Detail', lastName: '', firstName: '', email: '', phoneNumber: '' },
        { type: 'Goal', value: '' },
    ]
}
const about = (state = initialState, action) => {
    switch (action.type) {
        case t.GET_CONTACT_FORM:
            return { ...state, form: action.form };
        default:
            return { ...state }
    }
}

export default about