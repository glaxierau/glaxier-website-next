
module.exports = {
    images: {
        domain: ['cdn.sanity.io']
    },
    i18n: {
        locales: ['en', 'th'],
        defaultLocale: 'en'
    },
    env: {
        apiUrl: 'https://a49e7mel.api.sanity.io/v1/data/query/production?query=',
        projectId: 'a49e7mel'
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