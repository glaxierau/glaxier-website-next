import React from 'react'

const ArticleCard = () => {
    return (
        <>
            <div className=" bg-white shadow-sm lg:m-6 m-2 cursor-pointer hover:shadow-around">
                {/* <div className="h-lg lg:w-lg w-80 bg-white shadow-sm lg:m-4 m-2"> */}
                {/* image  */}
                <div className="article_image" style={{ backgroundImage: `url('/assets/img/images/article.jpg')` }} />
                {/* meta */}
                <p className="p-4 text-black-light">02 Sep 2021</p>
                {/* title  */}
                <p className="p-4 text-red font-bold ">Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
            <style jsx>
                {`
                .article_image {
                    height: 18rem;
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                }
            `}
            </style>
        </>
    )
}

export default ArticleCard
