import React, { useEffect, useState } from 'react'
import Title from '../Title'
import { mobileScreen, withSizeLessThan } from '../../hooks/useWindowSize'
import Particles from '../particles/Particles'
import Circle from '../particles/Circle'
import { setToTrue } from '../../hooks/setToTrue'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { motion } from 'framer-motion'
import Loading from '../loading/Loading'
import { getDataInsideComp } from '../../hooks/getData'
import useSWR from 'swr'
import axios from 'axios'

const Service = ({ paddingBottom = false, preTitle, title }) => {

    // ------------------ database variables -------------------
    const [services, setServices] = useState([])
    const [serviceMap, setserviceMap] = useState([])
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(true)
    // const defaultServiceMap = { defaultDescription: serviceMap.defaultDescription[0].children[0].text, serviceSubtitle: serviceMap.defaultSubtitle, serviceTitle: serviceMap.defaultTitle }

    // ----------------------------- Variables ------------------------------
    const defaultIndex = { type: 1, label: "Our Services", subTitle: 'We can do these awesome things', description: 'Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.', active: false }
    const [currentIndex, setIndex] = useState(serviceMap)
    const [changing, setChanging] = useState(false)
    const fetcher = async (url) => await axios.get(url).then(res => res.data)
    // const { data, k } = useSWR(`${process.env.apiUrl}*[_type == 'serviceMap'][0]`, fetcher)
    // console.log(data)
    // ------------ get data from database --------------
    useEffect(async () => {
        //--- Services -----
        const query = `*[_type =='services'][0]`
        await getDataInsideComp(query, setServices, setError);
        //--- Service Map -----
        const queryServiceMap = `*[_type == 'serviceMap'][0]`
        await getDataInsideComp(queryServiceMap, setserviceMap, setError)
        setLoading(false)
    }, [])

    const [lists, setLists] = useState(serviceMap)
    console.log('lists', lists)




    useEffect(() => {
        // ----- Current Index -------
        // console.log(serviceMap.defaultTitle)
        // setIndex({ _key: serviceMap._key, defaultDescription: serviceMap.defaultDescription[0].children[0].text, serviceSubtitle: serviceMap.defaultSubtitle, serviceTitle: serviceMap.defaultTitle })
        // console.log(serviceMap.defaultDescription[0].children[0].text)
        // setIndex({ _key: serviceMap._id, defaultDescription: serviceMap.defaultDescription[0].children[0].text, serviceSubtitle: serviceMap.defaultSubtitle, serviceTitle: serviceMap.defaultTitle })
    }, [serviceMap.defaultDescription])



    // const onSelecting = (e) => {
    //     const innerText = e.target.innerText
    //     const foundIndex = lists.filter(list => list.label === innerText)[0]
    //     setIndex(foundIndex)
    //     setAllToFalse(lists, setLists);
    //     setToTrue(foundIndex, lists, setLists)
    // }
    useEffect(() => {
        setChanging(false)
        return setTimeout(() => setChanging(true), 300)
    }, [currentIndex])

    // -------------------- Screen Responsiveness ---------------
    let sm = mobileScreen()
    let mobileView = withSizeLessThan(600)


    // if (!loading && services.length !== 0 && serviceMap.length !== 0) {
    if (!loading) {
        return (
            <motion.div className={`bg-white-dark ${paddingBottom ? 'py-10' : 'pt-10'} `}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <div className="lg:px-44 md:px-40 px-4">
                    <h2 className="lg:text-3xl md:text-3xl text-2xl font-extrabold lg:mb-5 mb-1">{services.introductionSection.preTitle}</h2>
                    <h1 className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-red mb-8">{services.introductionSection.title}</h1>
                    <p className="text-small font-thin text-gray-500 xl:w-3/4 lg:3/4 w-full">{services.introductionSection.sectionDescription[0].children[0].text}</p>
                </div>
                <div className="h-screen  mt-20  flex justify-center items-center relative text-center overflow-visible" style={{ width: '100%' }}>
                    <img onClick={() => { setIndex(defaultIndex), setAllToFalse(lists, setLists) }} src={`/assets/img/home/${mobileView ? 'smCircles' : 'lgCircles'}.png`} className={"circle_image absolute top-0 z-10 w-full lg:object-cover md:object-cover object-cover h-screen"} alt="circles" />
                    <Particles />
                    {/* <Circle style={sm ? { top: '8rem', left: '5%' } : { top: '5rem', left: '20%' }} title={lists} onClick={(e) => onSelecting(e)} active={lists[0].active} />
                    <Circle style={sm ? { top: '5rem', right: '5%' } : { top: '5rem', right: '13%' }} title={lists[1].label} onClick={(e) => onSelecting(e)} active={lists[1].active} />
                    <Circle style={sm ? { bottom: '6rem', left: '5%' } : { bottom: '2rem', left: '14%' }} title={lists[2].label} onClick={(e) => onSelecting(e)} active={lists[2].active} />
                    <Circle style={sm ? { bottom: '8rem', right: '5%' } : { bottom: '2rem', right: '20%' }} title={lists[3].label} onClick={(e) => onSelecting(e)} active={lists[3].active} /> */}
                    {changing && currentIndex &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="position top-0 left-1/2 z-10 flex items-center justify-center flex-col mt-6">
                            <Title title={currentIndex.serviceMap.defaultTitle || 'loading'} lineColor="#fff" lineWidth="210" /> <br />
                            <h3 className="lg:text-lg font-black text-base">{currentIndex.serviceMap.defaultSubtitle || 'loading'}</h3> <br />
                            {/* <p className="lg:w-96 w-72 text-white font-thin leading-5">{currentIndex.serviceMap.defaultDescription[0].children[0].text || "loading"}</p> */}
                        </motion.div>
                    }
                </div>
            </motion.div>
        )
    }
    else {
        return <Loading />
    }
}




export default Service
