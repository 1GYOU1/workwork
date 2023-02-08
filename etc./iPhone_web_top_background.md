## **iPhone 웹 최상단 바 배경색 변경**

Apple Safari 15 이상 버전부터 제공하는 ‘웹 사이트 색조로 물들이기’ 옵션 때문,

Safari 테마 칼라란 웹 페이지의 칼라를 Safari 브라우저의 탭바에 적용하는 것을 말한다.
 
Safari HTML의 메타태그에 아래와 같은 코드가 있으면 적용한다.  이 메타태그가 없으면 Safari가 컨텐트의 칼라 중에서 자동으로 선택한다.

현재는 모바일 안드로이드 OS에서 Google Chrome과 Firefox Os, Opera 브라우저, 삼성 브라우저만 지원.
<p>
<img src="https://user-images.githubusercontent.com/90018379/209765080-673ce555-cd82-491c-baa4-ddc6f6b4f79e.jpg" style="width:32%;height:auto;">
<img src="https://user-images.githubusercontent.com/90018379/209765086-22f11c71-fa4e-4aa6-836e-50dd537c12d6.jpg" style="width:32%;height:auto;">
<img src="https://user-images.githubusercontent.com/90018379/209765085-1ee19ba8-f0c4-499e-9b2e-d8cc7f190a1b.jpg" style="width:32%;height:auto;">
</p>

```html
<!-- Chrome, Firefox, Opera -->
<meta name='theme-color' content='#fff'/>
<!-- Windows Phone -->
<meta name='msapplication-navbutton-color' content='#fff' />
<!-- iOS Safari -->
<meta name='apple-mobile-web-app-status-bar-style' content='#fff'/>
<meta name='apple-mobile-web-app-capable' content='yes' />
```

[참고사이트](https://urliveblogger.blogspot.com/2021/01/change-status-bar-color.html)