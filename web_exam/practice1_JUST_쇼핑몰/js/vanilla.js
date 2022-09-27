let noticeA = document.querySelector('.notice li:first-child > a')
let pop = document.querySelector('.pop')
let popBtn = document.querySelector('button')
let tabMenu = document.querySelectorAll('.tab_menu li')
let tabMenu1 = document.querySelector('.tab_menu li:first-child')
let tabMenu2 = document.querySelector('.tab_menu li:nth-child(2)')
let notice = document.querySelector('.notice')
let gallery = document.querySelector('.gallery')
let menuWrap = document.querySelector('.menu_wrap')
let menu = document.querySelector('.menu')
let submenu = document.querySelector('.sub_menu')
let slider = document.querySelector('slider');

// 공지사항
noticeA.addEventListener('click', noticeActive)
function noticeActive(){
	pop.style.display = 'block';
}
// 팝업 닫기
popBtn.addEventListener('click', popBtnActive)
function popBtnActive(){
	pop.style.display = 'none';
}
// tab1
tabMenu1.addEventListener('click', tabMenu1Active)
function tabMenu1Active(){
	tabMenu1.className = 'on';
	tabMenu2.className = '';
	notice.classList.add('on');
	gallery.classList.remove('on');
}
// tab2
tabMenu2.addEventListener('click', tabMenu2Active)
function tabMenu2Active(){
	tabMenu1.className = '';
	tabMenu2.className = 'on';
	notice.classList.remove('on');
	gallery.classList.add('on');
}

menu.addEventListener('mouseenter', menuEvt)
function menuEvt(){
	submenu.classList.add('on');
}
menuWrap.addEventListener('mouseleave', menuWrapEvt)
function menuWrapEvt(){
	submenu.classList.remove('on');
}

//slide