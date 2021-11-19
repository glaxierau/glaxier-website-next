import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useState } from 'react'

const NavList = ({ navs, setNav }) => {
    const router = useRouter()

    let DropDown = (nav) => {
        const [open, setOpen] = useState(false)
        let newValue = nav.nav.dropDown
        const ddownClassName = "text-purple leading-0 pl-5"
        return (
            <>
                {newValue.length !== 0 &&
                    <motion.div className="absolute top-2 right-0 h-5 w-48 grid place-items-center"
                        animate={{ rotate: open ? 180 : 0 }}
                        onClick={() => setOpen(!open)}>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="20.24" height="10.781" viewBox="0 0 12.24 5.781">
                            <path id="Icon_ionic-ios-arrow-down" d="M12.31,15.285l4.628-3.826a1,1,0,0,1,1.235,0,.642.642,0,0,1,0,1.024l-5.244,4.335a1.01,1.01,0,0,1-1.206.021l-5.28-4.353a.641.641,0,0,1,0-1.024,1,1,0,0,1,1.235,0Z" transform="translate(-6.188 -11.246)" fill="#90acd1" />
                        </motion.svg>
                    </motion.div>}

                <motion.div className="flex flex-col"
                    animate={{ height: open ? 'auto' : 0 }}
                >
                    {newValue && newValue.map(dd => open && <a href={dd.to} className={ddownClassName} key={dd.label}>{dd.label}</a>)}
                </motion.div>
            </>
        )

    }
    return (
        <>
            {navs.map(nav => (
                <div key={nav.type} className="relative bg-white-dark">
                    <Link href={nav.to}>
                        <p className={`text-${router.asPath === nav.to ? 'red' : 'purple'}  hover:text-red cursor-pointer font-extrabold text-3xl my-5 bg-white-dark`} onClick={() => setNav(false)}>{nav.label}</p>
                    </Link>
                    <DropDown nav={nav} />
                </div>
            ))}
        </>
    )
}

export default NavList