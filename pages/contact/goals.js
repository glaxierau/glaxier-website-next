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
import { getServerSideProps } from '.'
import { getData } from '../../hooks/getData'
import { useSelector } from 'react-redux'

const Goals = ({ goalSection }) => {
    const { goals, question } = goalSection
    const router = useRouter()
    const [withHead, setWithHead] = useState(false)
    let [lists, setLists] = useState([
        { key: 0, icon: 'growth', type: 'Growth', name: 'Growth', active: false },
        { key: 1, icon: 'branding', type: 'Branding', name: 'Branding', active: false },
        { key: 2, icon: 'awareness', type: 'Awareness', name: 'Awareness', active: false },
        { key: 3, icon: 'sales', type: 'Sales', name: 'Sales', active: false },
        { key: 4, icon: 'education', type: 'Education', name: 'Education', active: false },
        { key: 5, icon: 'market', type: 'Market', name: 'Market Research', active: false },
        { key: 6, icon: 'profitability', type: 'Profitability', name: 'Profitability', active: false },
    ])

    let sm = withSizeLessThan(600)

    const onChoosingaGoal = (list) => {
        // if (list.active) {
        //     setToFalse(list, lists, setLists)
        // } else {
        //     setToTrue(list, lists, setLists)
        // }
    }

    useEffect(() => {
        router.asPath === "/contact/goals" ? setWithHead(true) : setWithHead(false)
    }, [router.asPath])
    return (
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
    )
}
export default Goals




