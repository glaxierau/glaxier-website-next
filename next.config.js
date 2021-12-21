
module.exports = {
    // basePath: 'https://glaxier.com.au' || 'http://localhost:3000/',
    images: {
        domain: ['cdn.sanity.io']
    },
    i18n: {
        locales: ['en-au', 'th-th'],
        defaultLocale: 'en-au'
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