import React from 'react'

const SearchBox = ({ shadow, border = false, rounded = true, ...otherProps }) => {
    return (
        <div className={`w-full h-12 bg-white ${shadow && 'shadow-lg'}  border-purple  ${rounded && 'rounded-3xl'} flex justify-around items-center`}>
            <svg className="mx-4" xmlns="http://www.w3.org/2000/svg" width="22.621" height="22.621" viewBox="0 0 30.621 30.621">
                <g id="Icon_feather-search" transform="translate(-3 -3)">
                    <path id="Path_1" d="M28.5,16.5a12,12,0,1,1-12-12,12,12,0,0,1,12,12Z" fill="none" stroke="#d0d0d0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path id="Path_2" d="M31.5,31.5l-6.525-6.525" fill="none" stroke="#d0d0d0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
            </svg>
            <input placeholder="Search for a keyword" className={`w-11/12 text-base py-1 text-purple ${border && 'border-b border-white-dark'}`} {...otherProps} />
            <svg className="mx-4" xmlns="http://www.w3.org/2000/svg" width="20.25" height="20.25" viewBox="0 0 29.25 29.25">
                <path id="Icon_ionic-ios-close-circle" data-name="Icon ionic-ios-close-circle" d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm3.705,19.92L18,19.589l-3.705,3.705a1.124,1.124,0,1,1-1.589-1.589L16.411,18l-3.705-3.705a1.124,1.124,0,0,1,1.589-1.589L18,16.411l3.705-3.705a1.124,1.124,0,1,1,1.589,1.589L19.589,18l3.705,3.705a1.129,1.129,0,0,1,0,1.589A1.116,1.116,0,0,1,21.705,23.295Z" transform="translate(-3.375 -3.375)" fill="#d0d0d0" />
            </svg>
        </div>
    )
}

export default SearchBox
