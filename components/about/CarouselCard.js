const CarouselCard = () => {
    return (
        <div className="h-auto bg-white shadow-sm rounded-xl p-4 m-8">
            <div className="flex items-center justify-start py-2">
                <div className="bg-gray-300 h-10 w-10 rounded-full" />
                <p className="ml-4 font-bold">Insurance</p>
            </div>
            <p className="text-black-light py-4" style={{ fontSize: '0.68rem', lineHeight: '1rem' }}>We’ve worked on a number of travel insurance brands. The industry is extremely competitive which makes it challenging to stay on top of competitiors in the market, but also rewarding to see that we deliver results.</p>
        </div>
    )
}

export default CarouselCard