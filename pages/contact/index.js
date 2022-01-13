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
    let index = 0
    lang !== 'en-au' ? index = 0 : index = 1

    const props = await getData(
        `*[ _type == 'contact' && pageInfo.lang->language == '${lang}'][0]{
            ...,
            "interactiveForm":*[ _type == 'interactiveForm'][${index}]
            }`)
    return { props }
}

export default Contact
