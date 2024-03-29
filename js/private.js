 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});   

$('.slide-feedback').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
});  

$('.slide-partner').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2, 
    prevArrow: '', 
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ],
});  

// $('.h-menu a').click(function(e){
//     e.preventDefault();
//     var target = $($(this).attr('href'));
//     if(target.length){
//         var scrollTo = target.offset().top;
//         $('body, html').animate({scrollTop: scrollTo+'px'}, 500);
//     }
//     $(this).addClass("active");
// });

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});