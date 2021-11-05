
const FooterLink = ({ src, alt, href, content, width }) => {
    return (
        <div className="flex items-center justify-start p-3 pt-6">
            <img src={src} alt={alt} />
            <a href={href}>
                <p className="" className={`${width && 'w-4/5'} ml-5`}>{content}</p>
            </a>
        </div>
    )
}

export default FooterLink
