import { useRouter } from 'next/router'
import Head from 'next/head'

const SectionHead = ({ title, description, children }) => {
    const router = useRouter()
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    const url = origin + router.asPath
    const languages = router.locales
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.svg" />
            {languages.map(lang => <link key={lang} rel="alternate" hrefLang={lang} href={origin + '/' + lang} />)}
            <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="canonical" href={url} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://glaxier.com.au/_next/image?url=%2Fassets%2Fsvg%2Flogo.svg&w=96&q=75" />
            {children}
        </Head>
    )
}

export default SectionHead
