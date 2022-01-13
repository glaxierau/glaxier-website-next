import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const AppButton = ({ title, width = 'auto', height, link = null, txtColor, txtColorHover, bgColor, bgColorHover, customized = false, disabled = false, type = "button", clicked, ...other }) => {
    const router = useRouter()

    const onClicked = () => {
        clicked && clicked()
        link && router.push(link)
    }
    return (
        <>
            {customized ?
                <motion.button whileHover={{ scale: 1.01, transition: { type: 'spring' } }} type={type} disabled={disabled} className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer border rounded-full flex justify-center items-center m-2 transition duration-100 ease-in-out py-2 px-2`} style={{ width, height: height || 35, fontSize: 15 }} onClick={onClicked}{...other}>{title}</motion.button>
                :
                <motion.button whileHover={{ scale: 1.01, transition: { type: 'spring' } }} type={type} disabled={disabled} placeholder={title} className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer rounded-full flex justify-center items-center m-2 transition duration-100 ease-in-out py-2`} style={{ width, height: height || 35, fontSize: 15 }} onClick={onClicked} {...other}>{title}</motion.button>
            }
        </>
    )
}

export default AppButton
