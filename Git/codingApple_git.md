# coding apple git

## 작업폴더에서 git 이용하기

vscode에서 작업폴더 기준으로 터미널 열고 git init 입력하면 파일 생성, 수정하는 것을 추적.

>$ git init

<br>

현재 상태를 기록해두는 것을 staging이라고 한다.

현재상태를 기록해두면 이 파일 상태 그대로 되돌리거나 변경 히스토리 열람가능.
>$ git add 파일명

>$ git commit -m '커밋메세지'

<br>

여러 파일 동시 스테이징
>$ git add 파일명1 파일명2

<br>

작업 폴더의 모든 파일을 전부 스테이징
>$ git add .

<br>

지금까지 변경된 파일, 스테이징된 파일 목록 확인하기 (상태창)
>$ git status

<br>

스테이징된 파일 취소하기
>$ git restore --staged 파일명

<br>

commit 기록 한 눈에 파악하기

--graph 옵션을 넣으면 그래프로 그려줌.
입력 후 Vim 에디터가 켜져서 j, k키로 위아래 스크롤이 가능하고 q 키로 종료 가능.

>$ git log --all --oneline

>$ git log --all --oneline --graph