var $ = jQuery.noConflict();
jQuery(document).ready(function($){
/*==========================*/ 
/* Hotel sliders */ 
/*==========================*/
if($('.hotel-slider').length > 0){
jQuery('.hotel-slider').slick({
  infinite: true,
  prevArrow: $('.prev1'),
  nextArrow: $('.next1') ,
  slidesToShow: 1,
  slidesToScroll: 1
})
}
/*==========================*/ 
/* sliders */ 
/*==========================*/
if($('.service-slider').length > 0){
jQuery('.service-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
   autoplay: false,
  // autoplaySpeed: 2000,
  dots: false,
  arrows: true, 
  prevArrow: $('.prev'),
  nextArrow: $('.next') , 
  responsive: [
        {
          breakpoint: 992,
          settings: { 
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: { 
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows:false,
          }
        }
      ] 
   
})
}

// $('.service-slider').on('beforeChange', function(slick, currentSlide){
//   $(this).slick({
//     infinite:false,
//   })
 
// });

/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });
        var osTrigger = ( trigger ) ? trigger : osElement;
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '95%',
        });
// osElement.removeClass('fadeInUp');
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));


/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});