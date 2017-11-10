
$(function(){

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
