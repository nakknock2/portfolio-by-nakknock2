"use client";

import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "소개", href: "#about" },
  { label: "역량", href: "#skills" },
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락처", href: "#contact" },
];

const SKILLS = [
  {
    category: "금융 마케팅",
    icon: "📊",
    items: ["자산관리 상품 마케팅", "투자상품 캠페인 기획", "리테일 뱅킹 마케팅", "보험·연금 상품 홍보"],
  },
  {
    category: "디지털 마케팅",
    icon: "💻",
    items: ["퍼포먼스 마케팅(META·Google)", "콘텐츠 마케팅 전략", "SEO / SEM 최적화", "이메일·CRM 마케팅"],
  },
  {
    category: "데이터 & 분석",
    icon: "🔍",
    items: ["GA4 / Amplitude 분석", "고객 세그멘테이션", "A/B 테스트 설계", "ROI · ROAS 최적화"],
  },
  {
    category: "전략 & 기획",
    icon: "🎯",
    items: ["브랜드 포지셔닝 전략", "GTM 전략 수립", "고객 여정 설계(CJM)", "규제 준수 마케팅(금융당국)"],
  },
];

const EXPERIENCES = [
  {
    company: "신한투자증권",
    role: "디지털 마케팅 매니저",
    period: "2022.03 — 현재",
    desc: [
      "MZ세대 대상 모바일 트레이딩 앱 리브랜딩 캠페인 총괄, MAU 32% 성장",
      "퍼포먼스 마케팅 예산 최적화를 통해 CPA 28% 절감",
      "금융상품 콘텐츠 마케팅 전략 수립으로 자연검색 유입 2.4배 증가",
      "ESG 투자 콘텐츠 시리즈 제작, 브랜드 호감도 15%p 상승",
    ],
  },
  {
    company: "KB국민카드",
    role: "마케팅 기획 담당",
    period: "2019.07 — 2022.02",
    desc: [
      "LIIV 앱 기반 혜택 마케팅 캠페인 기획·운영, 신규 가입 41% 증가",
      "데이터 기반 카드 추천 CRM 캠페인 설계, 발급 전환율 19% 개선",
      "20·30대 라이프스타일 타겟 광고 소재 개발 및 미디어 믹스 최적화",
    ],
  },
  {
    company: "미래에셋자산운용",
    role: "마케팅 인턴",
    period: "2018.07 — 2019.06",
    desc: [
      "ETF 상품 SNS 마케팅 콘텐츠 제작 및 채널 운영",
      "투자 인사이트 뉴스레터 구독자 5,000명 → 18,000명으로 성장 기여",
    ],
  },
];

const PROJECTS = [
  {
    title: "ETF 입문자 온보딩 캠페인",
    tag: "퍼포먼스 마케팅",
    color: "from-amber-500/20 to-yellow-600/10",
    border: "border-amber-500/30",
    badge: "bg-amber-500/20 text-amber-300",
    result: "신규 계좌 개설 +67%",
    desc: "투자 입문자 타겟 멀티채널 캠페인. META·YouTube·카카오 채널을 연동하여 투자 여정을 단계적으로 설계했습니다.",
    metrics: [
      { label: "CTR 향상", value: "+42%" },
      { label: "CPA 절감", value: "-31%" },
      { label: "전환율", value: "8.7%" },
    ],
  },
  {
    title: "프리미엄 PB 서비스 브랜드 런칭",
    tag: "브랜드 마케팅",
    color: "from-blue-500/20 to-indigo-600/10",
    border: "border-blue-500/30",
    badge: "bg-blue-500/20 text-blue-300",
    result: "자산 AUM +1,200억",
    desc: "고자산 고객(HNWI) 타겟 프라이빗 뱅킹 서비스 신규 론칭. 브랜드 가이드라인 개발부터 통합 마케팅 커뮤니케이션 설계까지 전담했습니다.",
    metrics: [
      { label: "브랜드 인지도", value: "+28%p" },
      { label: "리드 전환", value: "12.3%" },
      { label: "고객 유지율", value: "94%" },
    ],
  },
  {
    title: "개인연금 리텐션 CRM 전략",
    tag: "CRM · 데이터",
    color: "from-emerald-500/20 to-teal-600/10",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/20 text-emerald-300",
    result: "해지율 -23%p",
    desc: "연금저축 가입자 세그멘테이션 분석을 기반으로 라이프사이클 맞춤형 CRM 메시지 전략을 수립하고 자동화 플로우를 구축했습니다.",
    metrics: [
      { label: "이메일 오픈율", value: "+55%" },
      { label: "추가 납입 전환", value: "+38%" },
      { label: "고객 만족도", value: "4.7 / 5" },
    ],
  },
];

