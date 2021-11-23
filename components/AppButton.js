import { motion } from 'framer-motion'
import Link from 'next/link'

const AppButton = ({ title, width, height, link, txtColor, txtColorHover, bgColor, bgColorHover, customized = false, disabled = false, type = "button" }) => {
    return (
        <>
            {customized ?
                <Link href={`${link || ''}`} >
                    <button type={type} disabled={disabled} className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer border rounded-full flex justify-center items-center m-2 transition duration-100 ease-in-out`} style={{ width, height: height || 35, fontSize: 12 }}>{title}</button>
                </Link>
                :
                <>
                    <Link href={`${link || ''}`}>
                        <button type={type} disabled={disabled} placeholder={title} className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer rounded-full flex justify-center items-center m-2 transition duration-100 ease-in-out`} style={{ width, height: height || 35, fontSize: 12 }}>{title}</button>
                    </Link>
                </>
            }
        </>
    )
}

export default AppButton
