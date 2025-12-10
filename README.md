# Beyondi - 포트폴리오

## 개요

**개발** 관련  **포트폴리오**

---

## 기술 스택

- `NextJs`, `TypeScript`, `Tailwind CSS`, `Oracl Cloud Plaform`, `Postgres`, `Docker Compose`, `Git Action`
1
---

## 주요 기능

- `Tailwind CSS` 기반 반응형 UI
- `Dark` 모드 지원
- `Notion` 랜더러 지원

---

## 구현 결과

- [사이트 바로가기](http://beyondi.n-e.kr/)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## 트러블 슈팅)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary>OG Image 생성 in Next.js</summary>)

[//]: # ()
[//]: # (- 문제: 게시글의 섬네일 이미지 400 Error 발생)

[//]: # (- 원인: **next.config.js**에 이미지의 주소 누락)

[//]: # (- 해결: 이미지 주소 추가)

[//]: # ()
[//]: # (</details>)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary>remark-GFM inTable issue</summary>)

[//]: # ()
[//]: # (- 문제: remark-gfm **inTable** issue로 빌드 실패)

[//]: # (- 원인: Contentlayer와의 호환성)

[//]: # (- 해결: 3버전으로 다운그레이드.)

[//]: # (</details>)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary>package dependency 충돌</summary>)

[//]: # ()
[//]: # (- 문제: Next.js와 Contentlayer 간의 package dependency 충돌)

[//]: # (- 원인: Contentlayer issue)

[//]: # (- 해결: Astro로 프레임워크 migration.)

[//]: # (</details>)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary>Dark 모드 구현</summary>)

[//]: # ()
[//]: # (- 문제: migration 하는 과정에서, next-themes 사용 불가)

[//]: # (- 원인: Next.js 프레임워크용 패키지)

[//]: # (- 해결: 라이브러리를 사용하지 않고 js로 직접 구현)

[//]: # (</details>)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary>프로젝트 배포 실패</summary>)

[//]: # ()
[//]: # (- 문제: 프레임워크 변경 후, Vercel에서 배포 실패)

[//]: # (- 원인: 기존 Next.js로 배포했을 때 캐싱된 데이터 존재)

[//]: # (- 해결: 캐시를 제거하고 다시 배포)

[//]: # (</details>)

[//]: # ()
[//]: # (---)

## 참고 자료

- [NextJS 공식 문서](https://nextjs.org/docs)

[//]: # (- [ContentLayer 공식 문서]&#40;https://www.contentlayer.dev&#41;)

[//]: # (- [Astro 공식 문서]&#40;https://astro.build&#41;)