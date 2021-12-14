import Slider from 'react-slick'
import { client_settings } from '../../config/carousel.setting'
import Badge from '../icons/Badge'
import Title from '../Title'

const Client = ({ clientTitle, clientDescription, clients }) => {
    return (
        <div className="bg-white-dark mt-2 py-20">
            <div className="relative flex flex-col items-center justify-center">
                <Title title={clientTitle} lineColor="#CFD7F1" lineWidth="180" /> <br /> <br />
                <p className="lg:w-2/6 w-full xl:px-0 lg:px-0 md:px-36 px-5 text-black-light">{clientDescription[0].children[0].text}</p>

            </div>
            <Slider {...client_settings} className="lg:w-3/5 w-10/12 mx-auto mt-14" >
                {clients.map(client => <Badge key={client._key} />)}
            </Slider>
        </div>
    )
}

export default Client
