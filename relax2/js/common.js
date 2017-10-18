$(function(){

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.main-menu-hamburger').slideToggle("slow", function(){
		});
	});
	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	$('.cottedj-slider').owlCarousel({
		items: 1,
		mouseDrag:false,
		touchDrag: false,
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
		items:6,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1200:{
				items:4
			},
			1440:{
				items:5

			},
			1601:{
				items:6
			}

		}
	});

	$('input[name="daterange"]').datepicker({
		singleDatePicker: true,
		inline: true,
		language: 'ru',
		changeYear: true,
		changeMonth: true


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
	$(".icon-attention").hover(function() {
		$('.attention').fadeIn( 300 );

	},function(){
		$('.attention').fadeOut( 300 );
	});


	var mql = window.matchMedia('all and (max-width: 997px)');
	if (mql.matches) {

		$(window).scroll(function(){
			if($(this).scrollTop()>162){
				$(".main-menu").addClass('fixed');
				

			}
			else if($(this).scrollTop()<162){
				$(".main-menu").removeClass('fixed');
				
			}
		});
	} 
	else {
	}



})

