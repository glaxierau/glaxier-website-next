import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { client_settings } from '../../config/carousel.setting'
import SlideIn from '../animation/SlideIn'
import Badge from '../icons/Badge'
import Title from '../Title'

const Client = (props) => {
    const { clientSection } = props
    if (props)
        return (
            <div className="snap-center xl:h-screen lg:h-screen h-auto flex flex-col bg-white-dark mt-2 py-40">
                <SlideIn>
                    <div className="relative flex flex-col items-center justify-center">
                        <Title title={clientSection.clientTitle} lineColor="#CFD7F1" lineWidth="180" /> <br /> <br />
                        <p className="lg:w-2/6 w-full xl:px-0 lg:px-0 md:px-36 px-5 text-black-light">{clientSection.clientDescription[0].children[0].text}</p>

                    </div>
                </SlideIn>
                <SlideIn>
                    <Slider {...client_settings} className="lg:w-3/5  w-10/12 mx-auto mt-14 py-2" >
                        {clientSection.clients.map(client => <Badge key={client._id} image={client.logo.image} />)}
                    </Slider>
                </SlideIn>
            </div>
        )
}

export default Client
