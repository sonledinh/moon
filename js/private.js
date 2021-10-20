 
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
});  

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});