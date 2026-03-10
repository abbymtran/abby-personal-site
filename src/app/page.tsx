"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ============================
   Data
   ============================ */

const expertise = [
  "Safety At Scale",
  "AI Product Development",
  "LLM Safety Systems",
  "Teen & Child Safety",
  "Parental Controls",
  "Compliance & Policy",
  "Responsible Growth",
];

const flagshipWork = [
  {
    tags: ["AI Product", "Safety Infrastructure", "0\u21921"],
    title: "LLM Integration & AI Safety",
    image: "/images/MyAI.PNG",
    body: "When Snap brought a large language model into a social product used predominantly by teens, the question wasn\u2019t just how to ship it \u2014 it was how to ship it responsibly. That meant building the safety architecture in parallel with the product itself: defining what the model should and shouldn\u2019t do, establishing guardrail frameworks, and designing for failure modes that had no industry precedent at this scale or demographic. The hardest decisions weren\u2019t technical. They were about where to draw lines in a product that lives inside a messaging app \u2014 where context collapses, where users are young, and where trust is built or broken in a single interaction.",
    pullquote:
      "Every consumer AI product is navigating this same tension. The companies that get it right will be the ones that treat safety architecture as a product discipline, not an afterthought.",
    role: "Product lead across LLM integration and safety systems",
  },
  {
    tags: ["Teen Safety", "Product Strategy", "Multi-year Platform"],
    title: "Parental Controls & Family Center",
    image: "/images/FamilyCenter.PNG",
    body: "Family Center is Snap\u2019s answer to a genuinely hard product problem: how do you give parents meaningful oversight of their teen\u2019s experience without breaking the trust that makes the app worth using in the first place? The wrong version of this product is surveillance. The right version is a tool that opens conversations. Building it required making deliberate decisions about visibility \u2014 what parents can see (friend lists, screen time, location), what they can control (content settings, AI access), and what remains private (message content). Every feature was a negotiation between protection and autonomy.",
    pullquote:
      "Parental controls are no longer a nice-to-have. They\u2019re a regulatory expectation and a competitive differentiator. The architecture built here is the template the industry is converging toward.",
    role: "Product lead for Family Center and teen safety tooling",
  },
  {
    tags: ["Compliance", "Policy", "Platform Architecture"],
    title: "Age Gating & Regulatory Compliance",
    image: "/images/AgeVerification.PNG",
    body: "Australia\u2019s under-16 social media ban was the first law of its kind \u2014 and required building age verification infrastructure that didn\u2019t exist anywhere in the industry at the necessary scale or accuracy. The challenge wasn\u2019t just technical: it was designing a compliant experience that didn\u2019t create worse outcomes for the teens it was meant to protect. That meant working across product, policy, legal, and third-party partners to build a system that could hold up under regulatory scrutiny while remaining operable at platform scale \u2014 with all the imprecision of current age estimation technology factored in.",
    pullquote:
      "Age verification mandates are coming globally. The companies with working infrastructure and regulatory relationships are years ahead of those starting from scratch.",
    role: "Product and compliance lead for age-gated experience rollout",
  },
];

const supportingWork = [
  {
    tags: ["Communication Safety", "Reporting", "Harm Reduction"],
    title: "Chat Safety",
    body: "Protecting people inside a messaging product means designing for moments they hope never happen. Built Snap\u2019s communication safety layer \u2014 from in-chat reporting flows and escalation tooling to group chat protections and proactive warnings \u2014 with particular focus on the experiences most likely to affect younger users.",
    role: "Product lead, communication safety",
  },
  {
    tags: ["Digital Literacy", "Teen Safety", "Program Design"],
    title: "Teen Safety Education \u2014 The Keys",
    body: "Co-developed Snap\u2019s first interactive digital safety curriculum for teens and families \u2014 a 45-minute program covering bullying, sextortion, illicit content, and platform-specific safety tools. Built in partnership with Common Sense Media and reviewed by Snap\u2019s teen Council for Digital Well-Being. Featured in the program\u2019s training module.",
    role: "Product and content contributor \u00b7 On-screen presenter",
  },
  {
    tags: ["Engagement", "User Wellbeing", "Feature Design"],
    title: "Streaks Safety & User Wellbeing",
    body: "Streaks are one of Snapchat\u2019s most emotionally loaded features \u2014 and one increasingly scrutinized in regulatory discussions about teen digital wellbeing. Work here focused on giving users more agency: restore options, reminder controls, and friction-reduction for users who wanted to engage on their own terms rather than the algorithm\u2019s.",
    role: "Product lead, Streaks and engagement features",
  },
];

