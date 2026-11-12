"use client";

import { useState } from "react";
import {
  ABOUT_PILLARS,
  EXPERIENCES,
  MUSIC_TASTE_ITEMS,
  MY_LINKS,
  SITE_INFO,
  type ExperienceCategory,
  type ExperienceItem,
  type ExperienceStatus,
} from "@/data/siteData";
import {
  AbstractCardGraphic,
  SignalsAndGroovesVisual,
} from "@/components/AbstractCardGraphic";

const CATEGORIES: Array<"All" | ExperienceCategory> = [
  "All",
  "Semiconductor",
  "Hardware & Embedded",
  "Coursework & Labs",
  "Community",
];

function getStatusBadgeStyle(status: ExperienceStatus) {
  switch (status) {
    case "Completed":
      return {
        wrapper:
          "border-cyan-500/35 bg-cyan-500/10 text-cyan-300",
        dot: "bg-cyan-400",
      };
    case "In Progress":
      return {
        wrapper:
          "border-amber-500/40 bg-amber-500/10 text-amber-300",
        dot: "bg-amber-400 animate-pulse",
      };
    case "Scope Adjusted":
      return {
        wrapper:
          "border-teal-500/35 bg-teal-500/10 text-teal-300",
        dot: "bg-teal-400",
      };
  }
}

