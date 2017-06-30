---
layout: post
title: "[Docker] MongoDB 사용 방법(공식 Mongo)"
modified: 2017-06-30
categories: "docker"
tags: [docker, mongo, mongodb]
image:
  feature: #/images/image.jpg
  credit: #WeGraphics
  creditlink: 
comments: true
share: true
---

## 구글 혹은 [Docker Hub][Docker Hub]에서 `mongo`검색

### [Docker Hub][Docker Hub] 접속
![docker-hub-mongo-detail](/images/docker-hub.png)

### `mongo` 검색
![docker-hub-mongo-detail](/images/docker-hub-mongo.png)

Official을 사용합시다.(밑에 mongo-express도 보이네요.)

![docker-hub-mongo-detail](/images/docker-hub-mongo-detail.png)

`docker pull mongo`명령어는 docker container가 없으면 다운받는 명령어 인데, 바로 `run` 명령어를 사용하면 container가 없으면 자동으로 다운받고 실행합니다. (전 사용하지 않습니다.)

![docker-hub-mongo-detail2](/images/docker-hub-mongo-detail2.png)

아래로 스크롤 해보시면 문서에 친절하게 사용방법이 나와 있습니다.

`docker run --name some-mongo -d mongo`라고 되어있고 아래 설명에 기본으로 27017(mongoDB port)를 expose한다고 되어 있는데 저는 local docker에 접속이 안되는 이슈가 있어서 아래명령어로 해결했습니다.

```sh
docker run --name mongo -p 27017:27017 -d mongo
```

위 명령어를 사용하면 백그라운드로 `mongod`가 실행됩니다. 

## Docker Container 실행 및 확인
이전 단계까지 실행했으면 아래와 같이 Docker Container 실행상태를 확인해보세요.

```sh
docker ps -a
```

![docker-ps-a](/images/docker-ps-a.png)

`docker ps -a`를 실행하면 실행되지 않는 docker container까지 모두 볼 수 있습니다.

```sh
docker ps
```

![docker-ps](/images/docker-ps.png)

`docker ps`를 사용하면 현재 docker container 실행 상태를 볼 수 있습니다.

## Docker Container 접속
아래 명령어로 mongo 컨테이너에 접속하세요.

```sh
docker exec -it mongo /bin/bash
```

### 결과
![docker-mongo-shell](/images/docker-mongo-shell.png)

- `ps -ef|grep mongo`로 프로세스를 찾아보면 `mongod`가 실행되고 있습니다.
- `mongo`로 접속해서 `db` 명령어를 사용하면 `test` 데이터(mongoDB 기본)가 보입니다.


## 참고
**옵션**
- `--name` : image 이름
- `-p`, `--publish` : port {내부포트}:{외부포트} (tcp/udp 적지 않으면 기본은 tcp)
- `-d`, `--detach` : `detach`의 약자로 백그라운드로 컨테이너를 실행
- `-v`, `--volume` :  볼륨 바인드.
- `-i`, `--interactive` : 입력이 된다. (상호작용)
- `-t`, `--tty` : 로그 볼 때 사용(tty 사용)

출처 : [Docker docs](https://docs.docker.com/engine/reference/commandline/run/#description)

[Docker Hub]: https://hub.docker.com