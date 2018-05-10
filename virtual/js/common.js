
$(function(){

	$('.portfolio-slider').owlCarousel({
		nav: true,
		loop:true,
		items:1,
		touchDrag: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});


});
