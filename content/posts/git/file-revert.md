---
title: "[Git] File Revert"
date: 2023-01-04
tags: [Git]
slug: git/file-revert
---

## 커밋에서 특정 파일들만 Revert 하고 싶을 때

## git checkout 사용

**Revert 하는 commit hash가 아닌 이전으로 돌아가고 싶은 target commit hash를 입력**해야합니다.

### 문법

```bash
git checkout {commit hash} {경로}
```

### 예제

```bash
git checkout 1hu8fh9132fhksajdf09jqwf023i4hf029348 src/components/
```
