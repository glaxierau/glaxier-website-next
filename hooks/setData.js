import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function setData(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        if (props) {
            console.log('Data is empty, adding them now...')
            dispatch({ type: 'GET_DATA', data: props })
            console.log('Data Added!')
        } else null
    }, [props])

    return null
}