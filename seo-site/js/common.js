$(function(){
//drop language
$('.select-drop').on('click', function(e){
  $('.select-drop__wrap').css('display', 'block');
})
$('.select-drop__item').on('click' , function(e){
 var div = $(this).html();
 $('.select-drop__main').html(div);
 $('.select-drop__wrap').css('display', 'none');
 event.stopPropagation();
})

$(document).mouseup(function(e){
  var elem = $('.select-drop__wrap');
  if(!elem.is(e.target) && elem.has(e.target).length===0){
    elem.hide();
  }
})


$(".accordion-main__header").on('click' , function() {
  $(this).toggleClass('active');
  $(this).siblings(".accordion-main__sub-text").slideToggle("slow");
})

$('.number__header').spincrement({
  duration: 4000,
})

var show = true;
var countbox = ".s-number";
$(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;   // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $(".number__header").spincrement({
        thousandSeparator: "",
        duration: 2200
      });
      show = false;
    }
  });

/* модальное окно заявок*/

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
                        .animate({opacity: 1, top: '0%'}, 200); // плaвнo пoкaзывaем
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

        // end modal 

        
    // енд ув картинок


    $('.reviews-sl').slick({
      slidesToShow: 4,
      autoplay:true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      draggable:false,
      dots:false,
      prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-arrow-left"></i> </button>',
      nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-arrow-right"></i></button>',
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      ]
    });

    $('.team').slick({
      slidesToShow: 5,
      rows :2,
      autoplay:true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      draggable:false,
      dots:false,
      prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-arrow-left"></i> </button>',
      nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-arrow-right"></i></button>',
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      ]
    });

    $('.portfolio-slider').slick({
      centerMode: true,
      variableWidth: true,
      autoplay:true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      draggable:true,
      dots:false,
      arrows:false,
      prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-arrow-left"></i> </button>',
      nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-arrow-right"></i></button>',
      responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
          arrows: true,
          

        }
      },

      ]
    });


    $('.business').slick({
      slidesToShow: 6,
      autoplay:true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      draggable:false,
      dots:false,
      prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-arrow-left"></i> </button>',
      nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-arrow-right"></i></button>',
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      ]
    });

    $('.sertif-slider').slick({
      slidesToShow: 5,
      autoplay:true,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      draggable:false,
      dots:false,
      prevArrow: '<button id="prev" class="prev-arrow" type="button" > <i class="fas fa-arrow-left"></i> </button>',
      nextArrow: '<button id="next" class="next-arrow" type="button" > <i class="fas fa-arrow-right"></i></button>',
      responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      ]
    });

    

    $('.scroll-to-top').click(function () {
     $('body,html').animate({
      scrollTop: 0
    }, 400);
     return false;
   });

     // открытие  увелич картинок

     $('.reviews-sl__zoom').on('click',  function(e){
      e.preventDefault();
      var curT = e.currentTarget;
      var thisImg  =  $(curT).parent('.reviews-sl__header').find('img');

      path = thisImg.attr('src'),
      alt = thisImg.attr('alt');

      $('#review .modal-body img').attr('src', path).attr('alt', alt);
      $('.modal.fade').fadeIn();
    });

     $('.close-rev').click(function(e){
      $(this).parents('.modal.fade').fadeOut();
    })

     $(document).mouseup(function (e){
       var div = $('.modal.fade');
       if (div.is(e.target) && div.has(e.target).length === 0) {
         div.fadeOut();
       }
     });


   })