const CERTIFICATIONS = [
  { name: "증권투자권유대행인", issuer: "한국금융투자협회", year: "2019" },
  { name: "AFPK (금융재무설계사)", issuer: "FPSB Korea", year: "2021" },
  { name: "Google Analytics 인증", issuer: "Google", year: "2023" },
  { name: "Meta Blueprint 자격증", issuer: "Meta", year: "2022" },
];

/* ──────────────────────────────────────────────
   COMPONENTS
────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-amber-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-amber-400 font-bold text-xl tracking-wider">
          KJS<span className="text-white">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
        >
          연락하기
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-amber-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-amber-500/10 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 font-medium block transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-5 inline-flex bg-amber-500 text-[#0a1628] font-semibold text-sm px-5 py-2.5 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            연락하기
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          금융 마케터 포트폴리오
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-white">숫자로 증명하는</span>
          <br />
          <span className="text-gradient">금융 마케팅</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          7년간 증권·카드·자산운용사에서 데이터 기반 마케팅으로
          <br className="hidden md:block" />
          실질적인 비즈니스 성과를 만들어온 <strong className="text-slate-200 font-semibold">김지수</strong>입니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="border border-amber-500/40 hover:border-amber-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-amber-500/10"
          >
            이력서 요청
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "7+", label: "Years of Experience" },
            { value: "30+", label: "Campaigns Led" },
            { value: "3개사", label: "금융사 경력" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="section-title">금융과 마케팅의 교차점에서</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          {/* Left: Profile card */}
          <div className="relative">
            <div className="card-glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-center gap-5 mb-8">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-[#0a1628] flex-shrink-0">
                  김
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">김지수</h3>
                  <p className="text-amber-400 text-sm font-medium">Senior Digital Marketing Manager</p>
                  <p className="text-slate-500 text-sm mt-0.5">신한투자증권</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🏫", label: "학력", value: "연세대학교 경영학과 졸업" },
                  { icon: "📍", label: "위치", value: "서울특별시 영등포구" },
                  { icon: "💼", label: "경력", value: "7년 (2019–현재)" },
                  { icon: "📧", label: "이메일", value: "jisu.kim@example.com" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-lg w-8 flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-500 text-sm w-14">{item.label}</span>
                    <span className="text-slate-300 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Certs */}
              <div className="mt-8 pt-6 border-t border-amber-500/10">
                <p className="text-slate-500 text-xs mb-3 uppercase tracking-widest">자격증</p>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((c) => (
                    <span
                      key={c.name}
                      className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              금융 상품은 단순한 소비재가 아닙니다. 고객의 미래와 신뢰를 다루는 영역입니다.
              저는 복잡한 금융 개념을 고객이 공감할 수 있는 언어로 풀어내고,
              데이터로 캠페인의 방향을 설정하는 마케터입니다.
            </p>
            <p className="text-slate-400 leading-relaxed">
              증권사, 카드사, 자산운용사를 거치며 다양한 금융 상품군과 고객 세그먼트를 경험했습니다.
              퍼포먼스 마케팅부터 브랜드 전략까지, 가설을 세우고 실험하고 측정하며 성장시키는 과정을
              반복해왔습니다.
            </p>
            <p className="text-slate-400 leading-relaxed">
              특히 금융 규제 환경 속에서 창의적이고 효과적인 마케팅을 구현하는 데 강점이 있으며,
              개인·기관 투자자 모두를 대상으로 한 통합 마케팅 커뮤니케이션(IMC) 전략 수립 경험을 보유하고 있습니다.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                성과 사례 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="section-title">전문 역량</h2>
        <p className="section-sub">금융 도메인 지식과 마케팅 실행력의 결합</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="card-glass rounded-2xl p-6 group hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-white font-bold mb-4 text-sm">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-amber-500 mt-1 flex-shrink-0">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tool stack */}
        <div className="mt-12 card-glass rounded-2xl p-8">
          <h3 className="text-slate-400 text-xs uppercase tracking-widest mb-6">주요 활용 툴 & 플랫폼</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Google Analytics 4", "Meta Ads", "Google Ads", "Amplitude", "Mixpanel",
              "Braze (CRM)", "HubSpot", "Figma", "Tableau", "Excel / Power BI",
              "카카오 비즈니스", "네이버 광고", "Notion", "Jira",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-[#1e3a5f]/60 border border-[#1e3a5f] text-slate-300 text-sm px-4 py-1.5 rounded-full hover:border-amber-500/30 hover:text-amber-300 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 section-divider">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="section-title">경력 사항</h2>

        <div className="mt-12 space-y-4">
          {EXPERIENCES.map((exp, idx) => (
            <details key={idx} className="card-glass rounded-2xl group open:border-amber-500/30 transition-all duration-300" open={idx === 0}>
              <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none select-none">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg flex-shrink-0">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.company}</h3>
                    <p className="text-amber-400 text-sm font-medium">{exp.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 text-sm hidden sm:block">{exp.period}</span>
                  <svg
                    className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>

              <div className="px-8 pb-6 border-t border-amber-500/10">
                <p className="text-slate-500 text-sm sm:hidden mt-4 mb-3">{exp.period}</p>
                <ul className="mt-4 space-y-3">
                  {exp.desc.map((d, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                      <span className="text-amber-500 mt-1.5 text-xs flex-shrink-0">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="section-title">주요 프로젝트 & 성과</h2>
        <p className="section-sub">캠페인 기획부터 데이터 분석까지, 결과로 말합니다</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className={`relative rounded-2xl border ${proj.border} bg-gradient-to-br ${proj.color} p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${proj.badge}`}>
                  {proj.tag}
                </span>
                <span className="text-white text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
                  {proj.result}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg leading-snug">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{proj.desc}</p>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {proj.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-white font-bold text-base">{m.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 section-divider">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="section-title">함께 이야기해요</h2>
        <p className="section-sub">마케팅 협업, 이직 제안, 네트워킹 모두 환영합니다</p>

        <div className="grid md:grid-cols-5 gap-10 mt-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            {[
              { icon: "📧", label: "이메일", value: "jisu.kim@example.com", href: "mailto:jisu.kim@example.com" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/jisukim", href: "#" },
              { icon: "📱", label: "전화", value: "010-0000-0000", href: "tel:01000000000" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="card-glass rounded-xl p-5 flex items-center gap-4 hover:border-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 block"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-slate-500 text-xs">{c.label}</p>
                  <p className="text-slate-200 text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="card-glass rounded-xl p-5">
              <p className="text-slate-500 text-xs mb-3">응답 가능 시간</p>
              <p className="text-slate-300 text-sm">평일 9:00 – 18:00</p>
              <p className="text-slate-500 text-xs mt-1">보통 24시간 내 답변드립니다</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 card-glass rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <div className="text-5xl">✉️</div>
                <h3 className="text-white text-xl font-bold">메시지가 전송되었습니다</h3>
                <p className="text-slate-400 text-sm">빠른 시일 내에 답변드리겠습니다.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-4 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                >
                  새 메시지 보내기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-2">이름</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="홍길동"
                      className="w-full bg-[#0a1628]/80 border border-[#1e3a5f] focus:border-amber-500/50 rounded-xl px-4 py-3 text-slate-200 text-sm outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs uppercase tracking-widest block mb-2">이메일</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full bg-[#0a1628]/80 border border-[#1e3a5f] focus:border-amber-500/50 rounded-xl px-4 py-3 text-slate-200 text-sm outline-none transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-xs uppercase tracking-widest block mb-2">메시지</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="협업 제안, 채용 제안, 혹은 자유롭게 연락 주세요."
                    rows={5}
                    className="w-full bg-[#0a1628]/80 border border-[#1e3a5f] focus:border-amber-500/50 rounded-xl px-4 py-3 text-slate-200 text-sm outline-none transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  메시지 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-amber-500/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-amber-400 font-bold text-lg">
          KJS<span className="text-white">.</span>
        </div>
        <p className="text-slate-600 text-sm">© 2025 김지수. 무단 복제 금지.</p>
        <div className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-amber-400 text-xs transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* Shared typography helpers */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      <span className="w-4 h-px bg-amber-500" />
      {children}
      <span className="w-4 h-px bg-amber-500" />
    </div>
  );
}

/* ──────────────────────────────────────────────
   PAGE
────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
