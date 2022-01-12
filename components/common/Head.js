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
            <link rel="shortcut icon" href="https://cdn.sanity.io/images/a49e7mel/production/941367e9509b5beb1c3dd548c9056cef50d63d6b-234x222.png?w=2000&h=2000&fit=max" />
            {languages.map(lang => <link key={lang} rel="alternate" hrefLang={lang} href={origin + '/' + lang} />)}
            <meta httpEquiv='Content-Type' content="text/html; charset=utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="canonical" href={url} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://cdn.sanity.io/images/a49e7mel/production/b01a4f79a354492c65846127f017b617690660a3-505x526.svg?w=2000&h=2000&fit=max" />
            {children}
        </Head>
    )
}

export default SectionHead
