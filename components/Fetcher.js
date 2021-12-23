import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Head from './common/Head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import setData from '../hooks/setData'

const Fetcher = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { data } = useSelector(state => state.data)
    const tofetch = router.route.split('/')[1]
    useEffect(async () => {
        await axios.get(`/api/data`, { params: { type: tofetch } })
            .then(res => {
                const response = res.data
                if (data === null) {
                    console.log('Data is empty, adding them now...')
                    dispatch({ type: 'GET_DATA', data: response })
                    console.log('Data Added!')
                } else {
                    console.log('Updating...')
                    dispatch({ type: 'GET_DATA', data: { ...data, response } })
                    console.log('Data Updated!')
                }
            })

    }, [router.asPath])
    return null
}

export default Fetcher

