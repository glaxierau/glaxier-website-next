export default {
    navigation: [
        { uuid: 'home', type: 'home', label: 'Home', to: '/', active: false, dropDown: [] },
        {
            uuid: 'about', type: 'about', label: 'About', to: '/about', active: false,
            dropDown: []
        },
        {
            uuid: 'services', type: 'services', label: 'Services', to: '/services', active: false,
            dropDown: [
                { label: 'Graphic Design', to: '/' },
                { label: 'Digital Advertising', to: '/services/digital-advertising' },
                { label: 'Social Media Management', to: '/' },
                { label: 'Website Development', to: '/' },
            ]
        },
        {
            uuid: 'blog', type: 'blog', label: 'Blog', to: '/blog', active: false,
            dropDown: [
                { label: 'Blog Category one', to: '/' },
                { label: 'Blog Category two', to: '/' },
                { label: 'Blog Category three', to: '/' }
            ]
        },
        {
            uuid: 'contact', type: 'contact', label: 'Contact', to: '/contact', active: false,
            dropDown: [
                { label: 'Email Us', to: 'emailto:tan@glaxier.com.au' },
                { label: 'Give Us a Call', to: 'tel:012345678' },
                { label: 'Our Location', to: 'www.map.google.com' },
            ],
        },
    ]
}