# 금융 마케터 포트폴리오 — 김지수

> Next.js 16 + TypeScript + Tailwind CSS 로 제작한 단일 페이지 포트폴리오 사이트

---

## 소개

금융 마케터 **김지수**의 포트폴리오 웹사이트입니다.
DB 없이 정적으로 구성된 한 페이지 사이트이며, 경력·역량·프로젝트 성과를 담고 있습니다.

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js 16 (App Router, Turbopack) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| 데이터베이스 | 없음 (정적 데이터) |
| 배포 | Vercel 권장 |

---

## 페이지 구성

- **Hero** — 핵심 소개 문구 및 주요 통계
- **About** — 프로필, 학력, 자격증
- **Skills** — 금융·디지털 마케팅 역량 및 툴 스택
- **Experience** — 신한투자증권 / KB국민카드 / 미래에셋 경력
- **Projects** — ETF 캠페인, PB 브랜드 런칭, 연금 CRM 성과 사례
- **Contact** — 연락처 및 메시지 폼

---

## 로컬 실행 방법

### 사전 준비

Node.js 18 이상이 필요합니다.
설치되어 있지 않다면 [nodejs.org](https://nodejs.org) 에서 LTS 버전을 설치하세요.

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 커스터마이징

[app/page.tsx](app/page.tsx) 상단의 데이터 섹션을 수정하면 됩니다.

```
// 개인 정보, 경력, 프로젝트 등 모든 콘텐츠가 여기에 있습니다
const EXPERIENCES = [ ... ]
const PROJECTS = [ ... ]
const SKILLS = [ ... ]
```

---

## 배포 (Vercel)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub에 푸시 후 [vercel.com](https://vercel.com) 에서 레포지토리를 연결하면 자동 배포됩니다.

---

## 프로젝트 구조

```
portfolio-by-nakknock2/
├── app/
│   ├── globals.css      # 전역 스타일 (Tailwind)
│   ├── layout.tsx       # 루트 레이아웃 (메타데이터 포함)
│   └── page.tsx         # 메인 페이지 (전체 콘텐츠)
├── public/              # 정적 파일 (이미지 등)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
