export const updateForm = (newForm, dispatch) => {
    return dispatch({ type: 'GET_CONTACT_FORM', form: newForm })
}