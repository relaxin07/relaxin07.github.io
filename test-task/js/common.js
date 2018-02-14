function initMap() {
        var uluru = {lat: 52.409538, lng: 16.931992};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          draggable: true,
          icon: 'img/marker.png',

        });
      }


$(function(){

	function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

	$('.main-carousel').owlCarousel({

		nav: true,
		loop:true,
		items:1 ,
		touchDrag: false,
		mouseDrag:false,
		dots:true,
		navText: [false, '<img src="../img/arrow-right.png">'],

	});

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.nav').slideToggle("slow", function(){
		});
	});

	
	var dot = $(".wrapper").find('div.owl-dot span');
	for(var i=0; i< dot.length;i++){
		if(i>9){
			dot[i].innerText = i;
		}
		else{
			dot[i].innerText = '0'+i;
		}
	}
	$('nav .nav__item').click(function(){
		$('nav .nav__item').removeClass('active');
		$(this).addClass('active');
	})
	var sidebarHeight = $('main.content').outerHeight();
	console.log(sidebarHeight);
	$('.sidebar').css('height', sidebarHeight);

	var noLine = $('.sidebar__item').last();
	$(noLine).removeClass('sidebar__item');

	});
