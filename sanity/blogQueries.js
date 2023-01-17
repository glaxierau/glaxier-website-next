export const blogs =
  `*[_type == 'articles' && __i18n_lang == $lang] | order(_createdAt desc)[$fIndex...$lIndex]{
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    "category": articleCategory->{...category{slug}},
    slug
  }`

export const allBlogs = `*[_type == 'articles' && __i18n_lang == $lang ]{
  slug,
  "category": articleCategory->{...category{slug}},
}`

export const singleBlog = 
`*[_type == 'articles' 
    && slug == $slug 
    && __i18n_lang == $lang 
    && articleCategory->.category.slug == $category][0]
        {
        title,
        shortDescription,
        featuredImage,
        metadata,
        content,
        tags,
        author,
        _createdAt,
        "category": articleCategory->{...category{slug}},
        status
        }`