---
title: "[리눅스] tar, gz 압축 및 해제"
excerpt: ""
created: 2017-05-16 13:39:23 +0900
date: 2017-05-16 13:39:23 +0900
categories: "linux"
tags: [linux, tar, gz]

comments: true
share: true
slug: linux/linux-tar-gz
---

- Table of Contents
  {:toc}

## tar

### 압축(Compress)

```
tar -cvf {file.tar} {target_path}
```

### 압축 해제(Extract)

```
tar -xvf {file.tar} {target_path}
```

## gz

### 압축(Compress)

```
tar -zcvf {file.tar.gz} {target_path}
```

### 압축 해제(Extract)

```
tar -zxvf {file.tar.gz} {target_path}
```

## Options

- c : tar 압축
- x : tar 압축 해제
- v : 진행과정 출력
- z : gzip 압축 & 압축 해제
- C : 경로 지정
- f : 파일 이름 지정
- p : 파일 권한 저장
