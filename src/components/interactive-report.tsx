"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  executiveSummary,
  focusAreas,
  launchOutcomes,
  overallResults,
  projectMeta,
  quickFacts,
  readinessTracks,
  sections,
  sourceLibrary,
  type ReportFilter,
  type ReportSection,
  type ResourceLink,
} from "@/lib/report-data";

const filters: ReportFilter[] = [
  "All",
  "Technical",
  "SEO",
  "Market",
  "Operations",
  "Brand",
  "Data",
];

// Apple system colors mapped to each theme
const themeStyles = {
  All: {
    dot: "bg-[#1d1d1f]",
    badge: "bg-black/6 text-[#1d1d1f]",
    panel: "bg-black/[0.03]",
    accent: "#1d1d1f",
  },
  Technical: {
    dot: "bg-[#0071e3]",
    badge: "bg-blue-50 text-blue-600",
    panel: "bg-blue-50/70",
    accent: "#0071e3",
  },
  SEO: {
    dot: "bg-[#ff9500]",
    badge: "bg-orange-50 text-orange-600",
    panel: "bg-orange-50/70",
    accent: "#ff9500",
  },
  Market: {
    dot: "bg-[#34c759]",
    badge: "bg-green-50 text-green-600",
    panel: "bg-green-50/70",
    accent: "#34c759",
  },
  Operations: {
    dot: "bg-[#8e8e93]",
    badge: "bg-gray-100 text-gray-500",
    panel: "bg-gray-50/70",
    accent: "#8e8e93",
  },
  Brand: {
    dot: "bg-[#ff2d55]",
    badge: "bg-pink-50 text-pink-600",
    panel: "bg-pink-50/70",
    accent: "#ff2d55",
  },
  Data: {
    dot: "bg-[#5ac8fa]",
    badge: "bg-cyan-50 text-cyan-600",
    panel: "bg-cyan-50/70",
    accent: "#5ac8fa",
  },
} satisfies Record<
  ReportFilter,
  { dot: string; badge: string; panel: string; accent: string }
