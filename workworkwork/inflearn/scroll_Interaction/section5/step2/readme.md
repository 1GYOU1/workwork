# < javascript >

<br>

## __.getBoundingCluentRect__
<br>

요소 좌표 얻기.
x와 y – 요소를 감싸는 네모의 창 기준 X, Y 좌표
- width와 height – 요소를 감싸는 네모의 너비, 높이(음수도 가능)
- x와 y, width와 height 이외에 다음과 같은 파생 프로퍼티도 있습니다.

- top과 bottom – 요소를 감싸는 네모의 위쪽 모서리, 아래쪽 모서리의 Y 좌표
- left와 right – 요소를 감싸는 네모의 왼쪽 모서리, 오른쪽 모서리의 X 좌표

JS ↓
```js
console.log(document.querySelector('.cont01').getBoundingClientRect());
```

![캡처](https://user-images.githubusercontent.com/90018379/179651728-cb39d2ae-62d0-42af-b8ea-b5f19cee1c72.PNG)

<br>

---------

<br>

## __.classList.add('')__
<br>

클래스 추가하기.

JS ↓
```js

```
<br>
<br>

## __.classList.remove('')__
<br>

클래스 지우기.

JS ↓
```js

```
<br>
<br>

## __.classList.contains('')__
<br>

클래스 있는지 확인하기.

JS ↓
```js

```
<br>
<br>

## __.classList.toggle('')__
<br>

클래스값이 있는지 체크하고 없으면 더하고 있으면 제거하기.

JS ↓
```js

```
<br>

---------

<br>

## __.setInterval__
<br>

.

JS ↓
```js
var loop = setInterval(function(){

}, 10)
```
<br>
<br>

## __.clearInterval__
<br>

.

JS ↓
```js

```
<br>

---------
<br>
## __window.scrollTo()__
<br>

.

JS ↓
```js
var dir = moveY > window.pageTOffset ? 1 : -1;
```
<br>

---------

## __.wheel__
<br>

```js
el.addEventListener('wheel', zoom);
```

[.wheel](https://m.blog.naver.com/a_ugust/221982749023)


---------


.each문 활용해서 offsetTop[1] 작성 해보기

```js
section.each(function(index,obj){
    offsetTop[index] = $(obj).offset().top;
    offsetBottom[index] = $(obj).offset().top + $(obj).Height();
});

function checkInSection(){
    if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop){
        sectionActive(0);
    }else if(winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop){
        sectionActive(1);
    }
}

function sectionActive(index){
    console.log(index)
}
```

[if(a)와 if(!a)의 차이점](https://dojang.io/mod/forum/discuss.php?d=1267)
