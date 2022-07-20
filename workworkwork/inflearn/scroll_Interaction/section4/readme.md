# < javascript >

<br>

## __.forEach__

<br>

```js
let a = ['가', '나', '다', '라', '마'] //: 배열

let b  = a.forEach(function(element, index, array){ //요소, 인덱스, 배열
    console.log(element)
    console.log(index)
    console.log(array)
})
``` 
<p align="center">
    <img src="https://user-images.githubusercontent.com/90018379/177112718-94b58618-a070-4daa-8713-49b692628004.jpg">
</p>

<br>

참고 사이트

* [JavaScript - forEach(), 다양한 예제로 이해하기](https://codechacha.com/ko/javascript-foreach/)
* [Array.prototype.forEach()](https://runebook.dev/ko/docs/javascript/global_objects/array/foreach)

<br>

---------
<br>
<br>

## __.addEventListener 이벤트 종류__

<br>
<br>

### ↓ 브라우저의 UI와 상호작용 ↓
<br>

이벤트|설명|
:---:|:---|
__load__|웹 페이지의 로드가 완료되었을 때|
__unload__|웹 페이지가 언로드 될 때(새로운 페이지를 요청한 경우 )|
__error__|브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 없는 경우|
__resize__|브라우저의 창 크기 조절 할 때|
__scroll__|사용자가 페이지를 위아래로 스크롤 할 때|

<br>
<br>

### ↓ 키보드 이벤트 ↓
<br>

이벤트|설명|
:---:|:---|
__keydown__|사용자가 키를 처음 눌렀을 때|
__keyup__|키를 땔 때|
__keypress__|사용자가 눌렀던 키의 문자가 입력되었을 때|

<br>
<br>

### ↓ 마우스 이벤트 ↓
<br>

이벤트|설명|
:---:|:---|
__click__|사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때|
__dbclick__|두 번 눌렀다 땔 때|
__mousedown__|마우스를 누르고 있을 때|
__mouseup__|눌렀던 마우스 버튼을 땔 때|
__mousemove__|마우스를 움직였을 때|
__mouseover__|요소 위로 마우스를 움직였을 때|
__mouseout__|요소 바깥으로 마우스를 움직였을 때|

<br>
<br>

### ↓ 포커스 이벤트 ↓
<br>

이벤트|설명|버블링
:---:|:---|:---:
__focus__|요소가 포커스를 얻었을 때 |발생 안함|
__focusin__|focus가 들어갔을 때 이벤트 발생 |발생함|
__blur__|요소가 포커스를 잃었을 때 |발생 안함|
__focusout__|focus가 빠져나왔을 때 이벤트 발생 |발생함|


<br>

정리
- focus & blur / focusin & focusout 짝 지어서 사용
- 부모요소에서 리스너를 동작하고 싶다면 focusein / focusout 사용 - [설명 더보기](https://ibrahimovic.tistory.com/13)

<br>
<br>

### ↓ 폼 이벤트 ↓
<br>

이벤트|설명|
:---:|:---|
__input__|input, textarea 요소 값이 변경되었을 때|
__change__|선택 상자, 체크박스, 라디오 버튼의 상태가 변경되었을 때|
__submit__|사용자가 버튼키를 이용하여 폼을 제출할 때|
__reset__|리셋 버튼을 클릭할 때|
__cut__|폼 필드의 콘텐츠를 잘라내기 했을 때|
__copy__|폼 필드의 콘텐츠를 복사했을 때|
__paste__|폼 필드의 콘텐츠를 붙여넣을 때|
__select__|텍스트를 선택했을 때|

<br>

```js
element.addEventListener('click', EventAct, false);
```

<br>

* 1번째 인자는 이벤트명이다.

* 2번째 인자는 콜백 함수로, 이벤트가 발생되면 실행.

* 3번째 인자는 useCapture 불린 값, 이벤트 버블링이나 캡쳐링을 사용할 것인지 나타냄.

    * [참고 사이트](https://chlolisher.tistory.com/22)

<br>

참고 사이트

* [이벤트 참조](https://developer.mozilla.org/ko/docs/Web/Events)

<br>
<br>

## __.removeEventListener__

<br>
<br>

이전에 addEventListener로 등록한 이벤트 리스너를  삭제

```js
removeEventListener("이벤트 이름", 실행할 함수 )
```

<br>
<br>

## __.preventDefault()__

<br>
<br>

이벤트를 전파시키지 않고 이벤트를 취소, 또는 발생하지 않은 것처럼 이벤트 자체를 없애 버린다.

```js
event.preventDefault();
```

<br>

---------
<br>
<br>

## __.offsetWidth, .offsetHeight__
<br>

padding, border 값을 포함한 컨텐츠의 높이, 넓이 값.

margin 값은 포함 X.

<br>

HTML ↓
```html
<div class="box1"></div>
```
JS ↓
```js
console.log(document.querySelector('.box1').offsetWidth);
```
<br>
<br>

## __.clientWidth, .clientHeight__
<br>

padding 값을 포함한 컨텐츠의 높이, 넓이 값.

margin, border, 스크롤 크기(너비) 값은 포함 X.

<br>

HTML ↓
```html
<div class="box1"></div>
```
JS ↓
```js
console.log(document.querySelector('.box1').clientWidth);
```
<br>
<br>

## __.scrollWidth, .scrollHeight__

<br>

총 스크롤 크기 scrollWidth, scrollHeight 값을 사용.

<br>

HTML ↓
```html
<div class="box1"></div>
```
JS ↓
```js
console.log(document.querySelector('.box1').scrollWidth);
```
<br>
<br>

## __window.pageYOffset, window.pageXOffset__

<br>

웹 문서가 얼마나 스크롤됐는지 px 단위로 반환하는 속성.

<br>

JS ↓
```js
console.log(window.pageYOffset);
```

<br>
<br>

## __.offsetTop__

<br>

가장 가까운 위치 에 있는 조상 요소 HTMLElement.offsetTop의 상단 내부 경계를 기준으로 현재 요소의 외부 경계까지의 거리를 반환

<br>

JS ↓
```js
let contTop = document.querySelector('.cont01').offsetTop;
```

<br>

참고 사이트

* [div 요소의 top(시작) 위치 알아내기](https://mosei.tistory.com/entry/Javascript-div-%EC%9A%94%EC%86%8C%EC%9D%98-top%EC%8B%9C%EC%9E%91-%EC%9C%84%EC%B9%98-%EC%95%8C%EC%95%84%EB%82%B4%EA%B8%B0)

<br>
<br>

<정리>
- __offsetWidth, offsetHeight__ - border, padding 포함, margin X

- __clientWidth, clientHeight__ - border, margin을 포함하지 않고, 스크롤바의 크기도 고려할 필요가 없을 때

- __scrollWidth, scrollHeight__ - 영역 내부의 컨텐츠 크기까지 (총 스크롤 크기) 고려해야 할 때.

-  __window.pageYOffset, window.pageXOffset__ - 웹 문서가 얼마나 스크롤됐는지 알고싶을 때

- __.offsetTop__ - 조상 요소를 기준으로 현재 요소의 거리 반환

<br>

---------
<br>
<br>

## __.getAttribute__
<br>

선택한 요소(element)의 특정 속성(attribute)값에 접근, 가져오기.
<br>

HTML ↓
```html
<a href="#;" id="link">
    <img src="https://via.placeholder.com/200" alt="">
</a>
```
JS ↓
```js
console.log(document.getElementById('link').getAttribute('href'))

//a 태그의 href 값인 #; 출력
```
<br>
<br>

## __.setAttribute__
<br>

선택한 요소(element)의 특정 속성(attribute)값에 추가, 수정하기.

JS ↓
```js
document.getElementById('link').setAttribute('href','https://github.com/1GYOU1')

console.log(document.getElementById('link').getAttribute('href'))

// https://github.com/1GYOU1 출력
```
<br>
<br>

## __.removeAttribute__
<br>

선택한 요소(element)의 특정 속성(attribute)값 삭제하기.

JS ↓
```js
document.getElementById('link').removeAttribute('href');

console.log(document.getElementById('link'))

// href 삭제
```
<br>

---------