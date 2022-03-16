const DigitalAdvertising = () => {
    const data = [1, 2, 3, 4]

    function GridResult(props) {
        const gridConfig = {
            colNum: 1,
            maxRowNum: 3,
        }

        switch (data.length) {
            case 1:
                gridConfig.colNum = 2
                break
            default:
                gridConfig.maxRowNum = data.length - 1
                break
        }

        return (
            <div className={`grid grid-cols-2 gap-3`}>
                {data.map((item, index) => {
                    return (
                        <div
                            className={`row-span-${4 - gridConfig.maxRowNum
                                }  bg-blue-500 first:row-span-3 col-span-${gridConfig.colNum
                                } first:bg-red-500`}
                            key={index}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-2xl text-center mb-10">Digital Advertising</h1>
            <GridResult />
        </div>
    )
}

export default DigitalAdvertising
