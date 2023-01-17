module.exports = {
    images: {
        domains: ['cdn.sanity.io'],
    },
    i18n: {
        locales: ['en-au', 'th-th'],
        defaultLocale: 'en-au',
    },
    async rewrites() {
        return [
            {
                source: '/api/:paths*',
                destination:
                    'https://a49e7mel.api.sanity.io/v1/data/query/production?query=',
            },
            {
                source: '/blog',
                destination: 'https://lp.glaxier.com.au/',
            },
            {
                source: '/th/blog',
                destination: 'https://lp.glaxier.com.au/th',
            },
            {
                source: '/blog/:slug',
                destination: 'https://lp.glaxier.com.au/:slug/',
            },
            {
                source: '/th/blog/:slug',
                destination: 'https://lp.glaxier.com.au/th/:slug/',
            },
            {
                source: '/privacy-policy',
                destination: 'https://lp.glaxier.com.au/privacy-policy/',
            },
            {
                source: '/th/privacy-policy',
                destination: 'https://lp.glaxier.com.au/th/privacy-policy/',
            },
        ]
    },
}
