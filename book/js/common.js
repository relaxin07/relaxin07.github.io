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

        $(".hamburger").click(function(){
          $(this).toggleClass("is-active");
          $('.hamburger-menu').slideToggle("slow", function(){
          });
        });
        $(".books__main").turn({
         display: 'double',
         autoCenter: true,
         acceleration: true,
      
         page: 2


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

        var lastId,
        topMenu = $(".nav"),
        topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
   if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
    scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});



$('.hamburger-menu__item').click(function(e){
  var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
    scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop){
       return this;
     }

   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
     lastId = id;
       // Set/remove active class
       menuItems
       .find('.nav__name').removeClass("active")
       .end().filter("[href=\\#"+id+"]").find('.nav__name').addClass("active");
     }

   });
new WOW().init();

var mql = window.matchMedia('all and (max-width: 767px)');
if (mql.matches) {
  $('.books__item a').replaceWith(function(index,oldHTML){
    return $("<span>").html(oldHTML);
  });
  
}	

/*$(document).on("scroll",onScroll);

  //smoothscroll
  $('a.nav__item').on('click', function(e) {
  	e.preventDefault();
  	$(document).off("scroll");

  	$('.nav__name').each(function() {
  		$(this).removeClass('active');
  	})
  	$(this).find('.nav__name').addClass('active');

  	var target = this.hash,
  	menu = target;
  	$target = $(target);
  	$('html, body').stop().animate({
  		'scrollTop': $target.offset().top + 2
  	}, 500, 'swing', function() {
  		window.location.hash = target;
  		$(document).on("scroll", onScroll);
  	});
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav__item').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        console.log(currLink.attr);
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav .nav__name').removeClass("active");
            currLink.find('.nav__name').addClass("active");
        }
        else{
            currLink.find('.nav__name').removeClass("active");
        }
    });
  }*/
  /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */


})

