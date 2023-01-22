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
