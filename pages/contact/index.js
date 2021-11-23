import React from 'react'
import Goals from './goals'
import Layout from './layout'
import SectionHead from '../../components/common/Head'



const Contact = () => {
    return (
        <div>
            <SectionHead title="Contact Us" />
            <Layout>
                <div className="h-20" />
                <Goals />
            </Layout>
        </div>
    )
}

export default Contact
