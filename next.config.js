
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
        projectId: 'a49e7mel',
        NEXT_PUBLIC_MAILCHIMP_URL: 'https://glaxier.us2.list-manage.com/subscribe/post?u=a33ada6b85c9db0b51cd85c91&amp;id=3eccfab32a'
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