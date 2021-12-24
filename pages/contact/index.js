import React from 'react'
import Goals from './goals'
import Layout from '../../components/contact/layout'
import { getData } from '../../hooks/getData'

const Contact = (props) => {
    if (props) {
        return (
            <Layout metadata={props.pageInfo.metadata} {...props}>
                <div className="h-20" />
                <Goals {...props.interactiveForm} />
            </Layout>
        )
    }
}

export const getStaticProps = async (req, res) => {

    let lang = req.locale
    let language = await getData(`*[_type == 'languageOption' && language == '${lang}']{_id}[0]`)
    language = language._id

    const props = await getData(
        `*[ _type == 'contact' && pageInfo.lang._ref == '${language}'][0]{
            ...,
            "interactiveForm":*[ _type == 'interactiveForm'][1]
            }`)
    return { props }
}

export default Contact
