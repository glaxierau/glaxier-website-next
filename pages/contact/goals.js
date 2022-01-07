import React, { useState } from 'react'
import GoalBox from '../../components/contact/GoalBox'
import ContactTitle from '../../components/contact/Title'
import AppButton from '../../components/AppButton'
import Head from '../../components/common/Head'

import { useSizeLessThan } from '../../hooks/useWindowSize'
import { useSanityImage } from '../../hooks/tools'
import { getData } from '../../hooks/getData'
import { pushDataLayer } from '../../helper/pushDataLayer'
import { useDispatch, useSelector } from 'react-redux'
import { updateForm } from '../../hooks/form'

const Goals = (props) => {
    const type = 'Goal'
    const { withHead = true } = props
    const { goals, question } = props.goalSection
    const dispatch = useDispatch()
    const { form } = useSelector(state => state.contactForm)
    const index = form.findIndex(i => i.type === type)
    let sm = useSizeLessThan(600)

    const onChoosingaGoal = (list) => {
        form[index].value = list
        updateForm(form, dispatch)
    }
    const ontoNextPage = () => {
        pushDataLayer('Contact Us', type, form[index].value)
    }
    return (
        <>
            <div className="h-full">
                {withHead && <Head title="Contact Us | Your Goals" description={question} />}
                <ContactTitle title={question} />
                <div className="flex justify-center flex-wrap m-auto" style={{ width: sm ? 340 : 600, flex: '1 1 160px' }}>
                    {goals.map(list => <GoalBox key={list._key} icon={useSanityImage(list.icon.image)} name={list.text} currentSelection={form[index].value} onClick={() => onChoosingaGoal(list.text)} active={form[index].value === list.text ? true : false} />)}
                </div>
                <div className="mx-auto w-96 flex items-center justify-center py-9">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/contact-details' clicked={() => ontoNextPage()} />
                </div>
            </div>
        </>
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

    const data = await getData(`*[ _type == 'interactiveForm'][${index}]{goalSection}`)
    return {
        props: data
    }
}

export default Goals




