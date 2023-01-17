export const blogs =
  `*[_type == 'articles' && __i18n_lang == $lang] | order(_createdAt desc)[$fIndex...$lIndex]{
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    "category": articleCategory->{...category{slug}},
    slug
  }`

export const allBlogs = `*[_type == 'articles' && __i18n_lang == $lang ]{title}`


  // && __i18n_lang == $lang