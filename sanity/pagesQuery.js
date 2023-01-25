export const homeQuery = `
*[_type =='home' && pageInfo.lang->language == $lang][0]{
    ..., 
    aboutSection->,
    clientSection{...,clients[]-> }, 
    ctaBreakSection->,
    pageInfo{...,lang->},
    serviceSection->,
    testimonialSection{...,testimonials[]->{...,client->, content[language->language == $lang]}}
  }`