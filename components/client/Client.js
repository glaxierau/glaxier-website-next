import Badge from '../icons/Badge'
import Title from '../Title'

const Client = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mt-2 bg-white-dark lg:h-screen lg:py-0 py-16">
            <Title title="Our Clients" lineColor="#CFD7F1" lineWidth="180" /> <br /> <br />
            <p className="lg:w-2/6 w-full lg:px-0 px-5 text-black-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
            <div className="flex lg:mt-20 mt-10 lg:w-3/5 w-4/5 items-center justify-between flex-wrap">
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
                <Badge />
            </div>
        </div>
    )
}

export default Client
