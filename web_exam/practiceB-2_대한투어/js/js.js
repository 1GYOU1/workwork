//menu
$('.menu > ul > li').on('mouseenter', function(){
	$('.menu > ul > li > .submenu').stop().slideDown();
	$('.menu_bg').stop().slideDown();
});
$('.menu > ul > li').on('mouseleave', function(){
	$('.menu > ul > li > .submenu').stop().slideUp();
	$('.menu_bg').stop().slideUp();
});

//vertical slide
var num = 0;
var img = 2;
setInterval(sliderEvt, 2000)
function sliderEvt(){
	$('.slider').animate({'margin-top': -300 * num + 'px'});
	if(num == img){
		num = 0;
	}else{
		num++;
	}
};

//popup
$('.notice > li:first-of-type').on('click', function(){
	$('.popup').stop().fadeIn();
});
$('.popup button').on('click', function(){
	$('.popup').stop().fadeOut();
});