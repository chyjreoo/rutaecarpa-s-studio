$(document).ready(function(){
	// owl-carousel
	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:true,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	// header change
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $toggle = $('.js-toggle');
		var $navbar = $('.js-navbar');
		

		

		if (scrollDistance > 80) {
			$toggle.addClass("toggle-menu");
			$navbar.addClass("mini-navbar");
		}
		else {
			$toggle.removeClass("toggle-menu");
			$navbar.removeClass("mini-navbar");
		}


	})
	$("#toggle-burger").on('click',function(){
			if ($("#toggle-burger").hasClass("active")) {
				$("#toggle-burger").removeClass("active");
			}
			else{
				$("#toggle-burger").addClass("active");
			}
		})


		
})