import Img from 'next/image'
import SVG from '../common/SVG'

export const Step = ({ title, desc, icon }) => {
    return (
        <section className="flex items-start justify-center m-2 w-full ">
            <div className="bg-purple rounded-full overflow-hidden flex justify-center items-center p-3">
                <Img {...icon} width={25} height={25} placeholder="empty" className='invert' />
                {/* <SVG width={25} height={25} url={icon.src} id={title} color='white' /> */}
            </div>
            <div className=" w-full ml-4 flex flex-col items-left justify-start ">
                <p className="text-purple">{title}</p>
                <p className="font-thin text-sm text-black-light pt-1 pb-2">{desc}</p>
            </div>
        </section>
    )
}