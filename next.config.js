module.exports = {
    images: {
        domain: ['cdn.sanity.io']
    },
    i18n: {
        locales: ['en-au', 'th-th'],
        defaultLocale: 'en-au'
    },
    async rewrites() {
        return [
            {
                source: '/api/:paths*',
                destination: 'https://a49e7mel.api.sanity.io/v1/data/query/production?query=',
            }
        ]
    }
}