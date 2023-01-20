import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pagination({ items = 5 }) {
    const arr = Array.from(Array(items).keys())
    const router = useRouter()
    const query = router.query
    const currentPage = router?.query?.page || 1
    return (
        <div className='grid place-items-center w-full px-auto my-10'>
            <div className='flex justify-center items-center text-purple '>
                <Link href={{
                    pathname: router.pathname,
                    query: { ...query, page: +currentPage === 1 ? +currentPage : +currentPage - 1 }
                }}
                    passHref>
                    <IoIosArrowBack className="text-elg text-purple cursor-pointer hover:scale-[1.1] transition-all" />
                </Link>
                {arr?.map((index) => {
                    const currentIndex = index + 1
                    return (
                        <Link key={index}
                            href={{
                                pathname: router.pathname,
                                query: { ...query, page: currentIndex }
                            }}
                            passHref>
                            <p className={`mx-2 cursor-pointer text-lg hover:text-[20px] transition-all 
                            ${currentIndex === +currentPage && 'underline text-[20px] font-bold'}`}>
                                {currentIndex}
                            </p>
                        </Link>

                    )
                })}
                <Link
                    href={{
                        pathname: router.pathname,
                        query: { ...query, page: +currentPage === arr.length ? +currentPage : +currentPage + 1 }
                    }}
                    passHref>
                    <IoIosArrowForward className="text-elg text-purple cursor-pointer hover:scale-[1.1] transition-all" />
                </Link>
            </div>
        </div>
    )
}
