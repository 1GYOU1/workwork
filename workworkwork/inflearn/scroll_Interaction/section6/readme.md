## __SCSS__
```scss
@mixin pink($type) {
	@if $type == color {
		color: pink;
	}
	@else if $type == bg {
		background-color: pink;
	}
  }
```
@include해서 사용
```scss
@include pink(color);//color:pink;
```

<br>

----

<br>

## __-webkit-text-stroke:, -webkit-text-fill-color__ 
텍스트 테두리 효과 - Explorer 에서 XX

<br>

----

<br>

## __new Date()__
<br>

해당 객체 선언하면 <strong style="background-color:#fff5b1;">현재 시간</strong>이 출력

type = object
```js
let date = new Date();
//Fri Jul 29 2022 17:10:04 GMT+0900 (한국 표준시)
```
날짜 시간 지정 출력
```js
let date1 = new Date(1991,11,25,3,50); // 1991년 12월 25일 3:50:00 (월 +1 주의)
let date2 = new Date('2014-6-4'); // 2002년 1월 1일 09:00:00
let date3 = new Date('2012-05-17 10:20:30'); // 2012년 5월 17일 10:20:30
```

[① 참고사이트](https://dororongju.tistory.com/116)

[② 참고사이트 - 모던 자바스크립트](https://ko.javascript.info/date)

<br>

## __.getFullYear()__
<br>

<strong style="background-color:#fff5b1;">현재 년도</strong> 출력

type = number
```js
let date = new Date();
console.log(date.getFullYear() + '년')
//2022년
```

<br>

## __.getMonth() + 1__
<br>

<strong style="background-color:#fff5b1;">현재 월</strong> 출력

<strong style="background-color:#fff5b1;">+1</strong> 해줘야함.

type = number

```js
let date = new Date();
console.log(date.getMonth() + 1 +'월')
//7월
```

<br>

## __.getDate()__

<br>

<strong style="background-color:#fff5b1;">현재 일</strong> 출력

type = number

```js
let date = new Date();
console.log(date.getDate() +'일')
//29일
```
<br>

.getDate()로 <strong style="background-color:#fff5b1;">현재 요일</strong> 구하기

방법1)
```js
let today1 = new Date();//현재 시간 선언

switch(today1.getDay()){//요일 구하기 -> 0 : 일요일 ~ 6 : 토요일
	case 0:
		console.log('일요일')
		break;
	case 1:
		console.log('월요일')
		break;
	case 2:
		console.log('화요일')
		break;
	case 3:
		console.log('수요일')
		break;
	case 4:
		console.log('목요일')
		break;
	case 5:
		console.log('금요일')
		break;
	case 6:
		console.log('토요일')
		break;
}
```
방법2)
```js
var today2 = new Date();//현재 시간 선언
var weekday = new Array(7);//요일 구하기 -> 0 : 일요일 ~ 6 : 토요일
weekday[0] = "일요일";
weekday[1] = "월요일";
weekday[2] = "화요일";
weekday[3] = "수요일";
weekday[4] = "목요일";
weekday[5] = "금요일";
weekday[6] = "토요일";

var day = weekday[today2.getDay()];
```

[① 참고사이트](https://programmers-sosin.tistory.com/entry/JavaScript-Date-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%82%A0%EC%A7%9C-%EC%8B%9C%EA%B0%84-Date-%EA%B0%9D%EC%B2%B4)

[② 참고사이트](https://dejavuhyo.github.io/posts/javascript-get-today/)

[③ 참고사이트](https://42kchoi.tistory.com/102)

<br>

그외 -

사용자의 문화권에 맞는 시간표기법으로 시간을 리턴

.toLocaleTimeString()

.toLocaleDateString()

.toLocaleString()

반환값:string, 시간

운영체제마다 문화권에 맞은 표기법(format)을 가지고 있는데 예를들면,

한국에서는 '1995년 12월 18일 월요일'가 미국에서는 '04/15/98'이고 영국에서는 '15.04.98'이다.

<br>

----

<br>


## __.split()__

<br>

문자열 분할 메소드

```js
string.split( separator, limit )
			//분할의 기준, 최대 분할 개수
```
<br>

분할 기준 적용

```js
var groub = 'a,b,c';
var groubSplit = groub.split(',');//,기준으로 자르기
for ( var i in groubSplit ) {
console.log(groubSplit[i]);
//a
//b
//c
}
```
<br>

최대 분할 개수 지정

```js
var groub = 'a,b,c';
var groubSplit = groub.split( ',', 2 );
for ( var i in groubSplit ) {
console.log(groubSplit[i]);
//a
//b
}
```


[.split()과 .split("")의 차이](https://somjang.tistory.com/entry/Python-%EB%AC%B8%EC%9E%90%EC%97%B4-split-%EA%B3%BC-split-%EC%B0%A8%EC%9D%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)

.reverse();

.hash

