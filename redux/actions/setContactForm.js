import * as t from '../types'
const setContactForm = (form, error) => {
    type: t.GET_CONTACT_FORM,
        form,
        error
}

export default setContactForm