# < javascript >

## .forEach

<br>

```js
let a = ['가', '나', '다', '라', '마'] //: 배열

let b  = a.forEach(function(element, index, array){ //요소, 인덱스, 배열
    console.log(element)
    console.log(index)
    console.log(array)
})
```  
<br>

참고 사이트

* [JavaScript - forEach(), 다양한 예제로 이해하기](https://codechacha.com/ko/javascript-foreach/)
* [Array.prototype.forEach()](https://runebook.dev/ko/docs/javascript/global_objects/array/foreach)

<br>

---------
<br>

## .offsetWidth, .offsetHeight
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

## .clientWidth, .clientHeight
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

## .scrollWidth, .scrollHeight

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

## window.pageYOffset, window.pageXOffset

<br>

웹 문서가 얼마나 스크롤됐는지 px 단위로 반환하는 속성.

<br>

JS ↓
```js
console.log(window.pageYOffset);
```

<br>

### 정리
- border, padding 포함, margin X - offsetWidth, offsetHeight,

- border, margin을 포함하지 않고, 스크롤바의 크기도 고려할 필요가 없을 때 - clientWidth, clientHeight

- 영역 내부의 컨텐츠 크기까지 (총 스크롤 크기) 고려해야 한다면 - scrollWidth, scrollHeight.

- 웹 문서가 얼마나 스크롤됐는지 알고싶다면 - window.pageYOffset, window.pageXOffset

<br>

---------
<br>

## .getAttribute
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

## .setAttribute
<br>

선택한 요소(element)의 특정 속성(attribute)값에 추가, 수정하기.

JS ↓
```js
document.getElementById('link').setAttribute('href','https://github.com/1GYOU1')

console.log(document.getElementById('link').getAttribute('href'))

// https://github.com/1GYOU1 출력
```
<br>

## .removeAttribute
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