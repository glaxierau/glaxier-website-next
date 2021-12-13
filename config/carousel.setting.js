export let blog_settings = {
    dots: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 2,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};



export let about_settings = {
    dots: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
export let about_settings_industry = {
    dots: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
};

export let testimonial_settings = {
    dots: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};