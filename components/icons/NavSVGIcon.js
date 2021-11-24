import React, { useState } from 'react'

function NavSVGIcon({ size = ['20', '20'], children, otherProps }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-purple hover:fill-red cursor-pointer" width={size[0]} height={size[1]} viewBox="0 0 29.257 29.25" {...otherProps}>
            {children}
        </svg>
    )
}

export default NavSVGIcon
