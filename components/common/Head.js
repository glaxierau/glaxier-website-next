import Head from 'next/head'

const SectionHead = ({ title, description, children, metaTitle }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="title" content={metaTitle} />
                <meta name="description" content={description} />
                {children}
            </Head>
        </div>
    )
}

export default SectionHead
