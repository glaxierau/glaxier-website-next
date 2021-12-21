import { useRouter } from 'next/router'
import Head from 'next/head'
import favicon from '../../public/assets/favicon.png'

const SectionHead = ({ title, description, children }) => {
    const router = useRouter()
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.svg" />
            <link rel="alternate" hrefLang={router.locale} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={favicon} />
            {children}
        </Head>
    )
}

export default SectionHead
