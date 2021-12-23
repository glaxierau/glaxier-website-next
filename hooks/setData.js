import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function setData(props, dispatch, data) {
    // const dispatch = useDispatch()
    // const { data } = useSelector(state => state.data)
    if (data === null) {
        console.log('Data is empty, adding them now...')
        dispatch({ type: 'GET_DATA', data: props })
        console.log('Data Added!')
    } else {
        console.log('Updating...')
        dispatch({ type: 'GET_DATA', data: { ...data, props } })
        console.log('Data Updated!')
    }
    return null
}