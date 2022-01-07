import React, { useState } from 'react'
import AppButton from '../../components/AppButton'
import ContactTitle from '../../components/contact/Title'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { pushDataLayer } from '../../helper/pushDataLayer'
import { useDispatch, useSelector } from 'react-redux'


const Box = ({ content, onClick, activeList }) => {
    const active = activeList.filter(list => list === content)[0]
    const basicStyle = "bg-white-dark border-purple border h-10 rounded-lg m-2 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
    const boxHover = "hover:bg-red hover:text-white hover:border-none"
    const color = active ? "bg-red text-white border-none" : "bg-white-dark text-black"
    return (
        <div className={`${basicStyle} ${color} ${boxHover}`} style={{ width: 250 }} onClick={onClick}>
            <p className="text-center p-2" style={{ fontSize: '0.75rem', fontWeight: 'bolder' }}>{content}</p>
        </div>
    )
}


const Services = ({ serviceSection }) => {
    const type = 'Services'
    const dispatch = useDispatch()
    const { form } = useSelector(s => s.contactForm)
    const index = form.findIndex(i => i.type === type)
    const sm = withSizeLessThan(900)

    const onSelectingBox = (selected) => {
        let _index = form[index].services?.indexOf(selected)
        if (_index < 0) {
            form[index].services.push(selected)
            dispatch({ type: 'GET_CONTACT_FORM', form: form })
        } else {
            form[index].services.splice(_index, 1)
            dispatch({ type: 'GET_CONTACT_FORM', form: form })
        }
    }

    const ontoNextPage = () => {
        pushDataLayer('Contact Us', 'Services', form[index].services)
    }

    return (
        <div className="">
            <SectionHead title="Contact Us | Services" />
            <ContactTitle title={serviceSection.question} />
            <div className="flex justify-center items-center  lg:flex-row md:flex-row flex-wrap flex-col mx-auto" style={{ width: sm ? 300 : 800 }}>
                {
                    serviceSection.services.map(service => (<Box key={service} content={service} activeList={form[index].services} onClick={() => onSelectingBox(service)} />))
                }
            </div>
            <div className="mx-auto w-56 py-10">

                <AppButton title="Continue" link='/contact/additional-information' width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" clicked={() => ontoNextPage()} />
                {/* link='/contact/additional-information' */}
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

export default Services
