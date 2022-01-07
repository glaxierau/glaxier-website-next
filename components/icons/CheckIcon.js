import React from 'react'
import { useMobileScreen } from '../../hooks/useWindowSize'

function CheckIcon({ label }) {
    let sm = useMobileScreen
    return (
        <div className="flex flex-col items-center justify-between lg:h-24 h-20">
            <div className="bg-red-dark lg:h-12 lg:w-12 h-8 w-8 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width={sm ? "12" : "22.243"} height="20.121" viewBox="0 0 28.243 20.121">
                    <path id="Icon_feather-check" d="M30,9,13.5,25.5,6,18" transform="translate(-3.879 -6.879)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
            </div>
            <p className="text-purple font-thin" style={{ fontSize: '0.8rem' }}>{label}</p>
        </div>
    )
}

export default CheckIcon
