---
title: "[2019 카카오 If] FE(Front-end) Meetup"
date: 2019-09-16 12:54:11 +0900
categories: "conference"
tags: [conference, kakao]

comments: true
share: true
---

> **카카오 FE Meetup에 오고싶었지만 못온 사람들을 위해서 문서를 작성했는데 관계자분들이 공유되지않기를 원하신다면 연락(<a href="mailto:email@qvil.dev">Email</a>, 댓글 등)주세요. 글 내리겠습니다.**

# 1. AI Lap FE 어니스트님 발표

- 카카오톡 #탭에서 통합검색하는 부분을 담당하심
- MSA로 되어있어서 장애를 모르게 한다고 했음.
  - 통합검색을 했을 떄 뉴스, 통합 웹, 이미지 등 MSA가 장애나면 해당 부분만 노출 안하는 형식이라고 함.
- 기술 스택: Docker, Git flow, Jira, Github, ESLint, Sonar Lint, Jest, 코드리뷰, Merge 가이드 문서, Jenkins, Slack, 카카오톡(아래 사진 참고)

![/images/kakao-tech-stack.jpeg](/images/kakao-tech-stack.jpeg)

- Q: MSA환경이라면 여러개의 백엔드 서버에 여러번 API호출을 할 것 같아서 다중 API호출을 어떻게 했냐고 물어봄.
- A: 서버에서 데이터를 말아서 줍니다.

> 지금회사에서도 MSA를 위해서 RESTful하게 API를 설계하고 화면을 구현하다가 다중 API요청이 많아져서 고생하고 화면 단위로 API를 다시 만들었듯이 MSA를 설계하면서 어떤 경험을 하셨는지 궁금해서 물어봤음.("generator쓰는지(saga) async/await으로 처리하는지 graphql고려해봤는지 플랫폼팀은 node서버에서 처리한다던데" 라는 식으로 물어봄) 답변을 보면 API를 모아서 다시 뿌려주는 창구역할을 하는 API서버가 존재하는것으로 추측됨.
>
> > 카카오와 비슷한 큰규모의 회사에서 일했던 동료가 마치 당연하다는 듯이 API 여러개는 서버에서 처리해서 준다고 말했다.
> >
> > > 답변이 심플했던 이유가 너무 당연하다고 생각해서인것 같기도 하다.

## 업무

- 프론트엔드 가이드
- 공통 JS(Polyfill도 CoreJS 기반으로 IE8대응 때문에 웹팩 안쓰고 gulp, browserify 사용해서 직접 만든다고 함)
- 퍼포먼스 최적화
  - MSA라서 viewport에 들어오면 lazy-load하는 방식
  - WebP지원하면 jpg보다 30%효율이 높다고 함.
  - 사내망에서는 minify안하고 source-map 사용하고 외부망은 사용 안함.
  - Zenga UI Component(Custom Storybook)을 사용한다고 함.(아래 사진 참고)

![/images/kakao-zenga.jpeg](/images/kakao-zenga.jpeg)

## 개발문화

- 자율근무
- 데일리 미팅(자리에서)
- 2주단위 스프린트회고
- 제주 한달살기(아래 사진 참고)

![/images/kakao-culture.jpeg](/images/kakao-culture.jpeg)

# 플랫폼 FE Paul 이준호님 발표

- 컨벤션 100프로 lint안맞으면 커밋안됨
- 테스트 커버리지 100%
- E2e, 셀레니움, 나이트왓치, 중요시나리오테스트
- 모든 개발 지식 문서화
  - 디렉토리구조까지 전부 영화예매 기능 하나에 40개 문서
- 보일러플레이트

- Q1: State를 모두 중앙관리..? 컴포넌트가 데이터에 종속적이게되는데?
- A1: 컴포넌트는 데이터 종속 안되게짬
- Q2: State 캐싱전략은?
- A2: Api단은 항상 최신화라서 필요없고 서버만 캐싱
- Q3: Api많은데 어떻게 처리?
- A3: Node가 한방에 다 처리

> 컨벤션 및 테스트 커버리지 100%에 자부심이 보였음. 문서화도 열심히 한다고 했음.
>
> 질문을 많이 했는데 더 많이 하고 싶었는데 시간 관계상 못함. (거의 한시간 지연됨. 그래도 최대한 물어본 내용을 아래에 적음.)

