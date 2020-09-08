---
title: "[Docker] Error response from daemon:"
date: 2018-04-16
tags: [docker]
comments: true
share: true
---

<!-- TOC -->autoauto- [1. Error response from daemon:](#1-error-response-from-daemon)auto  - [1.1. Error Message](#11-error-message)auto  - [1.2. Cause](#12-cause)auto  - [1.3. Solution](#13-solution)auto  - [1.4. Reference](#14-reference)autoauto<!-- /TOC -->

# 1. Error response from daemon:

## 1.1. Error Message

![docker_dns_error](/images/docker_dns_error.png)

## 1.2. Cause

서버에 request 가 cancel 되고 timeout 되어서 일어난 현상.

## 1.3. Solution

Settings - Network 에서 DNS 를 8.8.8.8 로 바꾸고 실행해보세요.

![docker_settings](/images/docker_settings.png)

![docker_settings_dns](/images/docker_settings_dns.png)

## 1.4. Reference

- https://github.com/moby/moby/issues/32270
