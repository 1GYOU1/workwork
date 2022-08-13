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

