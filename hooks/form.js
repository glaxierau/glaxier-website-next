import { useDispatch, useSelector } from "react-redux"

export const updateForm = (newForm, dispatch) => {
    // const {form} = useSelector(state => state.contactForm)
    return dispatch({ type: 'GET_CONTACT_FORM', form: newForm })
}