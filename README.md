<h4>workwork</h4>

<br>

### __git__

<br>

__github repository 옮기기__

```
git clone --mirror {old repository}
cd {old repository name}
git remote set-url origin {new repository}
git push --mirror
```

[예시]
```
git clone --mirror https://github.com/1GYOU1/workwork.git
cd workwork.git
git remote set-url origin https://github.com/1GYOU1/inflearn.git
git push --mirror
```

git 연결 참고
https://investechnews.com/2021/06/14/mac-git-setting/

DS_store file 삭제
https://velog.io/@cil05265/Git-Hub%EA%B9%83%ED%97%88%EB%B8%8C-.DSStore-%ED%8C%8C%EC%9D%BC-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%82%AD%EC%A0%9C-%EB%B0%A9%EB%B2%95

마지막 git push