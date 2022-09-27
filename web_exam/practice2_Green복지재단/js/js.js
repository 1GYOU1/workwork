$(document).ready(function(){
	//menu
	$('.menu').on('mouseenter', function(){
		$('.sub_menu_area').stop().slideDown();
	})
	$('.menu_area').on('mouseleave', function(){
		$('.sub_menu_area').stop().slideUp();
	})
	//pop
	$('.notice ul li').on('click', function(){
		$('.pop').fadeIn();
	})
	$('.pop button').on('click', function(){
		$('.pop').fadeOut();
	})
	//slide
	setInterval(function(){
		$('.slider').delay(2500);
		$('.slider').animate({marginLeft:'-1200px'});
		$('.slider').delay(2500);
		$('.slider').animate({marginLeft:'-2400px'});
		$('.slider').delay(2500);
		$('.slider').animate({marginLeft:'-0px'});
	},2500)
})