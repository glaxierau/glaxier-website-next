import Head from 'next/head'

const SectionHead = ({ title, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description} />
                {children}
            </Head>
        </div>
    )
}

export default SectionHead
