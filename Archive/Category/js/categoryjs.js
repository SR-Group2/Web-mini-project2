var nav = $('.navbar-inverse');
	$(window).scroll(function(){


			// nav.addClass('animated fadeIn navbar-fixed-top');
			$('.navbar-ab').css("position", 'fixed');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top": "30px",
				"padding-bottom": "30px"
			});
			$(".navbar-brand").css("padding", "30px 15px");
		
		
	});

