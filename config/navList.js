import SVGIcon from "../components/icons/SVGIcon";

export default {
    navigation: [
        { uuid: 'home', type: 'home', label: 'Home', to: '/', active: false, dropDown: [] },
        {
            uuid: 'about', type: 'about', label: 'About', to: '/about', active: false,
            dropDown: [
                { label: 'Who is glaxier?', to: '/about#whoweare' },
                { label: 'Industry Experience', to: '/about/#industry-experience' },
                { label: 'Our Project', to: '/about/#project' },
                { label: 'Our Team', to: '/about/#team' },
            ]
        },
        {
            uuid: 'services', type: 'services', label: 'Services', to: '/services', active: false,
            dropDown: [
                { label: 'Graphic Design', to: '/services/graphic-design' },
                { label: 'SEO', to: '/services/seo' },
                { label: 'Content Writing', to: '/services/content-writing' },
                { label: 'Digital Advertising', to: '/services/digital-advertising' },
                { label: 'Website Development', to: '/services/website-development' },
                { label: 'Influencer Marketing', to: '/services/influencer-marketing' },
            ]
        },
        {
            uuid: 'blog', type: 'blog', label: 'Blog', to: '/blog', active: false,
            dropDown: []
        },
        {
            uuid: 'contact', type: 'contact', label: 'Contact', to: '/contact', active: false,
            dropDown: [
                // { label: <SVGIcon src="/assets/svg/email.svg" label="Email Us" />, to: 'mailto:tan@glaxier.com.au' },
                // { label: <SVGIcon src="/assets/svg/phone.svg" label="Call Us" />, to: 'tel:012345678' },
                // { label: <SVGIcon src="/assets/svg/map.svg" label="Our Location" />, to: 'www.map.google.com' },
            ],
        },
    ]
}