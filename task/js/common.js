
$(function(){
	
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.main-menu').slideToggle("slow", function(){
		});
	});
	$('.slider-wrap').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	$('.quidem-btn ').click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		$(this).siblings().removeClass("active");

	})

});