1. 컴포넌트 질문은 발표자가 컴포넌트의 데이터만 넣으면 뷰가 그려지게 만든다고 했는데 이게 React의 Container개념을 얘기한건가 궁금해서 데이터 종속 얘기를 했는데 컴포넌트는 그렇게 안짠다고함. (내가 이해를 잘못한 것 같음)
1. 현재회사에서 항상 고려하는 캐싱전략은 서비스에따라 고려하지 않을수도 있다고 생각하게 됨. 실시간 데이터는 당연히 캐싱하지 않고 서버에서만 캐싱 고려한다고 했는데 서버개발자가 없어서 그 얘기는 못물어봄.
1. API여러번 호출하는 것을 플랫폼팀에서는 Node에서 처리한다고 함. Node에서 필요한 데이터를 가공해서 내려주는 방식인듯
   1. 개인적으로 API여러번 호출 해결이 너무 궁금해서 다 물어봤는데 GraphQL고려한 얘기도 없었고 전적으로 서버에만 맡긴다는 느낌이 들었다. '이게 당연한걸까?' 라는 생각을 했다. 현재회사 프로젝트에서 REST방식으로 설계된 API를 열번 이상 부를 때 문제점을 느꼈고 해결 방법은 다양할 것이므로 카카오는 어떻게 해결했는지 궁금했는데 깊게 못물어봐서 아쉬웠음.

![/images/kakao-fe-platform.jpeg](/images/kakao-fe-platform.jpeg)

# 카카오페이 ben 이영빈님 발표

- 조직 1년 안돼서 하고 싶은 것 마음껏
- 많은 서비스 챌린징
- Bundle사이즈 줄이려고 필요한 시점에 lazy load
  - [Lazy suspense](https://reactjs.org/docs/code-splitting.html#reactlazy)
- Page routing code spliting
- IntersenctionOpserver로 image lazy load
- 빨라야한다.
  - Skeleton loading => [ifi.gg](http://ifi.gg/)에서 쓴 [svg loading](http://danilowoz.com/create-content-loader/)과 비슷한 컨셉인듯
- Enum으로 ajax status hoc
- [Lottie](https://airbnb.design/lottie/)로 애니메이션 Adobe AfterEffect json으로 컨버팅 후 web용 [bodymovin](https://github.com/airbnb/lottie-web)으로 재생 native web동일하게 가능
- Typescript d.ts 자체적으로 만들어서 사용 (11시 세션 리액트 연사는 type이 없는 라이브러리는 유명하지않은 라이브러리라서 안쓰거나 - any처리한다고 했는데 이 팀은 type을 직접만든다고해서 신기했음.)
- Sentry로 didcatch시 error알려줌.
- 백업을 위해 무조건 2인 개발

- Q: 구성원에비해 서비스가 많은데 유지보수를 위해서 기술스택은 통일하지않고 뷰나 리액트섞는 이유? 힘든점 없는지?
- A: 그래서 리액트로 기우는 중 디자인이나 기획 중에 스터디하면서 배움

> 조직이 얼마 안돼서 하고 싶은 것을 마음껏 한다고 했음. 그래서 기술스택이 다양함(React + Context, Redux, Mobx. Vue 등)
> 많은 서비스를 소수의 인원으로 해내고 있었음. (프론트개발자가 7명에 서비스 8개)

![/images/kakao-dev-env1.jpeg](/images/kakao-dev-env1.jpeg)
![/images/kakao-dev-env2.jpeg](/images/kakao-dev-env2.jpeg)

# Q&A

- Typescript짱 - 카카오 공통의견
- 공동체(카카오 계열사를 공동체라고 부름) FE 커뮤니케이션은?
  - 그닥 안함. 이런 행사에서 교류함.
- 카카오페이 redux, mobx비교
  - 코드 너무 많아서 mobx로 가는 중(이렇게 메모해왔는데 기억에 한가지인가 두가지빼고 모두 Redux썼었음 잘 기억안남)
  - 그러나 발표자 Ben님은 데이터 흐름이 명확히 보이는 Redux를 선호한다고함.
- 카카오에서 fe개발자 업무 범위
  - Ai lab : docker환경은 백엔드가 해주고 번들링 cdn배포까지는 함. 마크업은 제주도에 다른조직(화상회의 시스템 잘되어있다고함.)
  - 카카오페이 : 제플린, 마크업, 프론트세팅, api호출, 핀타스틱이라는 배포용 서버에 html이랑 cdn에 나머지올리는것까지
  - Fe플랫폼 : 사용자가 만나는 app은 다 함.
- 지라 이슈 관리
  - Ai lab: 애자일 칸반보드, 업무요청은 아지트, 지라 백로그, 스프린트미팅으로 todo
  - 페이: 위와 비슷, QA는 프로젝트 따로 마련
  - 플랫폼: 티켓마다 현실적인 일정 노력, 가시성이 보인다.
- 기획자없이 능동적 개발자가 트렌드인데 카카오는?
  - 개발자 파워쎔
  - 충분히 대화해서 정함
- 기술 정하는 기준? 기술 잘 모르는 개발자 있으면?
  - 카카오는 한가지 기술셋으로 안감. 서비스와 제품 기준.
  - 개발자 교류가 많아서 모르는 기술도 동료가 공유해줌. 새로운 기술 잘 도입됨.