const newsItems = [
  {
    date: "January 2026",
    source: "Snap Values",
    title: "Five Years of Snap\u2019s Law Enforcement Summit",
    descriptor:
      "A look back at five years of Snap\u2019s Law Enforcement Summit \u2014 convening law enforcement, policymakers, and safety experts to strengthen platform accountability and collaboration.",
    url: "https://values.snap.com/five-years-snap-law-enforcement-summit",
  },
  {
    date: "January 2026",
    source: "Snap Newsroom",
    title: "Family Center: Deeper Insights for Parents",
    descriptor:
      "New screen time visibility and friend trust signals give parents more meaningful oversight of how teens experience Snapchat.",
    url: "https://newsroom.snap.com/deeper-insights-with-family-center",
  },
  {
    date: "September 2025",
    source: "Snap Newsroom",
    title: "The Keys: A Guide to Digital Safety",
    descriptor:
      "A first-of-its-kind interactive safety curriculum for teens and families \u2014 developed with Common Sense Media, covering bullying, sextortion, and illicit content online.",
    url: "https://newsroom.snap.com/the-keys-a-guide-to-digital-safety",
  },
  {
    date: "July 2025",
    source: "Snap Newsroom",
    title: "Home Safe Alerts",
    descriptor:
      "A new privacy-first feature that automatically notifies a trusted contact when you arrive home \u2014 adopted by 1M+ users within weeks of launch.",
    url: "https://newsroom.snap.com/introducing-home-safe-alerts",
  },
  {
    date: "April 2025",
    source: "Snap Newsroom",
    title: "Snapchat Family Safety Hub",
    descriptor:
      "A centralized resource hub for parents \u2014 developed with Common Sense Media \u2014 bringing together Family Center guidance, safety tools, and digital well-being resources.",
    url: "https://newsroom.snap.com/snapchat-family-safety-hub",
  },
  {
    date: "April 2025",
    source: "Snap Values",
    title: "Supporting the TAKE IT DOWN Act",
    descriptor:
      "Snap\u2019s public commitment to federal legislation criminalizing non-consensual intimate imagery, with platform enforcement and law enforcement partnerships to match.",
    url: "https://values.snap.com/news/take-it-down-act",
  },
  {
    date: "August 2024",
    source: "Snap Values",
    title: "Council for Digital Well-Being",
    descriptor:
      "Snap\u2019s first teen advisory council \u2014 18 members from 12 states \u2014 convened to bring youth voices directly into platform safety and policy decisions.",
    url: "https://values.snap.com/news/inaugural-council-digital-well-being",
  },
  {
    date: "March 2023",
    source: "Snap Newsroom",
    title: "Streak Restores",
    descriptor:
      "Snap\u2019s first in-chat monetization feature \u2014 a simple way for users to restore a lost Streak \u2014 scaling from $0 to $110M ARR in its first year.",
    url: "https://newsroom.snap.com/keep-the-streak-with-restore",
  },
];

