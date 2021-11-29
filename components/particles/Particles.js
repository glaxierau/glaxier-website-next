import SmCircle from './SmCircle'
import { mobileScreen } from '../../hooks/useWindowSize'

const Particles = () => {
    let sm = mobileScreen()
    return (
        <div>
            <SmCircle size={sm ? "3" : "6"} style={sm ? { top: '5rem', left: '10%' } : { top: '5rem', left: '20%' }} />
            <SmCircle size={sm ? "5" : "10"} style={sm ? { top: '4rem', left: '20%' } : { top: '6rem', left: '35%' }} />
            <SmCircle size={sm ? "5" : "10"} style={sm ? { top: '12rem', right: '5%' } : { top: '5rem', right: '33%' }} />
            <SmCircle size={sm ? "3" : "6"} style={sm ? { top: '40rem', right: '10%' } : { top: '4rem', right: '10%' }} />
            <SmCircle size={sm ? "3" : "6"} style={sm ? { top: '22rem', left: '8%' } : { top: '22rem', left: '18%' }} />
            <SmCircle size={sm ? "5" : "10"} style={sm ? { bottom: '3.5rem', left: '31%' } : { bottom: '3.5rem', left: '31%' }} />
            <SmCircle size={sm ? "3" : "6"} style={sm ? { bottom: '1.5rem', right: '22%' } : { bottom: '1.5rem', right: '33%' }} />
            <SmCircle size={sm ? "5" : "10"} style={sm ? { bottom: '20rem', right: '5%' } : { bottom: '20rem', right: '13%' }} />
        </div>
    )
}

export default Particles
