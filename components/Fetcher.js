import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Head from './common/Head'
import { motion } from 'framer-motion'

const Fetcher = ({ setStatus }) => {
    const { data } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(async () => {
        if (data) {
            console.log('Data already exists...')
            setStatus(true)
        }
        else {
            setStatus(false)
            await axios.get(`/api/data`)
                .then(res => {
                    console.log('Getting Data...')
                    dispatch({ type: 'GET_DATA', data: res.data })
                    res.data && setStatus(true)
                })
        }
    }, [])
    return (
        <>
            <Head title="Glaxier Website" />
            {!data ?
                <motion.div className="-mt-20 h-screen w-screen flex flex-col items-center justify-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: 'Infinity', duration: 2, type: 'spring' }}
                        className="h-80 w-80">
                        <img src="/assets/svg/logo.svg" alt="logo" />
                    </motion.div>
                    <h2 className="text-center lg:text-3xl text-xl font-thin text-purple" style={{ fontFamily: "Cutive Mono" }}>Welcome to Glaxier!</h2>
                </motion.div>
                : ''}
        </>
    )
}

export default Fetcher
