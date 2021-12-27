import Link from 'next/link'
import AppButton from '../../components/AppButton'
import SectionHead from '../../components/common/Head'
import ContactTitle from '../../components/contact/Title'
import { getData } from '../../hooks/getData'
import { withSizeLessThan } from '../../hooks/useWindowSize'

const index = ({ additonalInfoSection }) => {
    let sm = withSizeLessThan(700)
    return (
        <div className="flex flex-col items-center justify-center">
            <SectionHead title="Contact Us | Contact Detail" />
            <ContactTitle title={additonalInfoSection.question} />
            <textarea cols={60} rows={10} placeholder={additonalInfoSection.placeholder} style={{ width: sm ? 300 : 500 }} />
            <div className="mx-auto w-96 flex flex-col items-center justify-center py-9">
                <AppButton title="Submit" type="submit" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/' disabled={true} />
            </div>
        </div>
    )
}

export default index



export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{additonalInfoSection}`)
    return {
        props
    }
}
