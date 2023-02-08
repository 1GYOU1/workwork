## 개발자도구 > Source 탭 사용하기

특정 이벤트가 발생하는 시점에 호출되는 함수 찾기

1. Source > Event Listener Breakpoints섹션을 열고 Mouse>click을 체크
2. 함수가 실행될 영역 클릭후 디버깅.
Jquery라이브러리 사용할 경우 click 이벤트를 jquery.js에 위임하므로 별도 설정 필요
Setting > Ignore List > /.*jquery.*\.js$ 규칙 추가


[참고사이트 - 크롬 개발자도구](https://www.insilicogen.com/blog/354)