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
                source: '/admin',
                destination: 'https://glaxier-cms.sanity.studio/desk',
            },
            {
                source: '/home',
                destination: '/',
            },
            {
                source: '/api/:paths*',
                destination:
                    'https://a49e7mel.api.sanity.io/v1/data/query/production?query=',
            },
        ]
    },
}
