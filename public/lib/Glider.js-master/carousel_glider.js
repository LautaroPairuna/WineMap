window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel_indicators',
        arrows: {
            prev: '.carousel_prev',
            next: '.carousel_next'
        },
        responsive: [
            {
            breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }
        ]
    });
});