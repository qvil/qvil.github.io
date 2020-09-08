---
title: "[Linux] 포트 사용하는 프로세스 찾기"
date: 2019-11-11 16:13:25 +0900
categories: "linux"
tags: [linux, lsof, port, process]

comments: true
share: true
---

## 4000번 포트를 사용하는 프로세스를 찾고 Kill하는 예제

lsof -i:PORT_NUMBER

```sh
lsof -i:4000
```

![/images/lsof.png](/images/lsof.png)

kill -9 PROCESS_NUMBER

```sh
kill -9 1516
```

## Reference

[프로세스 이름을 찾아서(ps, grep) 프로세스 번호(awk)로 중지(kill)](https://qvil.github.io/linux/ps-kill-grep-awk/)
