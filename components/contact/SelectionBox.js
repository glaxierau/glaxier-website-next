import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { withSizeLessThan } from '../../hooks/useWindowSize'
import Img from 'next/image'


const SelectionBox = ({ icon, active, onClick, imgSize = 28, href, path }) => {
    const router = useRouter()
    const currentPath = router.pathname.split('/')[2]
    const expectedPath = path.split('/')[2]
    const [isHovered, setHover] = useState(false)
    const img = `/assets/img/contact/icons/menu_icons/${icon}.svg`
    const basicClassName = `flex items-center justify-center lg:w-16 lg:h-16 md:w-14 md:h-14 w-4 h-4 rounded-full transition duration-200 ease-in-out`
    const extraClassName = active || isHovered || currentPath === expectedPath ? `bg-red` : `bg-purple`
    return (
        <Link href={href} passHref>
            <div className={`bg-white flex items-center justify-center lg:w-20 lg:h-20 md:w-16 md:h-16 w-5 h-5 rounded-full hover:border ${active && 'border'} ${currentPath === expectedPath && 'border'} border-red cursor-pointer`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className={`${basicClassName} ${extraClassName}`} onClick={onClick}>
                    {!withSizeLessThan(767) && <Img src={img} width={imgSize} height={imgSize} objectFit='contain' />}
                </div>
            </div>
        </Link>
    )
}

export default SelectionBox
