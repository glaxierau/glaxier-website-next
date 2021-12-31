import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AppButton from '../../components/AppButton'
import SectionHead from '../../components/common/Head'
import ContactTitle from '../../components/contact/Title'
import { pushDataLayer } from '../../helper/pushDataLayer'
import { getData } from '../../hooks/getData'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const index = ({ additonalInfoSection }) => {
    const type = 'Additional Information'
    const dispatch = useDispatch()
    const router = useRouter
    const { form } = useSelector(s => s.contactForm)
    const index = form.findIndex(i => i.type === type)
    let sm = withSizeLessThan(700)

    const onSubmit = () => {
        alert('Submitted')
        pushDataLayer('Contact Us', 'Additional Information', form[index].value)
    }

    const onGettingInfo = (e) => {
        form[index].value = e.target.value
        dispatch({ type: 'GET_CONTACT_FORM', form })
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Detail" />
            <ContactTitle title={additonalInfoSection.question} />
            <textarea value={form[index].value || ''} cols={60} rows={10} placeholder={additonalInfoSection.placeholder} style={{ width: sm ? 300 : 500 }}
                onChange={(e) => onGettingInfo(e)} />
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Submit" type="submit" link="/" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" clicked={() => onSubmit()} />
            </div>
        </div>
    )
}

export default index



export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{additonalInfoSection}`)
    return {
        props
    }
}
