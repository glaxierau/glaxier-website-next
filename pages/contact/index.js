import React from 'react'
import Goals from './goals'
import Layout from './layout'
import Head from '../../components/common/Head'
import { useSelector } from 'react-redux'



const Contact = () => {
    const { data } = useSelector(state => state.data)
    const { contact } = data
    if (contact) {
        return (
            <div>
                {/* <Head title="Contact Us" metaTitle={contact.pageInfo.metadata.metaTitle} description={contact.pageInfo.metadata.mataDescription} /> */}
                <Layout metadata={contact.pageInfo.metadata}>
                    <div className="h-20" />
                    <Goals />
                </Layout>
            </div>
        )
    }
}

export default Contact
