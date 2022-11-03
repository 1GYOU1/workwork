// fadeIn fadeOut slider
var now=0;
var img=2;
setInterval(function(){
	
	$('.slider li').eq(now-1).fadeOut();
	$('.slider li').eq(now).fadeIn();
	if(now === img){
		now = 0;
	}else{
		now++;
	}
},2000)

// menu
$('.menu > ul li').on('mouseenter', function(){
	$(this).find('.sub_menu').stop().slideDown();
});
$('.menu > ul li').on('mouseleave', function(){
	$(this).find('.sub_menu').stop().slideUp();
});

// popup
$('.tab_cont01 > ul > li:first-child > a').on('click', function(){
	$('.popup').stop().fadeIn();
});
$('.popup > button').on('click', function(){
	$('.popup').stop().fadeOut();
});

// tab
$('.notice').on('click', function(){
	$('.tab_cont02').css('display','none');
	$('.tab_cont01').css('display','block');
});
$('.gallery').on('click', function(){
	$('.tab_cont01').css('display','none');
	$('.tab_cont02').css('display','flex');
});