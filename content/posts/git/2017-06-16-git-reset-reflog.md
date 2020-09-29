---
title: "[Git] Commit Log없애거나(합치거나) 복구하기"
date: 2017-06-16
tags: [git, github]
comments: true
share: true
slug: git/git-reset-reflog
---

- Table of Contents
  {:toc}

Git log를 없애고 싶은 경우 `Reset`을 사용.

## Commit Log 합치기(Git Reset)

[7.7 Git 도구 - Reset 명확히 알고 가기](https://git-scm.com/book/ko/v2/Git-도구-Reset-명확히-알고-가기) <= 공식문서참고

**예제**
![git-reset](/images/git-reset.png)
HEAD에서 2번째 이전 `4` 라고 적힌 커밋이 없어진 것을 볼 수 있다.

## Commit 복원(Reflog)

![git-reflog](/images/git-reflog.png)

`git reflog`를 이용하면 `--hard`옵션으로 `reset`시킨 경우 아니면 이전의 로그를 볼 수 있고, 위 사진처럼 복구할수도 있다.
