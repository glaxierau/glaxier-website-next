import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth })
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
}

export const mobileScreen = () => {
    const [isSmall, setIsSmall] = useState(false)
    const screenSize = useWindowSize()
    useEffect(() => {
        function handleResize() {
            if (screenSize.width > 1028) {
                setIsSmall(false)
            } else {
                setIsSmall(true)
            }
        }
        handleResize()
    }, [screenSize])
    return isSmall
}

export const withSizeLessThan = (size) => {
    const [desireSize, setDSize] = useState(false)
    let screenSize = useWindowSize()
    useEffect(() => {
        function handleResize() {
            if (screenSize.width < size) {
                setDSize(true)
            } else {
                setDSize(false)
            }
        }
        handleResize()
    }, [screenSize.width])
    return desireSize
}



export default useWindowSize