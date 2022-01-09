import Img from 'next/image'
import { numberWithCommas } from '../../hooks/tools'

export const Icon = ({ colorChange, value, className }) => {
    return (
        <div className={`flex flex-col z-0 justify-center items-center, ${className}`}>
            <p
                className={`${!colorChange ? 'text-red' : 'text-gray-500'
                    } font-bold py-3`}
            >
                {numberWithCommas(value)}
            </p>
            <Img
                src="/assets/img/contact/icons/blue_icons/expected_revenue.svg"
                alt="revenue"
                width={60}
                height={60}
            />
        </div>
    )
}