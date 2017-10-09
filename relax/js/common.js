$(function(){

	$('.cottedj-slider').owlCarousel({
		items: 1,
		mouseDrag:false,
		nav: true,
		loop: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});


	$('.header-slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});
	$('.carousel').owlCarousel({
		items: 4,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});
	$('input[name="daterange"]').daterangepicker({
		singleDatePicker: true,


	});
	$('.input-item-1').val('Дата заезда');
	$('.input-item-2').val('Дата выезда');


	
	$('.nature-slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	$('.cottedj-info').each(function(i,e){
		$(e).find(".tab__item").not(":first").hide();
		$(e).find(".wrapper .tab").click(function() {
			$(e).find(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(e).find(".tab__item").hide().eq($(this).index()).show()
		}).eq(0).addClass("active");
	})

$(".gallery-wrap").masonry({
  itemSelector: ".gallery-item",

 
});

})

