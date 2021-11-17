import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'


const SelectionBox = ({ icon, active, onClick, imgSize = 20, href, path }) => {
    const router = useRouter()
    const currentPath = router.pathname.split('/')[2]
    const expectedPath = path.split('/')[2]
    const [isHovered, setHover] = useState(false)
    const img = `/assets/img/contact/icons/menu_icons/${icon}.svg`
    const basicClassName = `flex items-center justify-center lg:w-16 lg:h-16 md:w-16 md:h-16 w-10 h-10 rounded-full transition duration-200 ease-in-out`
    const extraClassName = active || isHovered || currentPath === expectedPath ? `bg-red` : `bg-purple`
    return (
        <Link href={href}>
            <div className={`bg-white flex items-center justify-center lg:w-20 lg:h-20 w-14 h-14 rounded-full hover:border ${active && 'border'} ${currentPath === expectedPath && 'border'} border-red cursor-pointer`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className={`${basicClassName} ${extraClassName}`} onClick={onClick}>
                    <img src={img} width={imgSize} height={imgSize} />
                </div>
            </div>
        </Link>
    )
}

export default SelectionBox
