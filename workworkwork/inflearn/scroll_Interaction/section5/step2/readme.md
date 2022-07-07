.getBoundingCluentRect()

.offsetHeight()

classList.add('') 클래스 추가

classList.remove('') 클래스 지우기

classList.contains('') 클래스 있는지 확인


setInterval

clearInterval

```js
var loop = setInterval(function(){

}, 10)
```

window.scrollTo()

```js
var dir = moveY > window.pageTOffset ? 1 : -1;
```

[.wheel](https://m.blog.naver.com/a_ugust/221982749023)

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