function ExperienceCard({
  item,
  isCompact,
  onSelectModal,
  onExpandAll,
}: {
  item: ExperienceItem;
  isCompact?: boolean;
  onSelectModal: (item: ExperienceItem) => void;
  onExpandAll?: () => void;
}) {
  const statusStyle = getStatusBadgeStyle(item.status);

  if (isCompact) {
    return (
      <div className="
        group relative flex flex-col justify-between rounded-2xl border
        border-slate-800/90 bg-[#0b1426]/75 p-5 transition-all duration-200
        hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-[#0e1a30]
      ">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="
                rounded-md bg-slate-800/90 px-2 py-0.5 font-mono text-xs
                font-semibold text-cyan-400
              ">
                #{String(item.cardNumber).padStart(2, "0")}
              </span>
              <span className="
                rounded-md border border-slate-700/80 bg-slate-900/70 px-2.5
                py-0.5 text-xs font-medium text-slate-300
              ">
                {item.kindLabel}
              </span>
              <span className="font-mono text-xs text-slate-400">
                {item.period}
              </span>
            </div>
            <span
              className={`
                inline-flex items-center gap-1.5 rounded-full border px-2.5
                py-0.5 text-xs font-medium
                ${statusStyle.wrapper}
              `}
            >
              <span className={`
                h-1.5 w-1.5 rounded-full
                ${statusStyle.dot}
              `} />
              {item.statusLabel}
            </span>
          </div>

          <h3 className="
            mt-3 text-lg font-bold text-white transition-colors
            group-hover:text-cyan-300
          ">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-slate-300">{item.summary}</p>

          <div className="
            mt-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2
            text-xs text-slate-300
          ">
            <span className="font-semibold text-cyan-400">담당 역할: </span>
            {item.role}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.keywords.map((kw) => (
              <span
                key={kw}
                className="
                  rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5
                  font-mono text-[11px] text-slate-300
                "
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="
          mt-4 flex items-center justify-between border-t border-slate-800/80
          pt-3
        ">
          <button
            type="button"
            onClick={() => onSelectModal(item)}
            className="
              inline-flex items-center gap-1.5 text-xs font-semibold
              text-cyan-400 transition-colors
              hover:text-cyan-300
            "
          >
            상세 내용 및 수행 범위 보기 →
          </button>
          {onExpandAll && (
            <button
              type="button"
              onClick={onExpandAll}
              className="
                text-[11px] text-slate-400 underline decoration-slate-700
                underline-offset-4
                hover:text-slate-200
              "
            >
              전체 카드 크게 보기
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <article className="
      group relative flex flex-col justify-between rounded-2xl border
      border-slate-800/90 bg-gradient-to-b from-[#0d182e]/95 to-[#081020]/95 p-6
      shadow-lg shadow-black/25 transition-all duration-200
      hover:-translate-y-1 hover:border-cyan-500/45
      hover:shadow-cyan-500/10
    ">
      <div>
        {/* 추상 기술 그래픽 헤더 */}
        <AbstractCardGraphic type={item.graphic} cardNumber={item.cardNumber} />

        {/* 메타 배지: 분류, 수행 시기, 완료/진행 상태 */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="
              rounded-md border border-cyan-500/25 bg-cyan-950/50 px-2.5 py-0.5
              text-xs font-semibold text-cyan-300
            ">
              {item.kindLabel}
            </span>
            <span className="
              rounded-md border border-slate-700/80 bg-slate-900/80 px-2 py-0.5
              font-mono text-xs text-slate-300
            ">
              {item.category}
            </span>
            <span className="font-mono text-xs text-slate-400">
              {item.period}
            </span>
          </div>

          <span
            className={`
              inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5
              text-xs font-semibold
              ${statusStyle.wrapper}
            `}
          >
            <span className={`
              h-1.5 w-1.5 rounded-full
              ${statusStyle.dot}
            `} />
            {item.statusLabel}
          </span>
        </div>

        {/* 제목 및 영문 부제 */}
        <h3 className="
          mt-3.5 text-xl font-bold tracking-tight text-white transition-colors
          group-hover:text-cyan-300
        ">
          {item.title}
        </h3>
        <p className="mt-0.5 font-mono text-xs text-slate-400">
          {item.subtitle}
        </p>

        {/* 짧은 프로젝트 설명 */}
        <p className="mt-3 text-sm leading-relaxed text-slate-200">
          {item.summary}
        </p>

        {/* 실제 본인 역할 */}
        <div className="
          mt-4 rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5
        ">
          <div className="
            text-[11px] font-bold uppercase tracking-wider text-cyan-400
          ">
            My Role · 실제 본인 역할
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
            {item.role}
          </p>
        </div>

        {/* 수행 범위 및 정직성 노트 */}
        <div className="
          mt-3 rounded-xl border border-slate-800/90 bg-slate-950/65 px-3.5
          py-2.5
        ">
          <div className="
            flex items-center gap-1.5 text-[11px] font-semibold text-teal-400
          ">
            <span>Scope &amp; Authenticity · 수행 범위 안내</span>
          </div>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
            {item.scopeNote}
          </p>
        </div>
      </div>

      {/* 하단 핵심 기술 키워드 & 상세 보기 버튼 */}
      <div className="mt-5 border-t border-slate-800/80 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {item.keywords.map((keyword) => (
            <span
              key={keyword}
              className="
                rounded-md border border-slate-700/80 bg-slate-900/90 px-2.5
                py-1 font-mono text-xs text-cyan-200/90
              "
            >
              {keyword}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelectModal(item)}
          className="
            mt-4 flex w-full items-center justify-between rounded-xl border
            border-slate-800 bg-slate-900/80 px-4 py-2.5 text-xs font-semibold
            text-slate-200 transition-colors
            hover:border-cyan-500/40 hover:bg-cyan-950/40 hover:text-cyan-300
          "
        >
          <span>상세 수행 내역 보기 (Card #{item.cardNumber})</span>
          <span className="
            transition-transform duration-200
            group-hover:translate-x-1
          ">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

export default function PortfolioView() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ExperienceCategory
  >("All");
  const [modalItem, setModalItem] = useState<ExperienceItem | null>(null);

  const semiconductorCards = EXPERIENCES.filter(
    (e) => e.section === "semiconductor"
  );
  const featuredProjectCards = EXPERIENCES.filter(
    (e) => e.section === "featured-projects"
  );
  const archiveProjectCards = EXPERIENCES.filter(
    (e) => e.section === "project-archive"
  );
  const foundationCards = EXPERIENCES.filter(
    (e) => e.section === "engineering-foundations"
  );
  const beyondCards = EXPERIENCES.filter(
    (e) => e.section === "beyond-engineering"
  );

  const filteredExperiences =
    selectedCategory === "All"
      ? EXPERIENCES
      : EXPERIENCES.filter((item) => item.category === selectedCategory);

  const displayedExplorerCards = showAllExperiences
    ? filteredExperiences
    : filteredExperiences.filter((item) => item.isRepresentative);

  const handleViewAllClick = () => {
    setShowAllExperiences(true);
    const explorerEl = document.getElementById("experience-explorer");
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="
      min-h-screen bg-[#060b16] text-slate-100
      selection:bg-cyan-500 selection:text-slate-950
    ">
      {/* 배경 회로 & 동심원 그라데이션 장식 */}
      <div
        className="
          pointer-events-none fixed inset-0 z-0
          bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(20,184,166,0.08),_transparent_50%)]
        "
        aria-hidden="true"
      />

      {/* 상단 고정 내비게이션 */}
      <header className="
        sticky top-0 z-40 border-b border-slate-800/80 bg-[#060b16]/85
        backdrop-blur-md
      ">
        <div className="
          mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5
          sm:px-6
        ">
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="
              flex h-9 w-9 items-center justify-center rounded-xl border
              border-cyan-500/40 bg-gradient-to-br from-cyan-500/20
              to-teal-500/10 font-mono text-sm font-bold text-cyan-300
              shadow-xs transition-transform
              group-hover:scale-105
            ">
              YM
            </div>
            <div>
              <span className="
                block font-mono text-sm font-bold tracking-widest text-white
              ">
                {SITE_INFO.siteName}
              </span>
              <span className="block font-mono text-[10px] text-cyan-400">
                {SITE_INFO.concept}
              </span>
            </div>
          </a>

          <nav
            aria-label="주요 섹션 이동"
            className="hidden items-center gap-5 text-xs font-medium text-slate-300 lg:flex"
          >
            <a href="#about" className="transition-colors hover:text-cyan-300">
              02. About
            </a>
            <a
              href="#semiconductor"
              className="transition-colors hover:text-cyan-300"
            >
              03. Semiconductor
            </a>
            <a
              href="#featured-projects"
              className="transition-colors hover:text-cyan-300"
            >
              04. Featured
            </a>
            <a
              href="#project-archive"
              className="transition-colors hover:text-cyan-300"
            >
              05. Archive
            </a>
            <a
              href="#engineering-foundations"
              className="transition-colors hover:text-cyan-300"
            >
              06. Foundations
            </a>
            <a
              href="#beyond-engineering"
              className="transition-colors hover:text-cyan-300"
            >
              07. Beyond
            </a>
            <a
              href="#my-links"
              className="font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
            >
              08. My Links
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowAllExperiences((prev) => !prev)}
              className={`
                rounded-full border px-3.5 py-1.5 text-xs font-semibold
                transition-all
                ${
                  showAllExperiences
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                    : "border-slate-700 bg-slate-900/90 text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300"
                }
              `}
            >
              {showAllExperiences
                ? "✓ Showing All 16 Cards"
                : "View All Experiences (16)"}
            </button>
            <a
              href={SITE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r
                from-cyan-500 to-teal-500 px-3.5 py-1.5 text-xs font-bold
                text-slate-950 shadow-sm transition-transform
                hover:-translate-y-0.5 hover:from-cyan-400 hover:to-teal-400
              "
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* =================================================================
            1. HERO SECTION
        ================================================================= */}
        <section
          id="hero"
          className="
            grid grid-cols-1 items-center gap-10 pt-10 pb-16
            lg:grid-cols-12 lg:py-20
          "
        >
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="
                inline-flex items-center gap-2 rounded-full border
                border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs
                font-semibold text-cyan-300
              ">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                {SITE_INFO.concept}
              </span>
              <span className="
                rounded-full border border-teal-500/30 bg-teal-950/40 px-3
                py-1 text-xs font-medium text-teal-300
              ">
                Primary Interest · 반도체 공정기술
              </span>
            </div>

            <p className="
              mt-5 font-mono text-sm font-semibold uppercase tracking-widest
              text-cyan-400
            ">
              {SITE_INFO.slogan}
            </p>

            <h1 className="
              mt-2 text-3xl font-extrabold tracking-tight text-white
              sm:text-5xl lg:leading-[1.15]
            ">
              {SITE_INFO.nameKo}{" "}
              <span className="font-light text-slate-400">
                / {SITE_INFO.nameEn}
              </span>
            </h1>

            <p className="mt-2 text-base font-medium text-cyan-200/90 sm:text-lg">
              {SITE_INFO.affiliation}{" "}
              <span className="text-sm text-slate-400">
                ({SITE_INFO.affiliationEn})
              </span>
            </p>

            <p className="
              mt-5 max-w-2xl text-sm leading-relaxed text-slate-300
              sm:text-base
            ">
              {SITE_INFO.heroDescription}
            </p>

            {/* 관심사 및 취향 요약 태그 */}
            <div className="mt-6 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="
                  font-mono text-xs font-bold uppercase text-cyan-400
                ">
                  Signals:
                </span>
                <span className="
                  rounded-lg border border-cyan-400/50 bg-cyan-500/15 px-2.5
                  py-1 text-xs font-bold text-cyan-200
                ">
                  ★ 반도체 공정기술 (주 관심 분야)
                </span>
                {SITE_INFO.secondaryInterests.map((interest) => (
                  <span
                    key={interest}
                    className="
                      rounded-lg border border-slate-700/90 bg-slate-900/80
                      px-2.5 py-1 text-xs text-slate-200
                    "
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="
                  font-mono text-xs font-bold uppercase text-teal-400
                ">
                  Grooves:
                </span>
                {SITE_INFO.personalTastes.map((taste) => (
                  <span
                    key={taste}
                    className="
                      rounded-lg border border-teal-500/25 bg-teal-950/30 px-2.5
                      py-1 text-xs text-teal-200
                    "
                  >
                    {taste}
                  </span>
                ))}
              </div>
            </div>

            {/* 메인 CTA 링크 버튼 */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SITE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 rounded-xl bg-gradient-to-r
                  from-cyan-500 to-teal-500 px-5 py-3 text-sm font-bold
                  text-slate-950 shadow-lg shadow-cyan-500/20 transition-all
                  hover:-translate-y-0.5 hover:from-cyan-400 hover:to-teal-400
                "
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub ({SITE_INFO.githubHandle})</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#my-links"
                className="
                  inline-flex items-center gap-2 rounded-xl border
                  border-cyan-500/40 bg-cyan-950/40 px-5 py-3 text-sm
                  font-semibold text-cyan-200 transition-all
                  hover:-translate-y-0.5 hover:border-cyan-400
                  hover:bg-cyan-950/70
                "
              >
                <span>My Links 모음 바로가기</span>
                <span aria-hidden="true">↓</span>
              </a>

              <button
                type="button"
                onClick={handleViewAllClick}
                className="
                  inline-flex items-center gap-2 rounded-xl border
                  border-slate-700 bg-slate-900/90 px-5 py-3 text-sm
                  font-semibold text-slate-200 transition-all
                  hover:-translate-y-0.5 hover:border-cyan-500/40
                  hover:text-cyan-300
                "
              >
                <span>View All Experiences (16)</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <SignalsAndGroovesVisual />
          </div>
        </section>

        {/* =================================================================
            2. ABOUT SECTION
        ================================================================= */}
        <section id="about" className="scroll-mt-20 py-14">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-6
            sm:flex-row sm:items-end
          ">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                02 · ABOUT YOUNGMIN
              </span>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                전공 및 관심 분야 · From Circuits to Curiosity
              </h2>
            </div>
            <p className="font-mono text-xs text-slate-400">
              한양대학교 융합전자공학부 3학년 · 김영민
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ABOUT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`
                  flex flex-col justify-between rounded-2xl border p-6
                  transition-all duration-200
                  ${
                    idx === 0
                      ? "border-cyan-500/45 bg-gradient-to-b from-cyan-950/35 via-[#0b1528] to-[#081020] shadow-lg shadow-cyan-500/5"
                      : "border-slate-800/90 bg-[#0b1324]/90"
                  }
                `}
              >
                <div>
                  <span
                    className={`
                      inline-block rounded-md px-2.5 py-1 font-mono text-[11px]
                      font-bold
                      ${
                        idx === 0
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-slate-800/90 text-teal-300"
                      }
                    `}
                  >
                    {pillar.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  {pillar.items.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            EXPERIENCE EXPLORER BAR (Category Filter & View All 16 Toggle)
        ================================================================= */}
        <section
          id="experience-explorer"
          className="
            my-8 scroll-mt-20 rounded-2xl border border-cyan-500/30
            bg-gradient-to-r from-[#0b162c] via-[#0d1b35] to-[#0a1428] p-5
            shadow-xl
            sm:p-6
          "
        >
          <div className="
            flex flex-col justify-between gap-4
            lg:flex-row lg:items-center
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                  EXPERIENCE ARCHIVE EXPLORER
                </span>
                <span className="
                  rounded-full bg-cyan-500/15 px-2.5 py-0.5 font-mono text-xs
                  font-semibold text-cyan-300
                ">
                  Total 16 Cards
                </span>
              </div>
              <h2 className="mt-1 text-lg font-bold text-white sm:text-xl">
                범주별 탐색 및 전체 16개 경험 카드 제어
              </h2>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                기본 화면은 대표 경험(9개)을 강조하며,{" "}
                <strong className="text-cyan-300">
                  &lsquo;View All Experiences&rsquo;
                </strong>{" "}
                버튼을 누르면 총 16개 카드를 모두 상세 카드 형태로 확인할 수
                있습니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowAllExperiences((prev) => !prev)}
                className={`
                  inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm
                  font-bold shadow-md transition-all
                  ${
                    showAllExperiences
                      ? "border border-cyan-300 bg-cyan-400 text-slate-950"
                      : "bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:from-cyan-400 hover:to-teal-400"
                  }
                `}
              >
                <span>
                  {showAllExperiences
                    ? "대표 경험만 강조해서 보기 (Featured Mode)"
                    : "View All Experiences (16개 전체 보기)"}
                </span>
              </button>
            </div>
          </div>

          {/* 범주 필터 탭 */}
          <div className="
            mt-5 flex flex-wrap items-center gap-2 border-t
            border-slate-800/80 pt-4
          ">
            <span className="mr-1 font-mono text-xs text-slate-400">
              Category Filter:
            </span>
            {CATEGORIES.map((category) => {
              const count =
                category === "All"
                  ? EXPERIENCES.length
                  : EXPERIENCES.filter((e) => e.category === category).length;
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category !== "All") {
                      setShowAllExperiences(true);
                    }
                  }}
                  className={`
                    rounded-lg border px-3 py-1.5 text-xs font-semibold
                    transition-all
                    ${
                      active
                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                        : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300"
                    }
                  `}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* 특정 범주 필터 선택 시 또는 View All 활성화 시 한눈에 보는 그리드 요약 */}
          {(selectedCategory !== "All" || showAllExperiences) && (
            <div className="mt-6 border-t border-slate-800/90 pt-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-cyan-300">
                  Filter Result: {selectedCategory} ({displayedExplorerCards.length}{" "}
                  / 16 Cards)
                </span>
                {selectedCategory !== "All" && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                    className="text-xs text-slate-400 underline hover:text-white"
                  >
                    필터 초기화 (All 16)
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {displayedExplorerCards.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => setModalItem(card)}
                    className="
                      flex flex-col justify-between rounded-xl border
                      border-slate-800 bg-slate-950/80 p-3.5 text-left
                      transition-all
                      hover:border-cyan-500/50 hover:bg-slate-900
                    "
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-mono font-bold text-cyan-400">
                          Card #{card.cardNumber}
                        </span>
                        <span className="text-slate-400">{card.period}</span>
                      </div>
                      <div className="mt-1 font-semibold text-white text-sm">
                        {card.title}
                      </div>
                      <div className="mt-1 text-[11px] text-slate-400">
                        {card.category} · {card.kindLabel}
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px]">
                      <span
                        className={
                          card.status === "In Progress"
                            ? "text-amber-300"
                            : "text-cyan-300"
                        }
                      >
                        {card.statusLabel}
                      </span>
                      <span className="text-slate-400">상세 →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* =================================================================
            3. SEMICONDUCTOR & PROCESS SECTION (Cards 7, 9, 12, 13, 14, 15)
        ================================================================= */}
        <section id="semiconductor" className="scroll-mt-20 py-12">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-5
            sm:flex-row sm:items-end
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  03 · SEMICONDUCTOR &amp; PROCESS
                </span>
                <span className="
                  rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5
                  py-0.5 text-[11px] font-semibold text-cyan-300
                ">
                  주 관심 분야 · 6 Cards
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                반도체 공정·소자 학습, 장비 실습 및 수율·결함 데이터 분석
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                집적회로소자 이론부터 포토리소그래피·AFM 계측 실습, 교육용 공정
                데이터 수율·결함 분석까지의 반도체 역량 기록입니다.
              </p>
            </div>
            {!showAllExperiences && (
              <button
                type="button"
                onClick={() => setShowAllExperiences(true)}
                className="
                  shrink-0 rounded-xl border border-cyan-500/35 bg-cyan-950/30
                  px-3.5 py-2 text-xs font-semibold text-cyan-300
                  hover:bg-cyan-950/60
                "
              >
                6개 카드 모두 상세 모드로 펼치기
              </button>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {semiconductorCards.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isCompact={!showAllExperiences && !item.isRepresentative}
                onSelectModal={setModalItem}
                onExpandAll={() => setShowAllExperiences(true)}
              />
            ))}
          </div>
        </section>

        {/* =================================================================
            4. FEATURED PROJECTS SECTION (Cards 3, 8, 10, 16)
        ================================================================= */}
        <section id="featured-projects" className="scroll-mt-20 py-12">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-5
            sm:flex-row sm:items-end
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  04 · FEATURED PROJECTS
                </span>
                <span className="
                  rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5
                  py-0.5 text-[11px] font-semibold text-teal-300
                ">
                  대표 제작 프로젝트 · 4 Cards
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                임베디드·하드웨어·엣지 AI 대표 제작 프로젝트
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                STM32, ESP32-S3, Raspberry Pi 4를 활용해 센서 계측, 하드웨어
                배선, 제어 소프트웨어, 실기 검증을 수행한 대표 프로젝트입니다.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjectCards.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isCompact={false}
                onSelectModal={setModalItem}
              />
            ))}
          </div>
        </section>

        {/* =================================================================
            5. PROJECT ARCHIVE SECTION (Cards 1, 2, 4)
        ================================================================= */}
        <section id="project-archive" className="scroll-mt-20 py-12">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-5
            sm:flex-row sm:items-end
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  05 · PROJECT ARCHIVE
                </span>
                <span className="
                  rounded-full border border-slate-700 bg-slate-800/80 px-2.5
                  py-0.5 text-[11px] font-semibold text-slate-300
                ">
                  3 Cards
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                하드웨어 설계·센서 데이터 분석·컴퓨터구조 프로젝트 아카이브
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                PCB 설계 및 납땜, 6축 자세 센서 임계값 산출, 5단 파이프라인
                RV32I 프로세서 검증 프로젝트입니다.
              </p>
            </div>
            {!showAllExperiences && (
              <button
                type="button"
                onClick={() => setShowAllExperiences(true)}
                className="
                  shrink-0 rounded-xl border border-cyan-500/35 bg-cyan-950/30
                  px-3.5 py-2 text-xs font-semibold text-cyan-300
                  hover:bg-cyan-950/60
                "
              >
                View All Experiences로 전체 그래픽 카드 펼치기
              </button>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {archiveProjectCards.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isCompact={!showAllExperiences}
                onSelectModal={setModalItem}
                onExpandAll={() => setShowAllExperiences(true)}
              />
            ))}
          </div>
        </section>

        {/* =================================================================
            6. ENGINEERING FOUNDATIONS SECTION (Cards 5, 6)
        ================================================================= */}
        <section id="engineering-foundations" className="scroll-mt-20 py-12">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-5
            sm:flex-row sm:items-end
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  06 · ENGINEERING FOUNDATIONS
                </span>
                <span className="
                  rounded-full border border-slate-700 bg-slate-800/80 px-2.5
                  py-0.5 text-[11px] font-semibold text-slate-300
                ">
                  2 Cards
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                전자회로 계측·디버깅 및 디지털 논리회로 하드웨어 실습
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                계측 장비를 활용한 아날로그 신호 측정·문제 해결과 TTL IC 디지털
                논리회로 실배선 검증 기반입니다.
              </p>
            </div>
            {!showAllExperiences && (
              <button
                type="button"
                onClick={() => setShowAllExperiences(true)}
                className="
                  shrink-0 rounded-xl border border-cyan-500/35 bg-cyan-950/30
                  px-3.5 py-2 text-xs font-semibold text-cyan-300
                  hover:bg-cyan-950/60
                "
              >
                전체 상세 카드로 전환
              </button>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {foundationCards.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isCompact={!showAllExperiences}
                onSelectModal={setModalItem}
                onExpandAll={() => setShowAllExperiences(true)}
              />
            ))}
          </div>
        </section>

        {/* =================================================================
            7. BEYOND ENGINEERING SECTION (Music & Grooves + Card 11)
        ================================================================= */}
        <section id="beyond-engineering" className="scroll-mt-20 py-12">
          <div className="
            flex flex-col justify-between gap-4 border-b border-slate-800/80
            pb-5
            sm:flex-row sm:items-end
          ">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">
                  07 · BEYOND ENGINEERING · GROOVES &amp; COMMUNITY
                </span>
              </div>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                음악(LP·밴드·DJing), 방탈출, 그리고 동아리 운영
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                공학 너머의 호기심을 채우는 아날로그 LP 수집과 밴드·전자음악
                활동, 그리고 연합동아리 운영 경험입니다.
              </p>
            </div>
          </div>

          {/* 음악 섹션 (LP 수집/턴테이블, 밴드 보컬·드럼, HOOKS 전자음악·DJing) */}
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="
                h-2 w-2 rounded-full bg-teal-400
              " />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-teal-300">
                Music &amp; Analog Grooves
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {MUSIC_TASTE_ITEMS.map((music) => (
                <div
                  key={music.id}
                  className="
                    flex flex-col justify-between rounded-2xl border
                    border-teal-500/25 bg-gradient-to-b from-[#0b192c]/90
                    to-[#081120]/90 p-6 shadow-md transition-all
                    hover:-translate-y-1 hover:border-teal-400/50
                  "
                >
                  <div>
                    {/* 동심원 바이닐/사운드 아이콘 */}
                    <div className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      border border-teal-500/30 bg-teal-500/10 text-teal-300
                    ">
                      {music.iconType === "vinyl" && (
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
                          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        </svg>
                      )}
                      {music.iconType === "band" && (
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M9 18V5l12-2v13" />
                          <circle cx="6" cy="18" r="3" />
                          <circle cx="18" cy="16" r="3" />
                        </svg>
                      )}
                      {music.iconType === "dj" && (
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M2 12h3l3-7 4 14 4-10 3 3h3" />
                        </svg>
                      )}
                    </div>

                    <h4 className="mt-4 text-lg font-bold text-white">
                      {music.title}
                    </h4>
                    <p className="font-mono text-xs text-teal-400/90">
                      {music.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {music.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-3.5">
                    {music.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-md border border-teal-500/20 bg-teal-950/40
                          px-2 py-0.5 font-mono text-[11px] text-teal-200
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 동아리 활동 카드 (Card 11 — NewRun 방탈출 연합동아리) */}
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-cyan-300">
                Community &amp; Club Leadership (Card #11)
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {beyondCards.map((item) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  isCompact={false}
                  onSelectModal={setModalItem}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            8. MY LINKS SECTION (MyLink Assignment Hub)
        ================================================================= */}
        <section id="my-links" className="scroll-mt-20 py-14">
          <div className="
            rounded-3xl border border-cyan-500/35 bg-gradient-to-b
            from-[#0c1830] via-[#091326] to-[#060c18] p-6 shadow-2xl
            sm:p-10
          ">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="
                  inline-flex items-center gap-1.5 rounded-full border
                  border-cyan-400/40 bg-cyan-500/15 px-3 py-1 font-mono text-xs
                  font-bold text-cyan-300
                ">
                  08 · MY LINKS HUB
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  My Links — 외부 채널 및 섹션 바로가기
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  확인된 공식 외부 링크(GitHub)와 사이트 내부 핵심 섹션으로 즉시
                  이동할 수 있는 마이링크 허브입니다.
                </p>
              </div>
              <div className="
                rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-2
                font-mono text-xs text-slate-400
              ">
                Verified External: GitHub (@RhythmlsLife)
              </div>
            </div>

            {/* 외부 링크 (GitHub) 강조 카드 */}
            <div className="mt-8">
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                External Link · 공식 외부 프로필 (새 탭 열림)
              </h3>
              {MY_LINKS.filter((l) => l.isExternal).map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex flex-col justify-between gap-4 rounded-2xl
                    border-2 border-cyan-500/50 bg-gradient-to-r
                    from-cyan-950/60 via-[#0d1d38] to-teal-950/40 p-5
                    shadow-lg shadow-cyan-500/10 transition-all duration-200
                    hover:-translate-y-1 hover:border-cyan-400
                    hover:shadow-cyan-500/20
                    sm:flex-row sm:items-center
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="
                      flex h-14 w-14 shrink-0 items-center justify-center
                      rounded-2xl bg-cyan-400 text-slate-950 shadow-md
                      transition-transform duration-200
                      group-hover:scale-105
                    ">
                      <svg
                        className="h-7 w-7 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg font-bold text-white group-hover:text-cyan-300">
                          {link.title}
                        </span>
                        <span className="
                          rounded-full bg-cyan-400/20 px-2.5 py-0.5 font-mono
                          text-xs font-semibold text-cyan-300
                        ">
                          {link.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-300">
                        {link.subtitle}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-cyan-400">
                        {link.url}
                      </p>
                    </div>
                  </div>

                  <div className="
                    inline-flex items-center gap-2 self-end rounded-xl
                    bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950
                    transition-transform
                    group-hover:translate-x-1
                    sm:self-center
                  ">
                    <span>GitHub 방문하기</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </a>
              ))}
            </div>

            {/* 사이트 내부 섹션 퀵 링크 버튼 */}
            <div className="mt-8">
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
                Section Quick Links · 포트폴리오 섹션 빠른 이동
              </h3>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {MY_LINKS.filter((l) => !l.isExternal).map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className="
                      group flex flex-col justify-between rounded-2xl border
                      border-slate-800 bg-slate-900/75 p-4 transition-all
                      duration-200
                      hover:-translate-y-1 hover:border-cyan-500/45
                      hover:bg-slate-900
                    "
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="
                          rounded-md bg-slate-800 px-2 py-0.5 font-mono
                          text-[11px] font-semibold text-cyan-300
                        ">
                          {link.badge}
                        </span>
                        <span className="
                          text-slate-400 transition-transform
                          group-hover:translate-x-1 group-hover:text-cyan-300
                        ">
                          →
                        </span>
                      </div>
                      <h4 className="mt-2.5 text-base font-bold text-white group-hover:text-cyan-300">
                        {link.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {link.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-slate-800/80 bg-[#040811] py-10">
        <div className="
          mx-auto flex max-w-6xl flex-col items-center justify-between gap-4
          px-4 text-center text-xs text-slate-400
          sm:flex-row sm:px-6 sm:text-left
        ">
          <div>
            <p className="font-mono font-bold text-slate-200">
              {SITE_INFO.siteName} — {SITE_INFO.concept} ({SITE_INFO.slogan})
            </p>
            <p className="mt-1">
              {SITE_INFO.nameKo} ({SITE_INFO.nameEn}) · {SITE_INFO.affiliation}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={SITE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-cyan-400 hover:underline"
            >
              GitHub {SITE_INFO.githubHandle} ↗
            </a>
            <span>·</span>
            <a href="#hero" className="hover:text-white">
              맨 위로 ↑
            </a>
          </div>
        </div>
      </footer>

      {/* =================================================================
          카드 상세 모달 (Card Detail Modal)
      ================================================================= */}
      {modalItem && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4
            backdrop-blur-xs
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-card-title"
          onClick={() => setModalItem(null)}
        >
          <div
            className="
              relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl
              border border-cyan-500/40 bg-[#0a1324] p-6 text-slate-100
              shadow-2xl
              sm:p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="
                    rounded-md bg-cyan-500/20 px-2.5 py-0.5 font-mono text-xs
                    font-bold text-cyan-300
                  ">
                    Card #{String(modalItem.cardNumber).padStart(2, "0")}
                  </span>
                  <span className="
                    rounded-md border border-slate-700 bg-slate-900 px-2.5
                    py-0.5 text-xs text-slate-300
                  ">
                    {modalItem.category} · {modalItem.kindLabel}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {modalItem.period}
                  </span>
                </div>
                <h3
                  id="modal-card-title"
                  className="mt-3 text-2xl font-bold text-white"
                >
                  {modalItem.title}
                </h3>
                <p className="font-mono text-xs text-cyan-400">
                  {modalItem.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="
                  rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5
                  text-xs font-semibold text-slate-300
                  hover:border-cyan-400 hover:text-white
                "
              >
                닫기 ✕
              </button>
            </div>

            <div className="mt-5">
              <AbstractCardGraphic
                type={modalItem.graphic}
                cardNumber={modalItem.cardNumber}
              />
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-cyan-400">
                  Summary · 프로젝트/실습 요약
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-200">
                  {modalItem.summary}
                </p>
              </div>

              <div className="
                rounded-2xl border border-cyan-500/25 bg-cyan-950/25 p-4
              ">
                <h4 className="font-mono text-xs font-bold uppercase text-cyan-300">
                  My Role · 실제 본인 역할
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-100">
                  {modalItem.role}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-cyan-400">
                  Key Activities · 상세 내용
                </h4>
                <ul className="mt-2 space-y-2">
                  {modalItem.highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="
                rounded-2xl border border-teal-500/30 bg-teal-950/20 p-4
              ">
                <h4 className="font-mono text-xs font-bold uppercase text-teal-300">
                  Scope &amp; Authenticity Note · 수행 범위 및 참고사항
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {modalItem.scopeNote}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-slate-400">
                  Keywords · 핵심 기술 키워드
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {modalItem.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="
                        rounded-md border border-slate-700 bg-slate-900 px-2.5
                        py-1 font-mono text-xs text-cyan-200
                      "
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
