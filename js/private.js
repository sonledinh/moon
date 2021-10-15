 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  

$('.slide-srv').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
});  

$('.slide-skin').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  
 
if($(window).innerWidth() < 768){
    $('.list-feedb .row').slick({
        autoplay: false,
        arrow: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow: '', 
        nextArrow: '',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
    });  
}


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});