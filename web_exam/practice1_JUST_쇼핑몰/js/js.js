$(document).ready(function(){

	// menu
	$('.menu').hover(function(){
		$('.sub_menu').stop().slideDown();
	})
	$('.menu_area').mouseleave(function(){
		$('.sub_menu').stop().slideUp();
	})
	
	// tab_menu
	$('.tab_menu>li').click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		if($('.tab_menu>li:nth-child(1)').hasClass('on') === true){
			$('.gallery').removeClass('on');
			$('.notice').addClass('on');
		}else{
			$('.notice').removeClass('on');
			$('.gallery').addClass('on');
		}
	});
	
	// popup
	$('.notice li a').click(function(){
		$('.pop').fadeIn();
	});
	$('button').click(function(){
		$('.pop').fadeOut();
	})
	
	//상하슬라이딩
	setInterval(function(){
		$('.slider').delay(2500);
		$('.slider').animate({marginTop:'-300px'});
		$('.slider').delay(2500);
		$('.slider').animate({marginTop:'-600px'});
		$('.slider').delay(2500);
		$('.slider').animate({marginTop:'0px'});
	});
	
	});
	
	//fade slide
	// $('.slider img').hide();
	// $('.slider img:first-child').show();
	
	// setInterval(function(){
	//     $('.slider img:first-child').fadeOut()
	//     .next('img').fadeIn()
	//     .end().appendTo('.slider');
	// }, 2500);
	
	// let imgs = 2;
	// let now = 1;
	// setInterval(function(){
	//     $(".slider img").eq(now - 1).fadeOut();
	//     $(".slider img").eq(now).fadeIn();
	//     now = now == imgs ? 0 : now += 1;
	// }, 3000);
	
	// let imgNum = 2;
	// let now = 0;
	// console.log($(".slider img").eq())
	// setInterval(function(){
	// 	$(".slider img").eq((now)).fadeOut();
	// 	$(".slider img").eq(now+1).fadeIn();
	// 	if(now === imgNum){
	// 		now = 0;
	// 	}else{
	// 		now = now + 1;
	// 	}
	// },2000)
	
	// //좌우슬라이딩
	// setInterval(function(){
	//     $('.slider').delay(2500);
	//     $('.slider').animate({marginLeft: "-1200px"})
	//     $('.slider').delay(2500);
	//     $('.slider').animate({marginLeft: "-2400px"})
	//     $('.slider').delay(2500);
	//     $('.slider').animate({marginLeft: "0px"})
	// });
	
	// https://sudal89.tistory.com/47