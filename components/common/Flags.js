import { AU, TH } from 'country-flag-icons/react/3x2'
import { useRouter } from 'next/router'
import React from 'react'

export default function Flags({ inline = true }) {
    const router = useRouter()
    const onChangingFlag = (value) => {
        router.push('', '', { locale: value })
    }
    return (
        <div className={`${inline && 'flex'}`}>
            <li onClick={() => onChangingFlag('en-au')}>
                <AU className='relative lg:w-[55px] w-[30px] cursor-pointer' />
            </li>
            <li onClick={() => onChangingFlag('th-th')}>
                <TH className={`relative lg:w-[55px] w-[30px] cursor-pointer ${inline && 'ml-5'}`} />
            </li>
        </div>
    )
}
