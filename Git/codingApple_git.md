# coding apple git

## 작업폴더에서 git 이용하기 - 명령어

## git init

vscode에서 작업폴더 기준으로 터미널 열고 git init 입력하면 파일 생성, 수정하는 것을 추적.

>$ git init

<br>

## staging

현재 상태를 기록해두는 것을 staging이라고 한다.

현재상태를 기록해두면 이 파일 상태 그대로 되돌리거나 변경 히스토리 열람가능.
>$ git add 파일명

>$ git commit -m '커밋메세지'

<br>

## git add

여러 파일 동시 스테이징
>$ git add 파일명1 파일명2

<br>

작업 폴더의 모든 파일을 전부 스테이징
>$ git add .

<br>

## git status

지금까지 변경된 파일, 스테이징된 파일 목록 확인하기 (상태창)
>$ git status

<br>

## git restore

스테이징된 파일 취소하기
>$ git restore --staged 파일명

<br>

## git log

commit 기록 한 눈에 파악하기

--graph 옵션을 넣으면 그래프로 그려줌.
입력 후 Vim 에디터가 켜져서 j, k키로 위아래 스크롤이 가능하고 q 키로 종료 가능.

git log 하면 나오는 HEAD는 나의 현재 branch 위치. 

>$ git log --all --oneline

브랜치마다 commit 내역을 그래프로 보기

>$ git log --all --oneline --graph

<br>

## git diff

바로 전 commit과 현재 코드의 차이점을 비교

현재 파일이 최근 commit과 어떤 부분이 달라졌는지 알려줍니다.

(Vim 에디터가 오픈되어서 스크롤은 j, k / 종료는 q 연타해야하며, 터미널의 한계로 차이점보기가 힘듬)
>$ git diff

<br>

최근 commit과 비교하는게 아니라 과거의 특정 commit과 현재 파일을 비교하고 싶으면 커밋ID를 명시 

(커밋ID는 git log --oneline 이런거 입력하면 보이는 노란 글자들)

>$ git diff `커밋id`

<br>

과거의 특정 commit 2개 간의 차이점 비교도 가능

>$ git diff `커밋id1` `커밋id2`

<br>

## git difftool

비주얼적으로 훌륭하게 차이점을 분석해주는데, 입력하면 현재 파일과 최근 commit의 차이점을 비교.

Vim 에디터가 뜨는데, hjkl 키로 이동가능하고 :q 여러번 입력해야 나갈 수 있고, 아니면 :qa 입력. 

(Vim 에디터와 터미널의 한계로 그렇게 편리하진 않음. Git 관련 부가기능 설치 아무거나 해주면 더 편리하게 git diff 이용가능...)

>$ git difftool

<br>

현재 파일과 특정 commit의 차이점을 비교.

>$ git difftool `커밋id`

<br>

특정 commit 2개의 차이점을 비교

>$ git difftool `커밋id1` `커밋id2`

<br>

git difftool을 Vim 말고 VSCode로 열고 싶으면 터미널에 차례로 하단 코드 2개 입력.
 
>$ git config --global diff.tool vscode

>$ git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'

<br>

## git branch - 브랜치 생성

새로운 브랜치에 프로젝트 사본이 하나 생성됨.

>$ git branch `브랜치이름`

<br>

## git switch - 브랜치 이동

작업할 branch로 이동

예를 들어 방금 만든 coupon 브랜치로 이동하고 싶으면 `git switch coupon` 입력.

다시 메인 브랜치로 되돌아가고 싶으면 git switch main 하면 됩니다. (님들 설정에 따라 main 말고 master 일 수도 있음)

>$ git switch `브랜치이름` 

<br>

## git merge - 브랜치 합치기

merge 하고 싶으면

1. main/master 브랜치로 다시 이동하고

2. git merge 브랜치명 입력하면 합쳐집니다.

예를 들어 git merge coupon 이러면 coupon 브랜치의 코드들이 main/master 브랜치에 합쳐집니다.

>$ git switch main

>$ git merge `브랜치명`

<br>

## merge시 충돌

master 브랜치와 coupon 브랜치에서 같은 파일, 같은 줄을 수정했을 경우
merge conflict 발생.

이 경우 에디터로 해당 파일을 열어보면 충돌사항이 적혀있고,

<<<< / >>>> / ==== 이런 쓸데없는 것들은 다 지우고 원하는 코드만 남기면 됩니다.

VSCode 에디터의 경우 Accept Incoming Change 어쩌구 버튼들을 제공해주는데 그거 누르면 편리.

>$ git add `파일명`

>$ git commit -m `'메세지'`

입력하면 새로운 commit 을 생성해주며 merge conflict 해결 + 브랜치 합치기 완료

**요약 : 파일열어서 수정하고 git add, git commit 하기**

<br>

---

## repository에 push까지의 순서

1. 저장소 초기화 
>$ git init

2. 저장소, 브랜치 연동
>$ git remote add main https://github.com/1GYOU1/Git.git

3. 스테이징 시킬 파일 선택
>$ git add .

4. 커밋 메세지 작성
>$ git commit -m "message"

5. push
>$ git push

<br>

---