import React, { useState } from 'react'
import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import { setToTrue } from '../../hooks/setToTrue'
import { setToFalse } from '../../hooks/setToFalse'


const Box = ({ content, active, onClick }) => {
    const basicStyle = "bg-white-dark border-purple border h-10 rounded-lg m-2 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
    const boxHover = "hover:bg-red hover:text-white hover:border-none"
    const color = active ? "bg-red text-white border-none" : "bg-white-dark text-black"
    return (
        <div className={`${basicStyle} ${color} ${boxHover}`} style={{ width: 250 }} onClick={onClick}>
            <p className="text-center p-2" style={{ fontSize: '0.75rem', fontWeight: 'bolder' }}>{content}</p>
        </div>
    )
}


const index = () => {
    const sm = withSizeLessThan(900)
    const [states, setState] = useState([
        { type: 0, label: `Need Glaxier's Recommendations`, active: false },
        { type: 1, label: `Website Development`, active: false },
        { type: 2, label: `Content`, active: false },
        { type: 3, label: `Search Engine Optimisation`, active: false },
        { type: 4, label: `Search Ads`, active: false },
        { type: 5, label: `Display Ads`, active: false },
        { type: 6, label: `Social Media Ads`, active: false },
        { type: 7, label: `Graphic Design`, active: false },
        { type: 8, label: `Social Media Profile Management`, active: false },
    ])

    const onSelectingBox = (list) => {
        if (list.active) {
            setToFalse(list, states, setState)
        } else {
            setToTrue(list, states, setState)
        }
    }
    return (
        <div className="">
            <ContactTitle title="Services you need help with" />
            <div className="flex justify-center items-center  lg:flex-row md:flex-row flex-wrap flex-col mx-auto" style={{ width: sm ? 300 : 800 }}>
                {
                    states.map(list => (<Box key={list.type} content={list.label} active={list.active} onClick={() => onSelectingBox(list)} />))
                }
            </div>
            <div className="mx-auto w-56 py-10">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/additional-information' />
            </div>
        </div>
    )
}

export default index
