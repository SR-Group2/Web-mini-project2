$(function(){
	
	
	/* ============== Animation Navbar =========*/
	$('.dropdown').mouseover(function(){
		$(this).addClass('open animated fadeIn');
	});
	$('.dropdown').mouseleave(function(){
		$(this).removeClass('open animated fadeIn');
	});
	
	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		if(scroll >=300){
			// nav.addClass('animated fadeIn navbar-fixed-top');
			$('.navbar').css("position", 'fixed')
			.addClass('animated fadeIn');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top": "30px",
				"padding-bottom": "30px"
			});
			$(".navbar-brand").css("padding", "30px 15px");

			$('.gotoTop').removeClass('fadeOut');
      	 	$('.gotoTop').css("display", "block").addClass('animated fadeIn');
      	 
		
		}else{
			
			$('.navbar').css("position", 'relative').removeClass('animated fadeIn');
			$(".navbar-inverse").css("background", "rgba(38, 38, 38, 1)");
			$(".navbar-nav > li > a ").css({
				"padding-top" : "50px",
				"padding-bottom" : "50px"
			});
			$(".navbar-brand").css("padding", "50px 15px");
			
			$('.gotoTop').removeClass('fadeIn').addClass('fadeOut');
			
		}
	});
	
	
	/* ==========   Searching Animation MenuBar ==========*/
     $('.searchMenu').on('click', function(e){
     
     	e.preventDefault();
     	
     	$(".searchBox").slideToggle();
     	
     	
     })

});