---
title: "[Linux] 프로세스 이름으로 중지(Feat. ps, kill, grep, awk)"
date: 2017-07-31 17:05:02 +0900
categories: "linux"
tags: [linux, ps, kill, grep, awk]

comments: true
share: true
slug: linux/ps-kill-grep-awk
---

## 프로세스 이름을 찾아서(ps, grep) 프로세스 번호(awk)로 중지(kill)

### 명령어

```sh
kill -9 `ps -ef | grep 'PROCESS_NAME' | awk '{print $2}'`
```

## 요약

```sh
kill -9 `ps -ef | grep 'PROCESS_NAME' | awk '{print $2}'`
```

1. `kill -9` 프로세스 ID로 프로세스 중지하겠다.
   1. `ps -ef` 프로세스 전체출력.
   1. `grep 'PROCESS_NAME'` 프로세스 이름 검색.
   1. `awk '{print $2}'` 위에서 검색된 줄에서 2번째 항목(PDI) 출력.

## 해설

### kill

```sh
kill -9 PROCESS_NUMBER
```

`kill`명령어에 `-9` 옵션을 주면 프로세스 번호로 중지할 수 있다.

### ps

#### 명령어

```sh
ps -ef
```

`ps`명령어에 `-ef` 옵션을 주면 PID를 `-e` 전체조회 한다.

#### 결과

```
UID   PID  PPID   C STIME   TTY           TIME CMD
    0     1     0   0  12:23AM ??         1:08.29 test
```

#### 명령어

```sh
ps aux
```

`ps`명령어에 `aux` 옵션을 주면 CPU, MEM사용률, [프로세스 상태 코드](https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C%EC%BD%94%EB%93%9C) 등 확인 가능.

#### 결과

```
USER               PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
qvil              1   0.0  0.0  4939808  31272   ??  S     00:00AM  77:00.38 test
```

### grep

```sh
grep 'PROCESS_NAME'
```

`grep`을 이용해서 프로세스 이름을 검색한다.

### awk

```sh
awk '{print $2}'`
```

검색된 프로세스의 두번째 필드를 출력한다.(ps -ef, ps aux 둘 다 두번째 필드는 PID)

## 참고

- [제타위키 - 리눅스 ps](https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_ps)
- [제타위키 - 리눅스 프로세스 여러 개 중지](https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%97%AC%EB%9F%AC_%EA%B0%9C_%EC%A4%91%EC%A7%80)
- [제타위키 - 리눅스 awk](https://zetawiki.com/wiki/%EB%A6%AC%EB%88%85%EC%8A%A4_awk)
