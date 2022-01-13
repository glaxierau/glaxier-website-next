import Link from 'next/link'
import Img from 'next/image'
const FooterLink = ({ children, href = '/', content, width, fontSize, color }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="cursor-pointer hover:scale-50 hover:shadow-around">
            <div className="flex items-center justify-start">
                {children}
                <p className={`${width && 'w-4/5'} ml-5 cursor-pointer ${fontSize} ${color} `}>{content}</p>
            </div>
        </a>
    )
}

export default FooterLink
