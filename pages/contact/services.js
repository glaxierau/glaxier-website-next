import React, { useState } from 'react'
import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import { setToTrue } from '../../hooks/setToTrue'
import { setToFalse } from '../../hooks/setToFalse'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'


const Box = ({ content, onClick, currentStatus }) => {
    const [active, setActive] = useState(false)

    const onClicked = (e) => {
        onClick(e)
        setActive(!active)
        // currentStatus(active)
    }
    const basicStyle = "bg-white-dark border-purple border h-10 rounded-lg m-2 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
    const boxHover = "hover:bg-red hover:text-white hover:border-none"
    const color = active ? "bg-red text-white border-none" : "bg-white-dark text-black"
    return (
        <div className={`${basicStyle} ${color} ${boxHover}`} style={{ width: 250 }} onClick={(e) => onClicked(e)}>
            <p className="text-center p-2" style={{ fontSize: '0.75rem', fontWeight: 'bolder' }}>{content}</p>
        </div>
    )
}


const index = ({ serviceSection }) => {
    const sm = withSizeLessThan(900)
    const [selectedList, setSelectedList] = useState([])

    const onSelectingBox = (selected) => {
        const tempSelections = selectedList
        const exist = tempSelections.filter(list => list === selected)
        if (exist.length !== 0) {
            tempSelections.splice(tempSelections.indexOf(selected), 1)
            setSelectedList(tempSelections)
        }
        else {
            tempSelections.push(selected)
            setSelectedList(tempSelections)
        }
    }
    return (
        <div className="">
            <SectionHead title="Contact Us | Services" />
            <ContactTitle title={serviceSection.question} />
            <div className="flex justify-center items-center  lg:flex-row md:flex-row flex-wrap flex-col mx-auto" style={{ width: sm ? 300 : 800 }}>
                {
                    serviceSection.services.map(service => (<Box key={service} content={service} onClick={() => onSelectingBox(service)} />))
                }
            </div>
            <div className="mx-auto w-56 py-10">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/additional-information' />
            </div>
        </div>
    )
}

export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{serviceSection}`)
    return { props }
}

export default index
