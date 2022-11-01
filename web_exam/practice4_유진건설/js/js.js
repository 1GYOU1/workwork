//menu
$('.main_menu > ul > li > a').on('mouseenter',function(){
	$('.sub_menu').stop().slideDown();
	$('.menu_bg').stop().slideDown();
});
$('.main_menu').on('mouseleave',function(){
	$('.sub_menu').stop().slideUp();
	$('.menu_bg').stop().slideUp();
});

//slider fade
var num=0;
var img=2;
setInterval(slideEvent, 2000);
function slideEvent(){
	$('.slider li').eq(num).fadeIn();
	$('.slider li').eq(num-1).fadeOut();
	if(num == img){
		num = 0;
	}else{
		num++;
	}
}

//popup
$('.notice_cont > ul > li:first-child').on('click',function(){
	$('.popup').fadeIn();
});
$('.popup > button').on('click',function(){
	$('.popup').fadeOut();
});