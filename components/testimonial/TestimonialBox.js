import { motion } from 'framer-motion'
import { useState } from 'react'
import { shortenText } from '../../hooks/tools'
import Badge from '../icons/Badge'

const TestimonialBox = ({ position, name, text, image }) => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className="mx-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.118"
                height="26.723"
                viewBox="0 0 35.118 26.723"
            >
                <path
                    id="Icon_metro-quote"
                    d="M8.355,23V36.364H22.4V23H15.378s0-6.681,7.024-6.681V9.64S8.355,9.64,8.355,23Zm35.118-6.681V9.64S29.425,9.64,29.425,23V36.364H43.472V23H36.449S36.449,16.321,43.472,16.321Z"
                    transform="translate(-8.355 -9.64)"
                    fill="#9fb0e4"
                />
            </svg>
            <br />
            <motion.div
                animate={{ height: clicked ? 'auto' : '14rem' }}
                className={`${
                    clicked ? 'h-auto' : 'h-60'
                } flex flex-col items-start justify-center cursor-text`}
                onClick={() => setClicked(!clicked)}
            >
                <motion.p className="text-black-light text-sm leading-8">
                    {clicked ? text : shortenText(text)}
                    {!clicked && (
                        <span className="text-purple ml-2 cursor-pointer hover:text-red">
                            <u>Read more</u>
                        </span>
                    )}
                </motion.p>
            </motion.div>
            <div className="flex mt-5">
                <Badge
                    // className="lg:mx-0 lg:mr-5 m-0"
                    height="12"
                    width="12"
                    image={image}
                />
                <div className="flex items-start justify-center flex-col md:ml-5">
                    <p className="font-sm ml-2 text-gray-500">{name}</p>
                    <small className="ml-2 text-gray-500">{position}</small>
                </div>
            </div>
        </div>
    )
}

export default TestimonialBox
