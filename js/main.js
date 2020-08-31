$(function(){

    $('.slider').slick({
        arrows:false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
            breakpoint: 1620,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });


    $('.burger').click(function(event){
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock')


    })

  
});