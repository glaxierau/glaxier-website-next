import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useState } from 'react'

const MobileNavList = ({ header, setNav }) => {
    const router = useRouter()
    let DropDown = ({ to, dropdown }) => {
        const [open, setOpen] = useState(false)
        return (
            <>
                {dropdown &&
                    <motion.div className="absolute top-0 right-0 h-10  w-10 grid place-items-center hover:fill-red"
                        animate={{ rotate: open ? 180 : 0 }}
                        onClick={() => setOpen(!open)}>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="20.24" height="10.781" viewBox="0 0 12.24 5.781" className="cursor-pointer">
                            <path id="Icon_ionic-ios-arrow-down" d="M12.31,15.285l4.628-3.826a1,1,0,0,1,1.235,0,.642.642,0,0,1,0,1.024l-5.244,4.335a1.01,1.01,0,0,1-1.206.021l-5.28-4.353a.641.641,0,0,1,0-1.024,1,1,0,0,1,1.235,0Z" transform="translate(-6.188 -11.246)" fill="#90acd1" />
                        </motion.svg>
                    </motion.div>}

                <motion.div className="flex flex-col"
                    animate={{ height: open ? 'auto' : 0 }}
                >
                    {dropdown && dropdown?.map(dd => open &&
                        <Link
                            href={`/${to}/${dd.slug}`}
                            key={dd.slug} passHref>
                            <a>
                                <p className="text-purple pl-5 text-xl hover:text-red cursor-pointer"
                                    onClick={() => setOpen(false)}>
                                    {dd.label}
                                </p>
                            </a>
                        </Link>
                    )}
                </motion.div>
            </>
        )

    }
    return (
        <>
            {header?.map((nav, index) => {
                const to = nav?.slug?.current
                return (
                    <div key={index} className="relative bg-white-dark">
                        <Link href={to === '/' ? '/' : `/${to}`} passHref>
                            <a>
                                <h3 className={`text-${router.asPath.split('/')[1] === nav?.slug?.current ? 'red' : 'purple'}
                         hover:text-red cursor-pointer font-bold text-3xl my-5 bg-white-dark`}
                                    onClick={() => setNav(false)}>
                                    {nav?.menuLabel}</h3>
                            </a>
                        </Link>
                        <DropDown to={nav?.slug?.current} dropdown={nav?.withSubMenu ? nav?.subMenuList : false} />
                    </div>
                )
            })}
            <Link
                href={`/search`}
                passHref
                onClick={() => setNav(false)}
            >
                <a>
                    <p className="hover:text-red text-purple cursor-pointer font-extrabold text-3xl my-5 bg-white-dark">
                        Search
                    </p>
                </a>
            </Link>
        </>
    )
}

export default MobileNavList