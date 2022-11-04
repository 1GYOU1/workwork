//menu
$('.menu > ul > li').on('mouseenter', function(){
	$(this).find('.sub_menu').stop().slideDown();
});
$('.menu > ul > li').on('mouseleave', function(){
	$(this).find('.sub_menu').stop().slideUp();
});
//slide
var num = 0;
var img = 2;
setInterval(slideEvent, 2000);
function slideEvent(){
	$('.slider li').eq(num-1).fadeOut();
	$('.slider li').eq(num).fadeIn();
	if(num == img){
		num = 0;
	}else{
		num++;
	}
}
//tab
$('.tab_menu li:first-of-type').on('click',function(){
	$(this).addClass('on');
	$('.tab_menu li:last-of-type').removeClass('on');	
	$('.notice').css({'display':'block'});
	$('.gallery').css({'display':'none'});
});
$('.tab_menu li:last-of-type').on('click',function(){
	$(this).addClass('on');
	$('.tab_menu li:first-of-type').removeClass('on');
	$('.gallery').css({'display':'block'});
	$('.notice').css({'display':'none'});
});
//popup
$('.notice ul li:first-of-type').on('click',function(){
	$('.popup').stop().fadeIn();
});
$('.popup button').on('click',function(){
	$('.popup').stop().fadeOut();
});