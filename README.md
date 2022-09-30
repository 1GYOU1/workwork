# __git__

## MAC git 초기 설정

[참고사이트 ①](https://investechnews.com/2021/06/14/mac-git-setting/)

<br>

----

## github 기본 사용 code

```
```

----

## github repository clone

<br>

```
$ git clone --mirror {old repository}
$ cd {old repository name}
$ git remote set-url origin {new repository}
$ git push --mirror
```

[예시]
```
$ git clone --mirror https://github.com/1GYOU1/workwork.git
$ cd workwork.git
$ git remote set-url origin https://github.com/1GYOU1/inflearn.git
$ git push --mirror
```

----
## github DS_store 삭제

<br>

① 삭제할 repository local 폴더로 이동
```
$cd.. repository local 폴더
```
② 저장소 상위 디렉토리에서 현재 디렉토리 아래의 모든 .DS_Store 파일을 제거
```
find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch -f
```
③ .DS_Store 파일을 업로드하지 않을거라면,

저장소 상위 디렉토리에 .gitignore 파일 생성 및 .DS_Store 파일 추가
```
echo .DS_Store >> .gitignore
```
④ 변경 사항을 원격 저장소에 push
```
git add .gitignore
git commit -m ".DS_Store is banished"
git push
```

[참고사이트 ①](https://velog.io/@cil05265/Git-Hub%EA%B9%83%ED%97%88%EB%B8%8C-.DSStore-%ED%8C%8C%EC%9D%BC-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%82%AD%EC%A0%9C-%EB%B0%A9%EB%B2%95)

[참고사이트 ②](https://wooono.tistory.com/251)