import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const NavList = ({ navs, setNav }) => {
    const router = useRouter()
    return (
        <>
            {navs.map(nav => (
                <Link key={nav.type} href={nav.href}>
                    <p className={`text-${router.asPath === nav.href ? 'red' : 'purple'}  hover:text-red cursor-pointer font-extrabold text-3xl my-5`} onClick={() => setNav(false)}>{nav.name}</p>
                </Link>
            ))}
        </>
    )
}

export default NavList