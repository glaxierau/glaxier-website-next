export const blogs =
    `*[_type == 'articles' && __i18n_lang == $lang]| order(_createdAt asc)[0..10]{
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    author
  }`