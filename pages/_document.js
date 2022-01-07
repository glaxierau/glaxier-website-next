import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* ------ FONT ------- */}
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="shortcut icon" href="/favicon.png" />

                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-WQQ7C6C');`}} />

                </Head>

                <body>
                    <Main />
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQQ7C6C"
                            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument