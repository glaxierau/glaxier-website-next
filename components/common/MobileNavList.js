import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useState } from 'react'

const MobileNavList = ({ nav, navs, setNav }) => {
    const router = useRouter()
    let DropDown = ({ dropdown }) => {
        const [open, setOpen] = useState(false)
        return (
            <>
                {dropdown?.length !== 0 &&
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
                    {dropdown?.map(dd => open &&
                        <Link href={dd.slug} key={dd.slug} passHref>
                            <p className="text-purple py-4 pl-5 text text-base hover:text-red cursor-pointer" onClick={() => setOpen(false)}>{dd.languages.title}</p>
                        </Link>
                    )}
                </motion.div>
            </>
        )

    }
    return (
        <>
            {nav?.map(nav => (
                <div key={nav._id} className="relative bg-white-dark">
                    <Link href={nav.slug} passHref>
                        <h3 className={`text-${router.asPath === nav.slug ? 'red' : 'purple'}  hover:text-red cursor-pointer font-bold text-3xl my-5 bg-white-dark`} onClick={() => setNav(false)}>{nav.languages.title}</h3>
                    </Link>
                    <DropDown dropdown={nav.subMenu || []} />
                </div>
            ))}
        </>
    )
}

export default MobileNavList