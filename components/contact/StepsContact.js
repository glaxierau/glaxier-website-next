import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { setAllToFalse } from '../../hooks/setAllToFalse'
import { setToTrue } from '../../hooks/setToTrue'
import SelectionBox from './SelectionBox'

const StepsContact = ({ show }) => {
    const router = useRouter()
    const path = router.pathname.split('/')[1]

    const [lists, setLists] = useState([
        { key: 0, type: 'Trophy', icon: 'trophy', active: false, imgSize: 20, href: '/contact/goals' },
        { key: 6, type: 'Person', icon: 'person', active: false, imgSize: 28, href: '/contact/contact-details' },
        { key: 1, type: 'Bag', icon: 'bag', active: false, imgSize: 30, href: '/contact/industry-of-business' },
        { key: 2, type: 'Money', icon: 'money', active: false, imgSize: 30, href: '/contact/expected-revenue' },
        { key: 3, type: 'Idea', icon: 'idea', active: false, imgSize: 30, href: '/contact/services' },
        { key: 5, type: 'Hands', icon: 'hands', active: false, imgSize: 30, href: '/contact/additional-information' }
    ])


    const onChoosingBox = (list) => {
        setAllToFalse(lists, setLists)
        setToTrue(list, lists, setLists)
    }
    return (
        <>
            {path === 'contact' && show &&
                <div className="bg-purple flex items-center justify-between lg:my-20 md:my-10 my-10 lg:mx-40 md:mx-36 mx-10 lg:flex h-px">
                    {lists.map(list => <SelectionBox key={list.key} icon={list.icon} active={list.active} imgSize={list.imgSize} href={list.href} onClick={() => onChoosingBox(list)} path={list.href} />)}
                </div>
            }
        </>
    )
}

export default StepsContact
