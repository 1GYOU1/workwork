### **아이폰 앱 내 웹뷰 폰트사이즈**

앱 내 설정으로 폰트 크기를 정하며, 앱단에서 다른 영역은 시스템 폰트 설정이 안되도록 제한하고, 시험지의 지문과 선지 영역에만 선택된 폰트 크기에 맞게 시스템 폰트 설정을 적용

**<참고 자료 사이트>**

iOS Dynamic Type 폰트 css 적용 

[https://eunjin3786.tistory.com/363](https://eunjin3786.tistory.com/363)

ㄴ [4] Dynamic Type 지원하기 > 웹뷰

[https://pilgwon.github.io/blog/2017/10/27/Dynamic-Type-With-Web-Views.html](https://pilgwon.github.io/blog/2017/10/27/Dynamic-Type-With-Web-Views.html)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{font:-apple-system-body;}
        h1{font: -apple-system-headline;}
    </style>
</head>
<body>
    <h1>apple font 테스트 중 !!</h1>
    <p>text text text text text text text text text text text text text text</p>
</body>
</html>
```

상단 코드처럼 태그에 맞는 font css 적용.

```css
font: -apple-system-body;
font: -apple-system-headline;
font: -apple-system-subheadline;
font: -apple-system-caption1;
font: -apple-system-caption2;
font: -apple-system-footnote;
font: -apple-system-short-body;
font: -apple-system-short-headline;
font: -apple-system-short-subheadline;
font: -apple-system-short-caption1;
font: -apple-system-short-footnote;
font: -apple-system-tall-body;

/* 사용 예시 */
body {
    font: -apple-system-body;
}

h1 {
    font: -apple-system-headline;
    color: red;
}

h2 {
    font: -apple-system-subheadline;
    color: blue;
}

.footnote {
    font: -apple-system-footnote;
    color: green;
}
```

다른 폰트 스타일 적용되어있으면, 아이폰에서 폰트 사이즈 조절 안돼서 하단 코드처럼 수정하여 해결.

```css
body{font:-apple-system-body !important;}
엘리먼트 이름{font:inherit;/*font 스타일 상속*/}
```

**  애플 기기가 아닌 기기에도 서비스한다면 폰트를 불러오지 못 했을 경우의 폰트도 설정해두기 !