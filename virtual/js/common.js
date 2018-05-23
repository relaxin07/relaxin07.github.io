$(function(){
	
        var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
        var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
        var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
        var modal = $('.modal_form'); // все скрытые мoдaльные oкнa

        open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
            event.preventDefault(); // вырубaем стaндaртнoе пoведение
            var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
            overlay.fadeIn(400, //пoкaзывaем oверлэй
                function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                    $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                        .animate({opacity: 1, top: '40%'}, 200); // плaвнo пoкaзывaем
                    });
        });

        close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
                .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                    function(){ // пoсле этoгo
                    	$(this).css('display', 'none');
                        overlay.fadeOut(400); // прячем пoдлoжку
                    }
                    );
            });


        $('.reviews__img').hover(function(){
            $(this).parent().css('overflow' , 'visible');
        })
          $('.reviews__img').mouseleave(function(){
            $(this).parent().css('overflow' , 'hidden');
        })     

        $("#slider-range-online" ).slider({
        	range: true,
        	min: 100000,
        	max: 5000000100,
        	values: [ 21949335,  755203879 ],
        	slide: function( event, ui ) {
        		$( ".budget__start" ).html( "ОТ" + " " + ui.values[0].toLocaleString() + '<span> руб </span>' );
        		if( ui.values[1] > 5000000000 ){
        			$( ".budget__end" ).html(  "свыше " + "5 МЛН " + '<span> руб </span>'  );
        		}
        		else{
        			
        			$( ".budget__end" ).html(  "ДО" + " " + ui.values[ 1 ].toLocaleString() + '<span> руб </span>'  );
        		}
        	}
        });
        $("#slider-range-online .ui-slider-handle:eq(-1)").css("background", "url('img/onl-slid-btn-2.png')");
        $(".hamburger").click(function(){
        	$(this).toggleClass("is-active");
        	$('.nav').slideToggle("slow", function(){
        	});
        });
        $('.scroll-b').slick({
        	infinite: true,
        	dots:true,
        	arrows:false,
        	autoplay:true,
        	fade: true,
        	autoplaySpeed: 15000,
        	draggable:false,
        });
        $('#scroll-to-top').click(function () {
        	$('body,html').animate({
        		scrollTop: 0
        	}, 400);
        	return false;
        });

        $('.portfolio-sl').slick({
        	infinite: true,
        	autoplaySpeed: 15000,
        	speed: 500,
        	arrows:true,
        	fade: false,
        	draggable:false,

        	slidesToShow:4,
        	slidesToScroll:1,
        	prevArrow: '<button id="prev" class="prev prev--bgr-none" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
        	nextArrow: '<button id="next" class="next next--bgr-none" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        	responsive: [
        	{
        		breakpoint: 1200,
        		settings: {
        			slidesToShow: 3,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true,
        		}
        	},
        	{
        		breakpoint: 1000,
        		settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true,
        			rows:2,
        		}
        	},
        	{
        		breakpoint: 520,
        		settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true,
        			rows:1,
        		}
        	},

        	]
        });


        $('.reviews-sl').slick({
        	infinite: true,
        	autoplaySpeed: 15000,
        	speed: 500,
        	arrows:true,
        	draggable:false,
        	fade: true,
        	prevArrow: '<button id="prev" class="prev prev--bgr-none" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
        	nextArrow: '<button id="next" class="next next--bgr-none" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        });
        $('.reviews-sl-mobile').slick({
        	infinite: true,
        	autoplaySpeed: 800,
        	speed: 500,
        	draggable:false,
        	draggable:false,
        	slidesToShow: 2,
        	slidesToScroll: 1,
        	arrows:true,
        	swipe: false,
        	touchMove: false,
        	prevArrow: '<button id="prev" class="prev prev--bgr-none" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
        	nextArrow: '<button id="next" class="next next--bgr-none" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        	responsive: [
        	{
        		breakpoint: 670,
        		settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
        		}
        	},
        	]
        });

        $('.partners').slick({
        	dots: true,
        	infinite: true,
        	speed: 300,
        	slidesToShow: 5,
        	slidesToScroll: 1,
        	prevArrow: '<button id="prev" class="prev prev--bgr-none" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
        	nextArrow: '<button id="next" class="next next--bgr-none" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        	responsive: [
        	{
        		breakpoint: 1024,
        		settings: {
        			slidesToShow: 3,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
        		}

        	},
        	{
        		breakpoint: 480,
        		settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
        		}

        	},
        	]
        });
        $('.sertificate').slick({
        	infinite: true,
        	autoplaySpeed: 15000,
        	slidesToShow: 4,
        	slidesToScroll: 1,
        	centerPadding: '20px',
        	draggable:false,
        	speed: 500,
        	arrows:true,
        	prevArrow: '<button id="prev" class="prev prev--bgr-none" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> </button>',
        	nextArrow: '<button id="next" class="next next--bgr-none" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        	responsive: [
        	{
        		breakpoint: 992,
        		settings: {
        			slidesToShow: 3,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: false
        		}
        	},
        	{
        		breakpoint: 768,
        		settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: false
        		}
        	},
        	{
        		breakpoint: 559,
        		settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: false
        		}
        	},
        	]
        });
        (function(){
            var typed = new Typed(".elements",
            {
              stringsElement: '.typedElem',
              smartBackspace: true,
              showCursor: false,
              typeSpeed: 50,
              backspeed: 30,
              loop:true,
              loopCount: Infinity,
              backDelay: 7000,


          });
        })();
        (function(){
            var typed = new Typed(".elements-2",
            {
              stringsElement: '.typedElem-2',
              smartBackspace: true,
              showCursor: false,
              typeSpeed: 20,
              backDelay: 7000,
              loop:true,
              loopCount: Infinity,

          });
        })();
        (function(){
            var typed = new Typed(".elements-3",
            {
              stringsElement: '.typedElem-3',
              smartBackspace: true,
              showCursor: false,
              typeSpeed: 20,
              backDelay: 7000,
              loop:true,
              loopCount: Infinity,
          });
        })();

    });
