import Link from 'next/link'
import { motion } from 'framer-motion'

const DropDown = ({ open, onHover, onLeave, position, dropDownList, id }) => {
    const DropDownCard = ({ label, list }) => {
        return (
            <>
                <Link href={list.to}>
                    <motion.div id="dropdown" className="relative hover:bg-blue-dark text-blue-dark hover:text-white py-3 px-8 " style={{ width: 200 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        onPointerEnter={onHover}
                        onPointerLeave={onLeave}
                    >
                        <p className="text-center" style={{ fontSize: '0.8rem' }}>{label}</p>
                    </motion.div>
                </Link>
            </>
        )
    }
    return (
        <>
            {open && dropDownList.length !== 0 &&
                <motion.div id={id} className="absolute top-20 bg-white cursor-pointer z-0 overflow-hidden" style={{ left: position }}
                    initial={{ height: '0vh' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: '0vh' }}
                    transition={{ duration: 0.2, staggerChildren: 0.3 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                >
                    {dropDownList.map(list => <DropDownCard label={list.label} key={list.label} list={list} />)}
                </motion.div>
            }
        </>
    )
}

export default DropDown
