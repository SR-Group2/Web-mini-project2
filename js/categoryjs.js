/* ============== Animation Navbar =========*/
	$('.dropdown').mouseover(function(){
		$(this).addClass('open animated fadeIn');
	});
	$('.dropdown').mouseleave(function(){
		$(this).removeClass('open animated fadeIn');
	});
	
	var nav = $('.navbar-inverse');
	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		if(scroll >=300){
			// nav.addClass('animated fadeIn navbar-fixed-top');
			$('.navbar-ab').css("position", 'fixed');
			
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top": "30px",
				"padding-bottom": "30px"
			});
			$(".navbar-brand").css("padding", "30px 15px");
		
		}else{
			
			$('.navbar-ab').css("position", 'relative');
		
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 0.47)");
			$(".navbar-nav > li > a ").css({
				"padding-top" : "50px",
				"padding-bottom" : "50px"
			});
			$(".navbar-brand").css("padding", "50px 15px");

		}
	});