import Link from 'next/link'

const ArticleCard = ({ id, title, category, img, date }) => {

    let href = `/blog/[category]/[id]`
    let asHref = `/blog/${category}/${id}`
    return (
        <>
            <Link href={href} as={asHref}>
                <div className=" bg-white shadow-sm lg:m-6 m-2 cursor-pointer hover:shadow-around">
                    {/* <div className="h-lg lg:w-lg w-80 bg-white shadow-sm lg:m-4 m-2"> */}
                    {/* image  */}
                    <div className="article_image" style={{ backgroundImage: `url(${img})` }} />
                    {/* meta */}
                    <p className="p-4 text-black-light">{date}</p>
                    {/* title  */}
                    <p className="p-4 text-red font-bold ">{title}</p>
                </div>
            </Link>
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
