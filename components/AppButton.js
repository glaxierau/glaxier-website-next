import Link from 'next/link'

const AppButton = ({ title, width, height, link, txtColor, txtColorHover, bgColor, bgColorHover, customized = false }) => {
    return (
        <>
            {customized ?
                <Link href={`${link || ''}`}>
                    <div className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer border rounded-full flex justify-center items-center m-2 `} style={{ width, height: height || 35 }}>
                        <p style={{ fontSize: 12 }}>{title}</p>
                    </div>
                </Link> :
                <Link href={`${link || ''}`}>
                    <div className={`${bgColor} ${bgColorHover} ${txtColor} ${txtColorHover} cursor-pointer rounded-full flex justify-center items-center m-2 `} style={{ width, height: height || 35 }}>
                        <p style={{ fontSize: 12 }}>{title}</p>
                    </div>
                </Link>
            }
        </>
    )
}

export default AppButton
