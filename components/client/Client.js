import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { client_settings } from '../../config/carousel.setting'
import SlideIn from '../animation/SlideIn'
import SlideInRight from '../animation/SlideInRight'
import Badge from '../icons/Badge'
import Title from '../Title'

const Client = (props) => {
    const { clientSection } = props
    if (props)
        return (
            <div className=" snap-center xl:h-screen lg:h-screen h-auto flex flex-col mt-2 py-20">
                <SlideIn>
                    <div className="relative flex flex-col items-center justify-center">
                        <Title
                            title={clientSection.clientTitle}
                            lineColor="#CFD7F1"
                            lineWidth="180"
                        />{' '}
                        <br />
                        <p className="lg:w-2/6 w-full xl:px-0 lg:px-0 md:px-36 px-5 text-black-light">
                            {
                                clientSection.clientDescription[0].children[0]
                                    .text
                            }
                        </p>
                    </div>
                </SlideIn>
                {/* <SlideInRight delay={0.6}> */}
                <Slider
                    {...client_settings}
                    className="lg:w-3/5  w-10/12 mx-auto mt-14 py-2"
                >
                    {clientSection.clients.map((client, index) => (
                        <SlideInRight key={client._id} delay={index / 20}>
                            <Badge key={client._id} image={client.logo.image} />
                        </SlideInRight>
                    ))}
                </Slider>
                {/* </SlideInRight> */}
            </div>
        )
}

export default Client
