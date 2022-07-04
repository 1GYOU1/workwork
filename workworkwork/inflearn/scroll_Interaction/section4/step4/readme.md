# < javascript >

## .forEach

<br>

```c
<script>
    let a = ['가', '나', '다', '라', '마'] //: 배열

    let b  = a.forEach(function(element, index, array){ //요소, 인덱스, 배열
    console.log(element)
    console.log(index)
    console.log(array)
    })
</script>
```  
<br>

참고 사이트

* [JavaScript - forEach(), 다양한 예제로 이해하기](https://codechacha.com/ko/javascript-foreach/)
* [Array.prototype.forEach()](https://runebook.dev/ko/docs/javascript/global_objects/array/foreach)

<br>

---------
<br>

## .getAttribute()
<br>

선택한 요소(element)의 특정 속성(attribute)값에 접근, 가져오기.
<br>
```c
<body>
  <a href="#;" id="link">
    <img src="https://via.placeholder.com/200" alt="">
  </a>
</body>

<script>
console.log(document.getElementById('link').getAttribute('href'))
//#; 출력
</script>
```
<br>

## .setAttribute()
<br>

선택한 요소(element)의 특정 속성(attribute)값에 추가, 수정하기.
```c
<script>
document.getElementById('link').setAttribute('href','https://github.com/1GYOU1')
console.log(document.getElementById('link').getAttribute('href'))
// https://github.com/1GYOU1 출력
</script>
```
<br>

## .removeAttribute()
<br>

선택한 요소(element)의 특정 속성(attribute)값 삭제하기.
```c
<script>
  document.getElementById('link').removeAttribute('href');
  console.log(document.getElementById('link'))
  // href 삭제
</script>
```
<br>

---------