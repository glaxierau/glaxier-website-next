
const SmCircle = ({ size, ...otherProps }) => {
    return (
        <div className={`absolute z-20 bg-white rounded-full h-${size} w-${size}`} {...otherProps}>
        </div>
    )
}

export default SmCircle
