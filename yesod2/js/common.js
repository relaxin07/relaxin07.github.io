
$(function(){
	
	$('a.fl').featherlight({
	targetAttr: 'href',
	otherClose :  true,

	});

	
	$('nav a[href^="#"]').on('click', function(event) {

		var target = $(this.getAttribute('href'));

		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});

	$('.reviews-slider').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		navText: ['<div class="slider-irrow-left"></div>', '<div class="slider-irrow-right"></div>'],
	});


	 $("#gallery").lightGallery({
	  	 thumbnail:true
	  }); 

	$('.my-video-display').prettyEmbed({
		videoID: '',
		previewSize: 'hd',				
		customPreviewImage: '',			

	// Embed controls
	showInfo: true,
	showControls: true,
	loop: false,

	colorScheme: 'dark',
	showRelated: false,

	
	});

});
