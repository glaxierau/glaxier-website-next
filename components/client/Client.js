import Badge from '../icons/Badge'
import Title from '../Title'

const Client = ({ clientTitle, clientDescription, clients }) => {
    return (
        <div className="relative flex flex-col items-center justify-center mt-2 bg-white-dark lg:h-screen lg:py-0 py-16">
            <Title title={clientTitle} lineColor="#CFD7F1" lineWidth="180" /> <br /> <br />
            <p className="lg:w-2/6 w-full xl:px-0 lg:px-0 md:px-36 px-5 text-black-light">{clientDescription[0].children[0].text}</p>
            <div className="flex lg:mt-20 mt-10 lg:w-3/5 w-4/5 items-center justify-between flex-wrap">

                {clients.map(client => <Badge key={client._key} />)}
            </div>
        </div>
    )
}

export default Client
