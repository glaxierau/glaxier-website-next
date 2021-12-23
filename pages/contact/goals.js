import React, { useEffect, useState } from 'react'
import GoalBox from '../../components/contact/GoalBox'
import ContactTitle from '../../components/contact/Title'
import AppButton from '../../components/AppButton'
import Head from '../../components/common/Head'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { setToTrue } from '../../hooks/setToTrue'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import { setToFalse } from '../../hooks/setToFalse'
import { useRouter } from 'next/router'
import { sanityImage } from '../../hooks/tools'
import { getData } from '../../hooks/getData'
import { useSelector } from 'react-redux'

const Goals = (props) => {
    const { withHead = true } = props
    const { goals, question } = props.goalSection
    let sm = withSizeLessThan(600)

    const onChoosingaGoal = (list) => {
        // if (list.active) {
        //     setToFalse(list, lists, setLists)
        // } else {
        //     setToTrue(list, lists, setLists)
        // }
    }


    return (
        <>
            <div className="h-auto">
                {withHead && <Head title="Contact Us | Your Goals" description={question} />}
                <ContactTitle title={question} />
                <div className="flex justify-center flex-wrap m-auto" style={{ width: sm ? 340 : 600, flex: '1 1 160px' }}>
                    {goals.map(list => <GoalBox key={list._key} icon={sanityImage(list.icon.image)} name={list.text} onClick={() => onChoosingaGoal(list.text)} />)}
                </div>
                <div className="mx-auto w-96 flex items-center justify-center py-9">
                    <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/contact-details' />
                </div>
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const data = await getData(`*[ _type == 'interactiveForm'][1]{goalSection}`)
    return {
        props: data
    }
}

export default Goals




