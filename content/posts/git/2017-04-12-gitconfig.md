---
title: "gitconfig"
date: 2017-04-12
tags: [git]
comments: true
share: true
slug: gitconfig
---

- Table of Contents
  {:toc}

# Alias

> ~/.gitconfig 파일을 수정하면 컴퓨터 전체의 git에 적용됨 (~/ ⇐ HomeDirectory)

아래 코드를 .gitconfig에 붙여 넣는다.

<script src="https://gist.github.com/qvil/d8d4efca409f0f4f1e825f9535ca7476.js"></script>

## Windows에서 `.gitconfig`파일이 없을 때

아래 커맨드를 사용하면 `C:\Users\username` `.gitconfig`파일이 생성된다 메모장으로 수정해도된다.

```sh
git config --global user.name tshyeon
```

커맨드 라인에 입력

```
$ git config --global alias.tlg "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold red)%h%C(reset) : %C(bold green)(%ar)%C(reset) - %C(cyan)\<%an\>%C(reset)%C(bold yellow)%d%C(reset)%n%n%w(90,1,2)%C(white)%B%C(reset)%n'"
```

```
git lg 의 -10옵션 10줄
git lg1 또는 lg2로 log명령을 대신한다.
git co 로 checkout명령을 대신한다.
git br 로 branch명령을 대신한다.
git ci 로 commit명령을 대신한다.
git st 로 status명령을 대신한다.
git unstage 로 reset HEAD –명령을 대신한다.
git last 로 log -1 HEAD명령을 대신한다.
git tlg 네이버(toast meetup)에서 본 log alias
```
