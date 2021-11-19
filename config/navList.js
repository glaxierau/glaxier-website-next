export default {
    navigation: [
        { uuid: 'home', label: 'Home', to: '/', dropDown: [] },
        {
            uuid: 'about', label: 'About', to: '/about',
            dropDown: [
                { label: 'Who is glaxier?', to: '/about#whoweare' },
                { label: 'Industry Experience', to: '/about/#industry-experience' },
                { label: 'Our Project', to: '/about/#project' },
                { label: 'Our Team', to: '/about/#team' },
            ]
        },
        {
            uuid: 'services', label: 'Services', to: '/services',
            dropDown: [
                { label: 'Graphic Design', to: '/' },
                { label: 'Digital Advertising', to: '/services/digital-advertising' },
                { label: 'Social Media Management', to: '/' },
                { label: 'Website Development', to: '/' },
            ]
        },
        {
            uuid: 'blog', label: 'Blog', to: '/blog',
            dropDown: [
                { label: 'Blog Category one', to: '/' },
                { label: 'Blog Category two', to: '/' },
                { label: 'Blog Category three', to: '/' }
            ]
        },
        {
            uuid: 'contact', label: 'Contact', to: '/contact',
            dropDown: [
                { label: 'Email Us', to: 'emailto:tan@glaxier.com.au' },
                { label: 'Give Us a Call', to: 'tel:012345678' },
                { label: 'Our Location', to: 'www.map.google.com' },
            ],
        },
    ]
}