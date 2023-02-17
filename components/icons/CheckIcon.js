import React from 'react'
import { useMobileScreen } from '../../hooks/useWindowSize'
import { BsCheck2 } from 'react-icons/bs'

function CheckIcon({ label }) {
    let sm = useMobileScreen
    return (
        <div className="flex flex-col items-center justify-between lg:h-24 h-20 z-10">
            <div className="bg-red-dark lg:h-12 lg:w-12 h-[40px] w-[40px] flex items-center justify-center rounded-full text-white">
                <BsCheck2 className='h-6 w-6' />
            </div>
            <p className="text-purple font-thin" style={{ fontSize: '0.8rem' }}>{label}</p>
        </div>
    )
}

export default CheckIcon
