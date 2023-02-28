export const homeQuery = `
*[_type =='home' && pageInfo.lang->language == $lang][0]{
    ..., 
    "slug": pageInfo{slug}.slug,
    aboutSection->,
    clientSection{...,clients[]-> }, 
    ctaBreakSection->,
    pageInfo{...,lang->},
    serviceSection->,
    testimonialSection{...,testimonials[]->{...,client->, content[language->language == $lang]}}
  }`


export const aboutQuery = `
*[_type == 'about' && pageInfo.lang->language ==$lang][0]{
  ...,
  "slug": pageInfo{slug}.slug,
  aboutSection->,
  ctaBreakSection->,
  "content": industrySection[]->{...,industry->,content[language->.language == $lang][0]{..., language->}},
  teamSection{...,teamMembers[]->{...,content[0]}}
}
`
export const servicePageQuery = `
*[_type == 'services' && pageInfo.lang->language == $lang][0]{
  ...,
  "slug": pageInfo{slug}.slug,
  serviceSection->
}
`

export const contactQuery = `
*[ _type == 'contact' && pageInfo.lang->language == $lang][0]{
  ...,
  "interactiveForm":*[ _type == 'interactiveForm'][$index]
  }
`