//menu
$('.menu > ul > li').on('mouseenter',function(){
	$(this).find('.sub_menu').stop().slideDown();
});
$('.menu > ul > li').on('mouseleave',function(){
	$(this).find('.sub_menu').stop().slideUp();
});

//horizontal slide
var num = 0;
var img = 2;
setInterval(slideEvent, 2000);
function slideEvent(){
	$('.slider').animate({'margin-left' : -800 * num + 'px'});
	if(num == img){
		num = 0;
	}else{
		num++;
	}
};

//popup
$('.notice li:first-of-type').on('click', function(){
	$('.popup').stop().fadeIn();
});
$('.popup button').on('click', function(){
	$('.popup').stop().fadeOut();
})