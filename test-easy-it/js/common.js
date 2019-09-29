$(function(){

  $(".hamburger").click(function(){
   $(this).toggleClass("is-active");
   $('nav').slideToggle("slow", function(){
   });
 });

  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
    autoplay: true,
    autoplaySpeed: 116000,
    pauseOnHover : false,
    dots: true,
    appendDots: $('.append-container'),
    appendArrows: $('.append-container'),
    prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-chevron-right"></i></button>',
  });

})