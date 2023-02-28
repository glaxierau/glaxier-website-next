import Image from "next/image"
import Link from "next/link"

const FirstBlog = (props) => {
    const {
        index,
        category,
        slug,
        featuredImage,
        title,
        shortDescription,
        blogs,
        _createdAt
    } = props
    return (
        <Link key={index} href={`/blog/${category.slug}/${slug}`} passHref>
            <div key={index} className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl hover:scale-[1.005] transition-all rounded-lg overflow-hidden">
                <aside className="relative h-[55%] bg-gray-300">
                    <Image
                        src={urlFor(featuredImage.image).height(400).url()}
                        className="object-cover bg-no-repeat"
                        layout="fill"
                        alt={featuredImage.image.alt}
                        title={featuredImage.image.title}
                        priority
                    />
                    <div className="absolute bottom-[10px] right-[10px]">
                        <div className='bg-red-400 text-gray-500 px-4 rounded-full'>
                            <p className='text-white  ' style={{ fontSize: 10 }}>{timeStamp(_createdAt)}</p>
                        </div>
                    </div>
                </aside>
                <a href={`/blog/${category.slug}/${slug}`} className={`overflow-hidden h-[45%] z-30 flex flex-col justify-center items-left
                                            ${index === 0 ? blogs.length <= 2 ? 'p-4' : 'lg:p-10 p-4' : 'p-4'}`}>
                    <h2 className={`${index === 0 ? blogs.length <= 2 ? 'text-md' : 'lg:text-xl md:text-base text-md lg:mb-2' : 'text-md'} font-bold text-purple`}>
                        {title}
                    </h2>
                    <p className={`${styles.desc} 
                                            ${index === 0 ? blogs.length <= 2 ? 'md:text-sm text-es' : 'lg:text-base md:md:text-sm text-es' : 'md:text-sm text-es'} text-gray-600`}
                    >{shortDescription}</p>
                </a>
            </div>
        </Link>
    )
}