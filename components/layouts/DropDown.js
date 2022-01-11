import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const DropDown = ({ open, type, onHover, onLeave, position, dropDownList, id, width = 200, ...otherProps }) => {
    const router = useRouter()
    const DropDownCard = ({ label, list, slug }) => {
        return (
            <>
                {type === 'nav' ?
                    <Link href={slug} passHref>
                        <motion.div id="dropdown" className="relative hover:bg-blue-dark text-blue-dark hover:text-white py-3 px-8 " style={{ width: 200 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-center" style={{ fontSize: '0.8rem' }}>{label}</p>
                        </motion.div>
                    </Link>
                    :
                    <Link href={router.asPath} locale={list} passHref>
                        <motion.div id="dropdown" {...otherProps} className="relative hover:bg-blue-dark text-blue-dark hover:text-white py-3 px-8 flex items-center justify-center  " style={{ width }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-center" style={{ fontSize: '0.8rem' }}>{label || list?.split("-")[0].toUpperCase()}</p>
                        </motion.div>
                    </Link>
                }
            </>
        )
    }
    return (
        <>
            {open && dropDownList.length !== 0 &&
                <motion.div id={id} className="absolute top-20 bg-white  cursor-pointer z-0 overflow-hidden shadow-drop" style={{ left: position }}
                    initial={{ height: '0vh' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: '0vh' }}
                    transition={{ duration: 0.2, staggerChildren: 0.3 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                >
                    {dropDownList.map(list => <DropDownCard label={list?.languages?.title} key={list._id} list={list} slug={list.slug} />)}
                </motion.div>
            }
        </>
    )
}

export default DropDown
