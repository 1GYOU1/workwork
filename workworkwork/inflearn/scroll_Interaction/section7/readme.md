## __position : sticky__

부모 요소 안에서만 고정

sticky가 적용될 요소는 꼭 height값이 있어야 함

IE11이하 버전은 지원하지 않는다.

#### __CSS__
```css
position: sticky;
top: 20px;
```


----

<br>

## __Math.max()__

입력값으로 받은 숫자 중 가장 큰 숫자를 반환

```js
Math.max(10, 20)
//20
```
```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
//3
```

<br>

## __Math.min()__

입력값으로 받은 숫자 중 가장 작은 숫자를 반환

```js
Math.min(10, 20)
//10
```
```js
var arr = [1, 2, 3];
var min = Math.min(...arr);
//1
```
----

<br>

## __Modernizr__

<br>

### [Modernizr site](https://modernizr.com/)

Download → 필요한 css 선택 → Bulid → Copy to Clipboard

<br>

### __CSS__
```css
.fix_motion .sticky_cont {overflow: hidden; position: sticky; position: -webkit-sticky; top:0; left: 0; width: 100%; height: 100vh;}
.no-csspositionsticky .fix_motion .sticky_cont {position: relative}
```
### __JS__
```js
;(function(window, document, undefined){
    .
    .
    .
})(window, document);
```
```js
if(Modernizr.csspositionsticky) {
    init();
};
```