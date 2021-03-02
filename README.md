# Qvil Blog

## Error

- banner를 svg로 하면 안되고 png는 됨.
- 아래 이슈가 아니라 그냥 새 글 작성 시 리스트에도 없고 slug로 접근해도 안나오는 이슈가 있다. date를 예전으로 변경, title 변경 등 여러가지 작업을 해봤지만 Gatsby문제인지 계속 에러 발생.

  ```
  "gatsby-plugin-mdx" threw an error while running the onCreateNode lifecycle:

  unknown: Expected corresponding JSX closing tag for <Type> (9:27)
  ```

  - <Type> 이런식으로 쓴 text가 JSX로 인식되어 닫는 태그가 없어서 에러가 생기고 에러가 생기니까 글이 보이지 않는 현상. '`<Type>`' 이런식으로 `으로('은 또 안됨) 묶어서 해결

- 글 title 첫 글자가 특수문자인 경우(내 경우 `[`가 문제였음) 에러남 (예: title: [Typescript])
  - title을 ""으로 묶어주면 됨. (예: title: "[Typescript]")

## To Do

- [x] AdSense

## Prerequisites

- Node.js >= 12.x (Recommended the latest version)
- Gatsby - [Install the Gatsby CLI
  ](https://www.gatsbyjs.com/docs/quick-start/#install-the-gatsby-cli)
- (Yarn(Recommended))

## Install

```sh
npm install -g gatsby-cli

yarn
# or
npm install
```

## Development

```sh
gatsby develop
```

## Deploy

```sh
yarn deploy
```

## Reference

- https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog
