export const updateForm = (newForm, dispatch) => {
    return dispatch({ type: 'GET_CONTACT_FORM', form: newForm })
}

export const getSpecificForm = (array, type) => {
    const value = array.filter(v => v.type === type)[0]
    return value
}