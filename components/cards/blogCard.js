import React from 'react'

export default function BlogCard({ width = 250, height = 200, className }) {
    return (
        <div className={`${className} w-[250px] h-[200px] drop-shadow-md bg-white cursor-pointer`}
        // style={{ width, height }}
        >
            <div className="h-[60%] bg-purple">
                {/* Image */}
            </div>
            <div className="">
                {/* <h3 className="text-lg font-bold">Title</h3> */}
                {/* <p className="text-sm">Description</p> */}
            </div>
        </div>
    )
}
