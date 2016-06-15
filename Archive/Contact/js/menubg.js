$(function(){


	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		if(scroll >=300){
			// nav.addClass('animated fadeIn navbar-fixed-top');
			$('.navbar').css("position", 'fixed');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top": "30px",
				"padding-bottom": "30px"
			});
			$(".navbar-brand").css("padding", "30px 15px");

			
		
		}else{
			
			$('.navbar').css("position", 'relative');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top" : "50px",
				"padding-bottom" : "50px"
			});
			$(".navbar-brand").css("padding", "50px 15px");

		}
	});

});