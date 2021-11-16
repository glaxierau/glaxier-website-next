import Link from 'next/link'
const FooterLink = ({ src, alt, href = '/', content, width, fontSize, imgWidth }) => {
    return (
        <div className="cursor-pointer">
            <Link href={href}>
                <div className="flex items-center justify-start">
                    <img src={src} alt={alt} width={imgWidth && imgWidth} />
                    <p className={`${width && 'w-4/5'} ml-5 cursor-pointer ${fontSize} `}>{content}</p>
                </div>
            </Link>
        </div>
    )
}

export default FooterLink
