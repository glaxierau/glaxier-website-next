import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const ArticleCard = ({ id, title, category, img, date }) => {
    // let [isDragged, setIsDragged] = useState(false)
    // let href = '#'
    let href = `/blog/[category]/[id]`
    // let asHref = "#"
    let asHref = `/blog/${category}/${id}`
    // console.log(isDragged)
    return (
        <>
            <Link href={href} as={asHref} className="pointer-events-none">
                <motion.div whileHover={{ scale: 1 }} initial={{ scale: 0.98 }} className=" bg-white shadow-around lg:m-6 m-2 cursor-pointer">
                    {/* image  */}
                    <div className="article_image" style={{ backgroundImage: `url(${img})` }} />
                    {/* meta */}
                    <p className="p-4 text-black-light">{date}</p>
                    {/* title  */}
                    <p className="p-4 text-red font-bold ">{title}</p>
                </motion.div>
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
