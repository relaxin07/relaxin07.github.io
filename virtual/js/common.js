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

        $(".grouped_elements").fancybox({
          openEffect  : 'elastic',
          closeEffect : 'elastic',

        });



        var state = true;
        $( ".b-seo__link-down" ).on( "click", function(e) {
            e.preventDefault();
          if ( state ) {
            $( ".seo-pre" ).animate({
              height:  '100%'
            }, 1000 );
          } else {
            $( ".seo-pre" ).animate({

              height:  '200px'
            }, 1000 );
          }
          state = !state;
        });
     

$('input[type="file"]').on('change', function (event, files, label) {
  var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, ''),
  file_p = document.createElement('p');
  var  deleteFile = document.createElement('a');

  var  deleteI = document.createElement('i');
            $(deleteFile).addClass('deleteF '); //fa fa-times
            $(deleteFile).text(''); 
            $(file_p).addClass('file-name');
            $(file_p).text(file_name);
            if( $('.document').children('.file-name')){
              $('.file-name').remove();
              $('.document').append(file_p); 
              $('.file-name').append(deleteFile);
            }
            else{
              $('.document').append(file_p); 
              $('.file-name').append(deleteFile);
            }

          });
$('.deleteF').click(function(e){
  $(this).closest('.file-name').remove();
});


$(".slider-range-online" ).slider({
 range: true,
 min: 10000,
 max: 5000100,
 values: [ 219493,   5000100 ],
 slide: function( event, ui ) {
  $( ".budget__start" ).html( "ОТ" + " " + ui.values[0].toLocaleString() + '<span> руб </span>' );
  if( ui.values[1] > 5000000 ){
   $( ".budget__end" ).html(  "свыше " + "5 МЛН " + '<span> руб </span>'  );
 }
 else{

   $( ".budget__end" ).html(  "ДО" + " " + ui.values[ 1 ].toLocaleString() + '<span> руб </span>'  );
 }
}
});

$("a.grouped_elements").fancybox({
  'transitionIn'  : 'elastic',
  'transitionOut' : 'elastic',
  'speedIn'   : 600, 
  'speedOut'    : 200, 
  'overlayShow' : false
});

//$(".slider-range-online ").find('.ui-slider-handle:eq(-1)').css("background", "url('./img/onl-slid-btn-2.png')");

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
$('.price-slider').slick({
 infinite: true,
 dots:false,
 arrows:false,
 autoplay:true,
 fade: true,
 autoplaySpeed: 6000,
 draggable:false,
 pauseOnFocus: false,
 pauseOnHover : false,
});

$('#scroll-to-top').click(function () {
 $('body,html').animate({
  scrollTop: 0
}, 400);
 return false;
});

        /*$('.portfolio-sl').slick({
        	infinite: true,
        	autoplaySpeed: 15000,
        	speed: 500,
        	arrows:true,
            settings: "unslick",
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
        */

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
        		breakpoint: 767,
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
        
        

      });