>;

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function ResourcePill({ link }: { link: ResourceLink }) {
  return (
    <a
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-[#1d1d1f] shadow-[0_1px_4px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,113,227,0.14)]"
      href={link.url}
      rel="noreferrer"
      target="_blank"
    >
      {link.label}
      <span className="rounded-full bg-black/[0.06] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
        {link.kind}
      </span>
    </a>
  );
}

function SectionCard({
  section,
  isExpanded,
  onSelect,
}: {
  section: ReportSection;
  isExpanded: boolean;
  onSelect: (id: string) => void;
}) {
  const theme = themeStyles[section.theme];

  return (
    <article
      className={cx(
        "scroll-mt-8 rounded-[22px] bg-white p-7 transition-all duration-300 sm:p-8",
        isExpanded
          ? "shadow-[0_12px_48px_rgba(0,0,0,0.12),0_0_0_0.5px_rgba(0,0,0,0.06)]"
          : "shadow-[0_2px_10px_rgba(0,0,0,0.06),0_0_0_0.5px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.09),0_0_0_0.5px_rgba(0,0,0,0.05)]"
      )}
      id={section.id}
    >
      {/* Card header */}
      <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3.5">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-black/[0.05] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
              {section.order}
            </span>
            <span
              className={cx(
                "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
                theme.badge
              )}
            >
              {section.theme}
            </span>
          </div>

          {/* Title + subtitle */}
          <div className="space-y-2">
            <h2 className="report-display text-[2rem] sm:text-[2.4rem]">
              {section.title}
            </h2>
            <p className="max-w-2xl text-[17px] leading-[1.47] text-[#86868b]">
              {section.headline}
            </p>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[#86868b]">
              {section.summary}
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          className={cx(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
            isExpanded
              ? "bg-[#1d1d1f] text-white"
              : "bg-black/[0.05] text-[#1d1d1f] hover:bg-black/[0.08]"
          )}
          onClick={() => onSelect(section.id)}
          type="button"
        >
          {isExpanded ? "Focused" : "Open details"}
          {!isExpanded && (
            <svg
              className="h-3.5 w-3.5 opacity-50"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid gap-2.5 sm:grid-cols-3">
        {section.metrics.map((metric) => (
          <div
            className={cx(
              "rounded-[14px] px-4 py-4",
              isExpanded ? theme.panel : "bg-[#f5f5f7]"
            )}
            key={metric.label}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
              {metric.label}
            </p>
            <p className="mt-1.5 text-[1.6rem] font-bold leading-none tracking-tight text-[#1d1d1f]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Collapsed document preview */}
      {!isExpanded && (() => {
        const allLinks = section.details.flatMap((d) => d.links ?? []);
        if (allLinks.length === 0) return null;
        return (
          <div className="mt-4 flex flex-wrap gap-2">
            {allLinks.map((link) => (
              <a
                className="inline-flex items-center gap-2 rounded-[10px] border border-[#0071e3]/20 bg-[#0071e3]/[0.05] px-3 py-2 transition-all duration-200 hover:border-[#0071e3]/40 hover:bg-[#0071e3]/[0.09]"
                href={link.url}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <svg className="h-3.5 w-3.5 shrink-0 text-[#0071e3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[12px] font-semibold text-[#0071e3]">{link.label}</span>
                <svg className="h-3 w-3 text-[#0071e3]/50" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
                  <line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        );
      })()}

      {/* Expanded details */}
      {isExpanded && (
        <div className="mt-7 space-y-6 border-t border-black/[0.06] pt-7">
          <div className="grid gap-3.5 xl:grid-cols-2">
            {section.details.map((detail) => (
              <section
                className="rounded-[16px] bg-[#f5f5f7] p-5"
                key={detail.title}
              >
                <h3 className="text-[15px] font-semibold tracking-tight text-[#1d1d1f]">
                  {detail.title}
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                      Objective
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[#1d1d1f]">
                      {detail.objective}
                    </p>
                  </div>

                  {detail.actions && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                        Action Taken
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {detail.actions.map((action) => (
                          <span
                            className="rounded-full bg-white px-3 py-1.5 text-[13px] text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.07)]"
                            key={action}
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {detail.items && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                        {detail.itemsLabel}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {detail.items.map((item) => (
                          <span
                            className="rounded-full bg-white px-3 py-1.5 text-[13px] text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.07)]"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {detail.result && (
                    <div className="rounded-[12px] bg-[#1d1d1f] px-4 py-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                        Result
                      </p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-white/80">
                        {detail.result}
                      </p>
                    </div>
                  )}

                  {detail.impact && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                        Impact
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {detail.impact.map((item) => (
                          <span
                            className="rounded-full bg-white px-3 py-1.5 text-[13px] text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.07)]"
                            key={item}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {detail.links && (
                    <div className="space-y-2 pt-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#86868b]">
                        Documents
                      </p>
                      {detail.links.map((link) => (
                        <a
                          className="flex items-center justify-between gap-3 rounded-[12px] border border-[#0071e3]/20 bg-[#0071e3]/[0.06] px-4 py-3 transition-all duration-200 hover:border-[#0071e3]/40 hover:bg-[#0071e3]/[0.10]"
                          href={link.url}
                          key={link.label}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg className="h-4 w-4 shrink-0 text-[#0071e3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                              <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[13px] font-semibold text-[#0071e3]">{link.label}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="rounded-full bg-[#0071e3]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0071e3]">
                              {link.kind}
                            </span>
                            <svg className="h-3.5 w-3.5 text-[#0071e3]/60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                              <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
                              <line strokeLinecap="round" strokeLinejoin="round" x1="10" x2="21" y1="14" y2="3" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Section impact tags */}
          <div className="flex flex-wrap gap-2">
            {section.sectionImpact.map((item) => (
              <span
                className={cx(
                  "rounded-full px-3 py-1.5 text-[13px] font-medium",
                  theme.badge
                )}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          {section.links && (
            <div className="flex flex-wrap gap-2">
              {section.links.map((link) => (
                <ResourcePill key={link.label} link={link} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export function InteractiveReport() {
  const [activeFilter, setActiveFilter] = useState<ReportFilter>("All");
  const [expandedId, setExpandedId] = useState<string>(sections[0]?.id ?? "");

  const filteredSections = useMemo(() => {
    if (activeFilter === "All") return sections;
    return sections.filter((s) => s.theme === activeFilter);
  }, [activeFilter]);

  const visibleExpandedId = filteredSections.some((s) => s.id === expandedId)
    ? expandedId
    : (filteredSections[0]?.id ?? "");

  const activeSection = filteredSections.find(
    (s) => s.id === visibleExpandedId
  );

  const navigateToSection = (id: string) => {
    setExpandedId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative">
      {/* Top ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,113,227,0.06),transparent)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:gap-10 lg:px-8 lg:py-14">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">

          {/* Left: Main title card */}
          <div className="rounded-[28px] bg-white p-9 shadow-[0_4px_28px_rgba(0,0,0,0.07),0_0_0_0.5px_rgba(0,0,0,0.05)] sm:p-12">
            <Image
              src="/seolab-logo.png"
              alt="SeoLab Logo"
              width={140}
              height={48}
              className="mb-6 object-contain"
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              {projectMeta.subtitle}
            </p>
            <h1 className="report-display mt-5 text-[3.4rem] leading-[1.02] sm:text-[4.2rem] lg:text-[5rem]">
              {projectMeta.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.52] text-[#86868b]">
              {executiveSummary}
            </p>

            {/* Meta pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: "Phase", value: projectMeta.phase },
                { label: "Status", value: projectMeta.status },
                { label: "Priority", value: projectMeta.priority },
                { label: "Responsible", value: projectMeta.responsible },
                { label: "Deadline", value: projectMeta.deadline },
              ].map((item) => (
                <span
                  className="inline-flex items-baseline gap-1.5 rounded-full bg-black/[0.05] px-4 py-1.5 text-[13px]"
                  key={item.label}
                >
                  <span className="font-medium text-[#86868b]">{item.label}</span>
                  <span className="font-semibold text-[#1d1d1f]">{item.value}</span>
                </span>
              ))}
            </div>

            {/* Focus + Outcomes panels */}
            <div className="mt-8 grid gap-3.5 lg:grid-cols-2">
              <div className="rounded-[18px] bg-[#1d1d1f] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Core Focus Areas
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {focusAreas.map((area) => (
                    <span
                      className="rounded-full border border-white/[0.1] bg-white/[0.07] px-3 py-1.5 text-[13px] text-white/80"
                      key={area}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] bg-[#f5f5f7] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
                  Launch Outcomes
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {launchOutcomes.map((outcome) => (
                    <span
                      className="rounded-full bg-white px-3 py-1.5 text-[13px] text-[#1d1d1f] shadow-[0_1px_3px_rgba(0,0,0,0.07)]"
                      key={outcome}
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Readiness card */}
          <div className="rounded-[28px] bg-white p-7 shadow-[0_4px_28px_rgba(0,0,0,0.07),0_0_0_0.5px_rgba(0,0,0,0.05)] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
                  Executive Summary
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#1d1d1f]">
                  {projectMeta.title} now has the minimum launch infrastructure
                  to operate with clearer positioning, cleaner internal controls,
                  and stronger search visibility foundations.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#0071e3] px-3 py-1.5 text-[12px] font-semibold text-white">
                High Priority
              </span>
            </div>

            <div className="mt-7 space-y-5">
              {readinessTracks.map((track) => (
                <div key={track.label}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[14px] font-semibold text-[#1d1d1f]">
                      {track.label}
                    </p>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-[#34c759]">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M10.28 2.28L4.5 8.06 1.72 5.28a1 1 0 00-1.44 1.44l3.5 3.5a1 1 0 001.44 0l6.5-6.5a1 1 0 00-1.44-1.44z" />
                      </svg>
                      Complete
                    </span>
                  </div>
                  <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-black/[0.06]">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#34c759]" />
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#86868b]">
                    {track.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUICK FACTS ──────────────────────────────── */}
        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {quickFacts.map((fact) => {
            const isActive =
              fact.filter === "All"
                ? activeFilter === "All"
                : activeFilter === fact.filter;
            const style = themeStyles[fact.filter];

            return (
              <button
                className={cx(
                  "group rounded-[20px] bg-white p-7 text-left transition-all duration-200 hover:-translate-y-0.5",
                  isActive
                    ? "shadow-[0_8px_28px_rgba(0,0,0,0.11),0_0_0_0.5px_rgba(0,0,0,0.06)]"
                    : "shadow-[0_2px_10px_rgba(0,0,0,0.05),0_0_0_0.5px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.09),0_0_0_0.5px_rgba(0,0,0,0.05)]"
                )}
                key={fact.label}
                onClick={() => setActiveFilter(fact.filter)}
                type="button"
              >
                <span
                  className={cx(
                    "mb-5 block h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-12",
                    style.dot
                  )}
                />
                <p className="text-[2.6rem] font-extrabold leading-none tracking-tight text-[#1d1d1f]">
                  {fact.value}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#86868b]">
                  {fact.label}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#86868b]">
                  {fact.description}
                </p>
              </button>
            );
          })}
        </section>

        {/* ── SIDEBAR + SECTION CARDS ──────────────────── */}
        <section className="grid gap-6 xl:grid-cols-[0.68fr_1.32fr]">

          {/* Sidebar */}
          <aside className="space-y-4 xl:sticky xl:top-8 xl:self-start">
            <div className="rounded-[22px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_0_0_0.5px_rgba(0,0,0,0.05)]">

              {/* Apple segmented-style filter */}
              <div className="flex flex-wrap gap-1.5 rounded-[14px] bg-black/[0.04] p-1.5">
                {filters.map((filter) => (
                  <button
                    className={cx(
                      "rounded-[10px] px-3.5 py-1.5 text-[13px] font-medium transition-all duration-150",
                      activeFilter === filter
                        ? "bg-white text-[#1d1d1f] shadow-[0_1px_4px_rgba(0,0,0,0.1),0_0_0_0.5px_rgba(0,0,0,0.06)]"
                        : "text-[#86868b] hover:text-[#1d1d1f]"
                    )}
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Active section preview */}
              {activeSection && (
                <div className="mt-5 rounded-[14px] bg-[#f5f5f7] p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={cx(
                        "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]",
                        themeStyles[activeSection.theme].badge
                      )}
                    >
                      {activeSection.theme}
                    </span>
                    <span className="text-[10px] font-medium text-[#86868b]">
                      In view
                    </span>
                  </div>
                  <h2 className="report-display mt-3 text-[1.5rem]">
                    {activeSection.title}
                  </h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#86868b]">
                    {activeSection.headline}
                  </p>
                </div>
              )}

              {/* Report map */}
              <div className="mt-5">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">
                  Sections
                </p>
                <div className="mt-2 space-y-1">
                  {filteredSections.map((section) => {
                    const isActive = visibleExpandedId === section.id;
                    return (
                      <button
                        className={cx(
                          "w-full rounded-[12px] px-4 py-3.5 text-left transition-all duration-200",
                          isActive
                            ? "bg-[#1d1d1f] text-white"
                            : "text-[#1d1d1f] hover:bg-black/[0.04]"
                        )}
                        key={section.id}
                        onClick={() => navigateToSection(section.id)}
                        type="button"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={cx(
                              "text-[10px] font-semibold uppercase tracking-[0.12em]",
                              isActive ? "text-white/40" : "text-[#86868b]"
                            )}
                          >
                            {section.order}
                          </span>
                          <span
                            className={cx(
                              "text-[10px] font-medium uppercase tracking-[0.12em]",
                              isActive ? "text-white/40" : "text-[#86868b]"
                            )}
                          >
                            {section.theme}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[13px] font-semibold leading-snug tracking-tight">
                          {section.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Source library */}
            <div className="rounded-[22px] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_0_0_0.5px_rgba(0,0,0,0.05)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">
                Source Library
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {sourceLibrary.map((link) => (
                  <ResourcePill key={link.label} link={link} />
                ))}
              </div>
            </div>
          </aside>

          {/* Section cards stack */}
          <div className="space-y-4">
            {filteredSections.map((section) => (
              <SectionCard
                isExpanded={visibleExpandedId === section.id}
                key={section.id}
                onSelect={navigateToSection}
                section={section}
              />
            ))}
          </div>
        </section>

        {/* ── FOOTER RESULTS ───────────────────────────── */}
        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Overall results */}
          <div className="rounded-[28px] bg-white p-9 shadow-[0_4px_28px_rgba(0,0,0,0.07),0_0_0_0.5px_rgba(0,0,0,0.05)] sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#86868b]">
              Overall Results
            </p>
            <h2 className="report-display mt-4 text-[2.6rem] sm:text-[3.2rem]">
              Foundations built for scalable growth
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.52] text-[#86868b]">
              The delivered work now connects brand, content, SEO, technical
              structure, and operations into one launch-ready operating layer.
            </p>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {overallResults.map((result) => (
                <div className="rounded-[14px] bg-[#f5f5f7] p-4" key={result}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0071e3]">
                    ✓ Verified
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#1d1d1f]">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why it matters — dark card */}
          <div className="rounded-[28px] bg-[#1d1d1f] p-9 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Why It Matters
            </p>
            <h2 className="report-display mt-4 text-[2.6rem] text-white sm:text-[3.2rem]">
              Organic growth has a stronger starting point
            </h2>
            <p className="mt-5 text-[17px] leading-[1.52] text-white/55">
              The implementation phase did more than deliver tasks. It intended to reduced launch risk by connecting market demand, brand positioning, information structure, and internal governance before scale.
            </p>

            <div className="mt-8 space-y-2.5">
              {[
                "Search visibility will be supported by demand-led architecture and authority groundwork.",
                "Brand, editorial, and educational inputs are aligned before heavy content production begins.",
                "Operational and documentation systems reduce friction as more stakeholders join execution.",
                "Data controls improve confidence in future analytics and performance reporting.",
              ].map((item) => (
                <div
                  className="rounded-[14px] border border-white/[0.06] bg-white/[0.04] px-4 py-3.5"
                  key={item}
                >
                  <p className="text-[14px] leading-relaxed text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
