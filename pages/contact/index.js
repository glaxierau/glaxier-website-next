import React from 'react'
import Goals from './goals'
import Layout from './layout'
import { useSelector } from 'react-redux'



const Contact = () => {
    const { data } = useSelector(state => state.data)
    const { contact } = data
    if (contact) {
        return (
            <Layout metadata={contact.pageInfo.metadata}>
                <div className="h-20" />
                <Goals />
            </Layout>
        )
    }
}

export default Contact
