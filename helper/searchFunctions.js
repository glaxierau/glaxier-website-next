

export const getPages = (pages, query) => {
    //filter pages that contains specific result
    const filteredPageByKeyword = pages.filter((page) =>
        JSON.stringify(page[1]).toLowerCase().includes(query.toLowerCase()))

    //format pages to show
    const formattedData = filteredPageByKeyword.map(page => {
        const data = page[1]
        const newFormat = {
            title: data?.pageName,
            description: data?.pageInfo?.metadata?.mataDescription,
            slug: data?.slug,
        }
        return newFormat
    })
    return formattedData
}

export const getServices = (services, query) => {
    //filter matching services
    const filteredServices = services.filter(service =>
        JSON.stringify(service).toLowerCase().includes(query.toLowerCase()))

    // format service to match stardard format
    const formattedData = filteredServices.map(service => {
        const newFormat = {
            title: service?.pageName,
            description: service?.pageInfo?.metadata?.mataDescription,
            slug: `services/${service?.slug}`,
        }
        return newFormat
    })
    return formattedData
}

export const getBlogs = (blogs, query) => {

    //filter to blogs matching query
    const filteredBlogs = blogs.filter(blog =>
        JSON.stringify(blog).toLowerCase().includes(query.toLowerCase()))

    // format blogs to match stardard format
    const formattedData = filteredBlogs.map(blog => {
        const newFormat = {
            title: blog?.title,
            description: blog?.metadata?.mataDescription,
            slug: `blog/${blog.category}/${blog?.slug}`,
        }
        return newFormat
    })
    return formattedData
}