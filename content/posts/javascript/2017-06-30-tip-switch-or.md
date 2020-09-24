---
title: "[Javascript] Tip - Switch문에서 OR연산"
date: 2017-06-30
tags: [javascript, tip, switch, or]
comments: true
share: true
slug: tip-switch-or
---

## 예제

```js
switch (key) {
  // Work
  case value:
  case value2:
    break;
  case value3:
  case value4:
    return;
  // Not Work
  case value5 || value6:
    return;
  default:
    break;
}
```

- switch문은 `break` 혹은 `return`을 해야 빠져 나온다.
- **안빠져나오고 case를 붙여쓰면 OR 연산 됨.**
