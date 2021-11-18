import Link from 'next/link'
import { motion } from 'framer-motion'

const DropDown = ({ open, onHover, onLeave, position, dropDownList }) => {
    const DropDownCard = ({ label, list }) => {
        return (
            <Link href={list.to}>
                <motion.div className="relative hover:bg-blue-dark text-blue-dark hover:text-white py-3 px-8 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}>
                    <p className="text-sm text-center">{label}</p>
                </motion.div>
            </Link>
        )
    }
    return (
        <>
            {open && dropDownList.length !== 0 &&
                <motion.div className="absolute top-20 bg-white cursor-pointer z-0 overflow-hidden" style={{ left: position }}
                    initial={{ height: '0vh' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: '0vh' }}
                    transition={{ duration: 0.2, staggerChildren: 0.3 }}
                    // onMouseEnter={onHover}
                    // onMouseLeave={onLeave}
                    onPointerEnter={onHover}
                    onPointerLeave={onLeave}
                >
                    {dropDownList.map(list => <DropDownCard label={list.label} key={list.label} list={list} />)}
                </motion.div>
            }
        </>
    )
}

export default DropDown
