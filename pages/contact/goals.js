import React, { useState } from 'react'
import GoalBox from '../../components/contact/GoalBox'
import ContactTitle from '../../components/contact/Title'
import AppButton from '../../components/AppButton'
import Head from '../../components/common/Head'

import { withSizeLessThan } from '../../hooks/useWindowSize'
import { sanityImage } from '../../hooks/tools'
import { getData } from '../../hooks/getData'

const Goals = (props) => {
    const { withHead = true } = props
    const { goals, question } = props.goalSection
    let sm = withSizeLessThan(600)
    const [selectedGoal, setSelectedGoal] = useState('none')

    const onChoosingaGoal = (list) => {
        setSelectedGoal(list)
    }
    return (
        <>
            <div className="h-auto">
                {withHead && <Head title="Contact Us | Your Goals" description={question} />}
                <ContactTitle title={question} />
                <div className="flex justify-center flex-wrap m-auto" style={{ width: sm ? 340 : 600, flex: '1 1 160px' }}>
                    {goals.map(list => <GoalBox key={list._key} icon={sanityImage(list.icon.image)} name={list.text} currentSelection={selectedGoal} onClick={() => onChoosingaGoal(list.text)} active={selectedGoal === list.text ? true : false} />)}
                </div>
                <div className="mx-auto w-96 flex items-center justify-center py-9">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/contact-details' />
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