/* ============================
   Component
   ============================ */

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);

  // Sticky nav background on scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========================
          Navigation
          ======================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled
            ? "bg-site-white/90 backdrop-blur-md border-b border-site-gray-light"
            : "bg-transparent"
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between transition-all duration-500 ${
            navScrolled ? "h-14" : "h-20"
          }`}
        >
          <a
            href="#"
            className="font-body text-xs tracking-[0.25em] uppercase text-site-black hover:opacity-60 transition-opacity"
          >
            Abby Tran
          </a>
          <div className="flex items-center gap-8">
            {["Work", "News", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs tracking-[0.15em] uppercase text-site-gray-dark hover:text-site-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================
          Hero
          ======================== */}
      <section className="relative min-h-screen bg-site-white overflow-hidden">
        {/* Headshot — positioned behind text on desktop */}
        <div
          className="hero-animate lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[45%]"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative w-full h-[50vh] lg:h-full max-w-md mx-auto lg:max-w-none overflow-hidden">
            <Image
              src="/headshot.jpeg"
              alt="Abby Tran — Product Executive, AI Safety"
              fill
              className="object-cover object-top headshot-filter"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Gradient overlay so text reads clearly over image on desktop */}
            <div className="hidden lg:block absolute inset-0" style={{ background: "linear-gradient(to right, var(--color-site-white) 0%, var(--color-site-white) 5%, rgba(245,245,243,0.6) 25%, transparent 50%)" }} />
          </div>
        </div>

        {/* Text — overlaps the image on desktop */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center min-h-screen pt-32 pb-20 lg:pt-20 lg:pb-0">
          <div className="max-w-2xl">
            <h1
              className="font-display leading-[1.05] tracking-[-0.02em] text-site-black hero-animate"
              style={{
                animationDelay: "0.25s",
                fontSize: "clamp(2.75rem, 6vw, 6.25rem)",
              }}
            >
              Building the products that make AI safe.
            </h1>
            <p
              className="font-body text-base lg:text-[1.075rem] text-site-gray-dark leading-[1.75] mt-8 lg:mt-10 max-w-xl hero-animate"
              style={{ animationDelay: "0.5s" }}
            >
              Abby is a product leader at the intersection of AI, safety, and
              scale. Her work starts with a simple question: what does harm look
              like from the user&rsquo;s point of view? That lens has shaped
              everything she&rsquo;s built at Snap&mdash;a safety and compliance
              stack serving nearly a billion monthly users across AI, messaging,
              and family products.
            </p>
            <div
              className="flex flex-wrap gap-2 mt-8 hero-animate"
              style={{ animationDelay: "0.7s" }}
            >
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-[11px] tracking-[0.08em] uppercase text-site-gray-mid border border-site-gray-light rounded-none px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-[1400px] mx-auto" />

      {/* ========================
          Selected Work
          ======================== */}
      <section id="work" className="bg-site-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Section header */}
          <div className="mb-16 lg:mb-20 border-b border-site-gray-light pb-6" data-animate>
            <h2 className="font-display text-4xl lg:text-5xl text-site-black">
              Selected Work
            </h2>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-site-gray-mid mt-3">
              Product &middot; Safety &middot; Scale
            </p>
          </div>

          {/* Tier 1 — Flagship Cases */}
          <div className="space-y-10 lg:space-y-10">
            {flagshipWork.map((item, i) => (
              <div
                key={i}
                className="flagship-card group border border-site-gray-light transition-all duration-300 hover:border-site-gray-dark"
                data-animate
              >
                <div className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  {/* Text content */}
                  <div className="flex-1 p-8 lg:p-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border border-site-gray-light text-site-gray-mid"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl leading-[1.1] text-site-black mb-6">
                      {item.title}
                    </h3>

                    {/* Body */}
                    <p className="font-body text-sm lg:text-[0.9375rem] text-site-gray-dark leading-[1.75] mb-6">
                      {item.body}
                    </p>

                    {/* Pullquote */}
                    <div className="border-t border-site-gray-light pt-5 mb-6">
                      <p className="font-display italic text-[0.9375rem] lg:text-base leading-[1.7] text-site-gray-mid">
                        {item.pullquote}
                      </p>
                    </div>

                    {/* Role */}
                    <p className="font-body text-[11px] tracking-[0.1em] uppercase text-site-gray-mid">
                      {item.role}
                    </p>
                  </div>

                  {/* Product screenshot — hidden on mobile */}
                  <div className="hidden lg:block lg:w-[280px] xl:w-[320px] shrink-0 relative overflow-hidden bg-site-gray-light">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top headshot-filter group-hover:scale-105 transition-transform duration-500"
                      sizes="320px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tier separator */}
          <div className="my-16 lg:my-20" />

          {/* Tier 2 — Supporting Work */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {supportingWork.map((item, i) => (
              <div
                key={i}
                className="supporting-card group border border-site-gray-light p-7 lg:p-8 transition-all duration-300 hover:border-site-gray-dark"
                data-animate
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-[0.1em] uppercase px-2 py-1 border border-site-gray-light text-site-gray-mid"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl leading-[1.15] text-site-black mb-4">
                  {item.title}
                </h3>

                {/* Body */}
                <p className="font-body text-sm text-site-gray-dark leading-[1.7] mb-5">
                  {item.body}
                </p>

                {/* Role */}
                <p className="font-body text-[11px] tracking-[0.1em] uppercase text-site-gray-mid">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-[1400px] mx-auto" />

      {/* ========================
          News & Launches
          ======================== */}
      <section id="news" className="bg-site-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16 lg:mb-20" data-animate>
            <h2 className="font-display text-4xl lg:text-5xl text-site-black">
              News &amp; Launches
            </h2>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-site-gray-mid mt-3">
              Recent work at Snap
            </p>
          </div>

          {/* News list — editorial rule-separated layout */}
          <div className="border-t border-site-gray-light">
            {newsItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-row group block border-b border-site-gray-light py-5 lg:py-6 transition-colors duration-300 hover:bg-site-black/[0.02]"
                data-animate
              >
                {/* Desktop: single-row layout with date | title | source */}
                <div className="hidden md:flex items-baseline justify-between gap-6">
                  {/* Date — fixed width left column */}
                  <span className="font-body text-xs tracking-[0.08em] uppercase text-site-gray-mid w-[130px] shrink-0">
                    {item.date}
                  </span>

                  {/* Title — fills center */}
                  <h3 className="font-display text-lg lg:text-xl leading-[1.3] text-site-black flex-1 group-hover:text-site-gray-dark transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Source + arrow — right aligned */}
                  <span className="font-body text-xs tracking-[0.08em] uppercase text-site-gray-mid shrink-0 flex items-center gap-2">
                    {item.source}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Desktop: descriptor reveal on hover */}
                <div className="hidden md:block">
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                    <div className="overflow-hidden">
                      <p className="font-body text-sm text-site-gray-mid leading-[1.6] pl-[154px] pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.descriptor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile: stacked layout */}
                <div className="md:hidden">
                  <p className="font-body text-xs tracking-[0.08em] uppercase text-site-gray-mid mb-2">
                    {item.date} &middot; {item.source}
                  </p>
                  <h3 className="font-display text-lg leading-[1.3] text-site-black mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-site-gray-mid leading-[1.6]">
                    {item.descriptor}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================
          Contact
          ======================== */}
      <section id="contact" className="bg-site-black text-site-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl" data-animate>
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.1] mb-10">
              Let&rsquo;s build something safer.
            </h2>
            <div className="flex items-center gap-6">
              <a
                href="mailto:abby.m.tran@gmail.com"
                className="inline-flex items-center gap-2 font-body text-sm tracking-[0.1em] uppercase border border-site-white px-6 py-3 hover:bg-site-white hover:text-site-black transition-all duration-300"
              >
                Get In Touch
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abbymtran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-site-gray-mid hover:text-site-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          Footer
          ======================== */}
      <footer className="bg-site-black text-site-gray-mid border-t border-white/10 py-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          <span className="font-body text-xs tracking-[0.1em]">
            &copy; 2026 Abby Tran
          </span>
          <a
            href="https://www.linkedin.com/in/abbymtran/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.1em] hover:text-site-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
