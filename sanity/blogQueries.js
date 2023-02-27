import { useMobileScreen } from "../hooks/useWindowSize"

export const blogs =
  `*[_type == 'articles' && __i18n_lang == $lang] | order(_createdAt desc){
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    "category": articleCategory->{...category{slug,title}},
    slug, 
    tags
  }`

export const blogsWithTags =
  `*[_type == 'articles' && __i18n_lang == $lang && $tag in tags] | order(_createdAt desc)[$fIndex...$lIndex]{
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    "category": articleCategory->{...category{slug}},
    slug, 
    tags
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
        _id,
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

export const similarArticles =
  `*[_type == 'articles'
&& __i18n_lang == $lang 
&& articleCategory->.category.slug == $category][0...6] | order(_createdAt desc)
    {
    _id,
    title,
    shortDescription,
    featuredImage,
    "category": articleCategory->{...category{slug}},
    slug
    }`

export const homeBlogs =
  `*[_type == 'articles' && __i18n_lang == $lang][0...3] | order(_createdAt desc){
    title,
    featuredImage,
    shortDescription,
    _createdAt, 
    "category": articleCategory->{...category{slug}},
    slug, 
    tags
  }`


export const tagsQuery =
  `*[_type == 'articles' && __i18n_lang == $lang] | order(_createdAt desc){tags}`