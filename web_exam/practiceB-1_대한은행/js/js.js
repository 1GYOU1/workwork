//menu
$('.menu > ul > li').on('mouseenter', function(){
	$('.sub_menu').stop().slideDown();
});
$('.menu').on('mouseleave', function(){
	$('.sub_menu').stop().slideUp();
});

//horizontal slider
var num = 0;
var img = 2;
setInterval(sliderEvent, 2000);
function sliderEvent(){
	$('.slider').animate({'margin-left':-1200*num + 'px'});
	if(num == img){
		num = 0;
	}else{
		num++;
	}
};

//tab
//style change ver.
// $('.tab_menu > li:first-of-type').on('click',function(){
// 	$('.gallery').css({'display':'none'});
// 	$('.notice').css({'display':'block'});
// })
// $('.tab_menu > li:last-of-type').on('click',function(){
// 	$('.notice').css({'display':'none'});
// 	$('.gallery').css({'display':'block'});
// })

//addClass ver.
$('.tab_menu > li:first-of-type').on('click', function(){
	$('.gallery').removeClass('on');
	$('.notice').addClass('on');
	$('.tab_menu > li:first-of-type').css({'background-color':'lightcoral'});
	$('.tab_menu > li:last-of-type').css({'background-color':'#fff'});
});
$('.tab_menu > li:last-of-type').on('click', function(){
	$('.notice').removeClass('on');
	$('.gallery').addClass('on');
	$('.tab_menu > li:first-of-type').css({'background-color':'#fff'});
	$('.tab_menu > li:last-of-type').css({'background-color':'lightcoral'});
});

//popup
$('.notice ul li:first-of-type').on('click',function(){
	$('.popup').stop().fadeIn();
})
$('.popup > button').on('click',function(){
	$('.popup').stop().fadeOut();
})