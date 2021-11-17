import Link from 'next/link'
import AppButton from '../../components/appButton'
import ContactTitle from '../../components/contact/Title'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const index = () => {
    let sm = withSizeLessThan(400)
    return (
        <div className="flex flex-col items-center justify-center">
            <ContactTitle title="Leave Your Contact Detail" />
            <textarea cols={sm ? 38 : 60} rows={10} placeholder="Message" />
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Submit" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/' />
            </div>
        </div>
    )
}

export default index
