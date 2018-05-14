
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
		$('.partners').owlCarousel({
		nav: true,
		loop:true,
		touchDrag: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			600:{
				items:4
			},
			1200:{
				items:5
			},
			

		},

		

	});


});
