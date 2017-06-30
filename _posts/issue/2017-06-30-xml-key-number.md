---
layout: post
title: "[Issue] xml key 숫자로 시작하면 에러"
modified: 2017-06-30
categories: "issue"
tags: [issue, xml, key, number]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 증상
1. Frontend에서 Ajax콜을 window내장함수 XMLHttpRequest로 호출.
1. Backend cgi에서 텍스트파일 파싱해서 xml트리로 return.
1. 크롬 개발자모드에서 Network탭에 XML Response가 정상적으로 옴.
1. <span style="color: red;font-weight: bold">그러나 자바스크립트 정상동작 안함.</span>

## 원인
XML의 Key는 숫자로 시작하면 안된다.

### 예제

**Error**
```xml
<xml>
    <123key>Data<123key>
</xml>
```

**OK**
```xml
<xml>
    <key123>Data<key123>
</xml>
```

## 디버깅 방법
브라우저 URL로 Backend 직접 호출하면 적절한 에러가 출력되어 디버깅 가능할 수도 있음. **크롬 개발자모드에서 Response만 보지 말라는 얘기**

### 예제
```
http://localhost/cgi/getValue
```