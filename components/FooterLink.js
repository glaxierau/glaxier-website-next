import Link from 'next/link'
const FooterLink = ({ src, alt, href = '/', content, width }) => {
    return (
        <div className="flex items-center justify-start">
            <img src={src} alt={alt} />
            <Link href={href}>
                <p className={`${width && 'w-4/5'} ml-5 cursor-pointer`}>{content}</p>
            </Link>
        </div>
    )
}

export default FooterLink
