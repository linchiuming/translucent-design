"use client";

import { useEffect, useState } from "react";

type Locale = "en" | "zh";

const copy = {
  en: {
    nav: {
      services: "Services",
      works: "Works",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      consultation: "Consultation",
      languageLabel: "Switch language",
      active: "EN",
      inactive: "中文",
    },
    hero: {
      eyebrow: "Tainan, Taiwan / Brand Identity Studio",
      title: "Clear identity systems for brands that need to be understood.",
      text: "Translucent Design Studio crafts strategic, lasting visual identities for growing businesses, new ventures, and B2B teams that need every touchpoint to feel intentional.",
      primary: "Book a Consultation",
      secondary: "View Selected Works",
      note: "For small and mid-sized businesses that value clarity, consistency, and a brand presence built for repeated commercial use.",
      statOne: "Strategic foundation before style.",
      statTwo: "Visual systems that teams can use.",
      imageAlt:
        "Editorial workspace with printed brand identity materials and warm neutral lighting",
      approachLabel: "Selected approach",
      approach:
        "Minimal marks, deliberate systems, and guidelines people can actually follow.",
    },
    intro: {
      label: "Studio Intro",
      title:
        "Design is a business language before it is a surface treatment.",
      paragraphs: [
        "We help brands translate strategy into a visual identity that can be recognized, repeated, and trusted. The work starts with what the business needs to communicate, then becomes a system of decisions for type, color, marks, layout, and applications.",
        "A good identity does not ask every asset to start from zero. It gives teams a shared visual logic so proposals, packaging, campaigns, and websites feel like they belong to the same company.",
      ],
    },
    servicesIntro: {
      label: "Services",
      title: "Focused services for building and maintaining brand coherence.",
    },
    services: [
      {
        name: "Brand Strategy",
        description:
          "Clarify positioning, audience priorities, brand attributes, and the decisions a visual system needs to support.",
        fit: "For founders and teams preparing for a new launch or repositioning.",
      },
      {
        name: "Visual Identity Design",
        description:
          "Build a coherent identity language across typography, color, layout, image direction, and core applications.",
        fit: "For businesses that need a more consistent and premium public presence.",
      },
      {
        name: "Logo System Design",
        description:
          "Develop flexible marks, lockups, usage rules, and responsive logo behavior for everyday brand use.",
        fit: "For brands that have outgrown a single static logo file.",
      },
      {
        name: "Brand Guidelines",
        description:
          "Create practical standards that help internal teams and vendors keep the brand aligned after launch.",
        fit: "For growing organizations managing multiple touchpoints or collaborators.",
      },
      {
        name: "Campaign Visual Design",
        description:
          "Translate a campaign message into a focused visual direction for launch assets, social content, or events.",
        fit: "For teams that need campaign materials to feel connected to the brand system.",
      },
      {
        name: "Website Visual Direction",
        description:
          "Define page rhythm, art direction, content hierarchy, and UI styling for simple brand websites.",
        fit: "For businesses planning a focused website with a clear identity foundation.",
      },
    ],
    worksIntro: {
      label: "Selected Works",
      title: "Replaceable case cards with a clear commercial story.",
      text: "Each case is structured to show context, project type, and the concrete shift the identity created. The layout is ready for real photography or portfolio imagery when available.",
    },
    works: [
      {
        brand: "Hearth Table",
        industry: "Hospitality",
        type: "Identity refresh / Menu system",
        result:
          "Reframed a neighborhood restaurant into a warmer, more editorial dining brand with clearer guest touchpoints.",
      },
      {
        brand: "Northline Components",
        industry: "B2B Manufacturing",
        type: "Brand strategy / Visual identity",
        result:
          "Created a precise industrial identity system that improved consistency across sales decks, signage, and product sheets.",
      },
      {
        brand: "Lumen Field Lab",
        industry: "Creative Education",
        type: "Logo system / Guidelines",
        result:
          "Designed a modular identity that supports workshops, publications, and partner-led programs without losing recognition.",
      },
      {
        brand: "Mori Clinic",
        industry: "Healthcare",
        type: "Visual identity / Website direction",
        result:
          "Established a calm, credible visual language for a private clinic balancing clinical clarity with human warmth.",
      },
    ],
    processIntro: {
      label: "Process",
      title: "A calm process with clear decisions at each stage.",
    },
    process: [
      {
        step: "01",
        name: "Discovery",
        text: "We map the business context, audience expectations, current brand assets, and the decisions the identity must make easier.",
      },
      {
        step: "02",
        name: "Strategy",
        text: "We define positioning, brand principles, visual territories, and the practical criteria used to evaluate design directions.",
      },
      {
        step: "03",
        name: "Design",
        text: "We develop the identity system across core applications, refining both the visual language and how it behaves in use.",
      },
      {
        step: "04",
        name: "Delivery",
        text: "We prepare production files, usage guidance, and rollout notes so the brand can be applied consistently after handoff.",
      },
    ],
    faqIntro: {
      label: "FAQ",
      title: "Practical answers before a first conversation.",
    },
    faqs: [
      {
        question: "How long does a typical brand identity project take?",
        answer:
          "Most identity projects take 6 to 10 weeks, depending on scope, decision timelines, and the number of brand applications needed.",
      },
      {
        question: "How do you quote a project?",
        answer:
          "We quote by scope after a short consultation. Strategy, identity depth, guideline requirements, and rollout assets all affect the estimate.",
      },
      {
        question: "Do you work with small or early-stage brands?",
        answer:
          "Yes. We work best with small teams that have a clear business direction and want their brand system to support long-term consistency.",
      },
      {
        question: "Can you provide brand guidelines?",
        answer:
          "Yes. Guidelines can range from a concise usage document to a more complete system covering logo, type, color, layout, imagery, and sample applications.",
      },
      {
        question: "Do you handle website development?",
        answer:
          "We provide visual direction for simple brand websites and can collaborate with development partners when a broader build is required.",
      },
    ],
    contact: {
      label: "Contact",
      title: "Tell us what your brand needs to make clearer.",
      text: "Share a little context about your business, timeline, and the identity work you are considering. We will reply with next steps and whether the fit is right.",
      email: "Email",
      portfolio: "Portfolio",
      social: "Social",
      fields: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        company: "Company",
        companyPlaceholder: "Company or brand name",
        projectType: "Project type",
        projectSelect: "Select a service",
        context: "Project context",
        contextPlaceholder:
          "What is changing in the business, and what should the brand identity help clarify?",
        submit: "Send Inquiry",
      },
    },
    footer:
      "A brand design studio crafting clear, strategic, and lasting visual identities.",
  },
  zh: {
    nav: {
      services: "服務",
      works: "案例",
      process: "流程",
      faq: "問答",
      contact: "聯絡",
      consultation: "預約諮詢",
      languageLabel: "切換語言",
      active: "中文",
      inactive: "EN",
    },
    hero: {
      eyebrow: "台灣台南 / 品牌識別設計工作室",
      title: "為需要被清楚理解的品牌，建立一致且長久的識別系統。",
      text: "Translucent Design Studio 為成長中的企業、新創品牌與 B2B 團隊打造具有策略基礎的視覺識別，讓每一個品牌接觸點都更清楚、更一致。",
      primary: "預約品牌諮詢",
      secondary: "查看精選案例",
      note: "適合重視清楚溝通、品牌一致性，以及長期商業使用情境的中小企業與專業團隊。",
      statOne: "先釐清策略，再決定風格。",
      statTwo: "建立團隊能持續使用的視覺系統。",
      imageAlt: "暖色光線下的品牌設計印刷品與編輯式工作桌面",
      approachLabel: "設計觀點",
      approach: "克制的標誌、清楚的系統，以及實際能被團隊遵循的品牌規範。",
    },
    intro: {
      label: "工作室介紹",
      title: "設計不只是美感表現，更是商業溝通的語言。",
      paragraphs: [
        "我們協助品牌把策略轉化為可辨識、可重複使用、也能建立信任的視覺識別。設計工作從品牌真正需要溝通的內容開始，再延伸為字體、色彩、標誌、版面與應用情境的決策系統。",
        "好的品牌識別不會讓每一份素材都重新開始。它會給團隊一套共享的視覺邏輯，讓簡報、包裝、活動、網站與銷售素材看起來都來自同一個品牌。",
      ],
    },
    servicesIntro: {
      label: "服務內容",
      title: "以品牌一致性為核心，提供聚焦且可落地的設計服務。",
    },
    services: [
      {
        name: "品牌策略",
        description:
          "釐清定位、受眾期待、品牌特質，以及視覺系統需要支援的商業判斷。",
        fit: "適合準備上市、轉型或重新定位的創辦人與品牌團隊。",
      },
      {
        name: "視覺識別設計",
        description:
          "建立包含字體、色彩、版面、影像方向與核心應用的完整識別語言。",
        fit: "適合需要更一致、更專業品牌形象的企業。",
      },
      {
        name: "Logo 系統設計",
        description:
          "設計可彈性使用的標誌、組合規則、使用限制與不同尺寸下的識別邏輯。",
        fit: "適合已不再適合只使用單一 logo 檔案的品牌。",
      },
      {
        name: "品牌規範",
        description:
          "整理實用的品牌標準，協助內部團隊與外部合作夥伴在上線後維持一致。",
        fit: "適合接觸點增加、需要多人共同維護品牌的成長型組織。",
      },
      {
        name: "活動視覺設計",
        description:
          "將活動訊息轉化為清楚的視覺方向，用於上市素材、社群內容或實體活動。",
        fit: "適合希望活動素材與品牌系統保持一致的行銷團隊。",
      },
      {
        name: "品牌網站視覺方向",
        description:
          "定義簡型品牌網站的頁面節奏、內容層級、視覺風格與 UI 方向。",
        fit: "適合需要清楚品牌基礎與網站視覺規劃的商業客戶。",
      },
    ],
    worksIntro: {
      label: "精選案例",
      title: "可替換的案例結構，清楚呈現專案脈絡與商業成果。",
      text: "每個案例都保留品牌名稱、產業、專案類型與成果說明。當有真實作品圖像時，可以直接替換為完整作品集內容。",
    },
    works: [
      {
        brand: "Hearth Table",
        industry: "餐飲服務",
        type: "識別更新 / 菜單系統",
        result:
          "將社區型餐廳重新整理為更溫暖、更具編輯感的餐飲品牌，並改善顧客接觸點的一致性。",
      },
      {
        brand: "Northline Components",
        industry: "B2B 製造業",
        type: "品牌策略 / 視覺識別",
        result:
          "建立精準的工業品牌識別系統，提升銷售簡報、招牌與產品資料表的一致性。",
      },
      {
        brand: "Lumen Field Lab",
        industry: "創意教育",
        type: "Logo 系統 / 品牌規範",
        result:
          "設計模組化識別，支援工作坊、出版品與合作課程，同時維持清楚辨識度。",
      },
      {
        brand: "Mori Clinic",
        industry: "醫療保健",
        type: "視覺識別 / 網站方向",
        result:
          "為私人診所建立沉穩可信的視覺語言，在專業清楚與人性溫度之間取得平衡。",
      },
    ],
    processIntro: {
      label: "合作流程",
      title: "穩定、有節奏的流程，讓每個階段都有清楚決策。",
    },
    process: [
      {
        step: "01",
        name: "探索",
        text: "整理商業脈絡、受眾期待、現有品牌資產，以及識別系統需要協助判斷的問題。",
      },
      {
        step: "02",
        name: "策略",
        text: "定義品牌定位、設計原則、視覺方向與評估標準，讓設計決策有清楚依據。",
      },
      {
        step: "03",
        name: "設計",
        text: "發展識別系統與核心應用，持續調整視覺語言與實際使用情境。",
      },
      {
        step: "04",
        name: "交付",
        text: "準備製作檔案、使用規範與上線建議，讓品牌在交付後仍能穩定延展。",
      },
    ],
    faqIntro: {
      label: "常見問題",
      title: "在第一次諮詢前，可以先了解的合作資訊。",
    },
    faqs: [
      {
        question: "一個品牌識別專案通常需要多久？",
        answer:
          "多數識別專案約需 6 到 10 週，會依照範圍、決策時程與需要製作的品牌應用數量調整。",
      },
      {
        question: "報價方式是什麼？",
        answer:
          "我們會在初步諮詢後依專案範圍報價。策略深度、識別系統完整度、規範內容與延伸素材都會影響費用。",
      },
      {
        question: "是否接受小型品牌或早期新創？",
        answer:
          "可以。我們最適合與已經有明確商業方向，並希望建立長期一致性的小型團隊合作。",
      },
      {
        question: "是否提供品牌規範？",
        answer:
          "可以。品牌規範可從精簡使用文件到完整系統手冊，包含 logo、字體、色彩、版面、影像與應用範例。",
      },
      {
        question: "是否包含網站開發？",
        answer:
          "我們提供簡型品牌網站的視覺方向，也能在需要完整建置時與開發合作夥伴一起配合。",
      },
    ],
    contact: {
      label: "聯絡我們",
      title: "告訴我們，你的品牌現在需要釐清什麼。",
      text: "請簡單分享你的品牌背景、預計時程，以及正在考慮的識別設計需求。我們會回覆下一步建議，並確認彼此是否適合合作。",
      email: "Email",
      portfolio: "作品集",
      social: "社群",
      fields: {
        name: "姓名",
        namePlaceholder: "你的姓名",
        email: "Email",
        emailPlaceholder: "you@company.com",
        company: "公司 / 品牌",
        companyPlaceholder: "公司或品牌名稱",
        projectType: "專案類型",
        projectSelect: "選擇一項服務",
        context: "專案背景",
        contextPlaceholder:
          "你的品牌正在面對什麼改變？希望識別設計協助釐清哪些事情？",
        submit: "送出諮詢",
      },
    },
    footer: "打造清楚、具策略性，並能長久使用的品牌視覺識別。",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </p>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [hasScrolled, setHasScrolled] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () =>
    setLocale((current) => (current === "en" ? "zh" : "en"));

  return (
    <main lang={locale === "zh" ? "zh-Hant" : "en"}>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          hasScrolled
            ? "border-b border-line/80 bg-paper/90 py-2 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-paper/0 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a href="#top" className="font-serif text-2xl leading-none text-ink">
            Translucent
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-sm text-muted md:flex"
          >
            <a className="transition hover:text-ink" href="#services">
              {t.nav.services}
            </a>
            <a className="transition hover:text-ink" href="#works">
              {t.nav.works}
            </a>
            <a className="transition hover:text-ink" href="#process">
              {t.nav.process}
            </a>
            <a className="transition hover:text-ink" href="#faq">
              {t.nav.faq}
            </a>
            <a className="transition hover:text-ink" href="#contact">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={t.nav.languageLabel}
              onClick={switchLocale}
              className="inline-flex min-h-10 items-center gap-2 border border-ink/20 bg-paper/80 px-3 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2"
            >
              <span>{t.nav.active}</span>
              <span className="text-muted">/</span>
              <span className="text-muted">{t.nav.inactive}</span>
            </button>
            <a
              href="#contact"
              className="hidden min-h-10 items-center justify-center border border-accent bg-accent px-4 text-sm font-semibold text-paper transition hover:bg-ink focus-visible:outline focus-visible:outline-2 sm:inline-flex"
            >
              {t.nav.consultation}
            </a>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-10 lg:pt-40"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.24em] text-muted">
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] text-ink sm:text-6xl lg:text-8xl">
              {t.hero.title}
            </h1>
          </div>
          <div className="max-w-xl lg:pb-3">
            <p className="text-lg leading-8 text-muted">{t.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-ink focus-visible:outline focus-visible:outline-2"
              >
                {t.hero.primary}
              </a>
              <a
                href="#works"
                className="inline-flex min-h-12 items-center justify-center border border-ink/20 px-6 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid min-h-[280px] overflow-hidden border border-line bg-[#ebe4d8] shadow-soft md:grid-cols-[0.85fr_1.15fr] lg:mt-20">
          <div className="flex flex-col justify-between border-b border-line p-6 md:border-b-0 md:border-r lg:p-9">
            <p className="max-w-xs text-sm leading-6 text-muted">
              {t.hero.note}
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-serif text-4xl text-accent">01</p>
                <p className="mt-2 text-muted">{t.hero.statOne}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent">02</p>
                <p className="mt-2 text-muted">{t.hero.statTwo}</p>
              </div>
            </div>
          </div>
          <div
            className="relative min-h-[300px] bg-cover bg-center"
            role="img"
            aria-label={t.hero.imageAlt}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(245,240,232,0.72), rgba(245,240,232,0.08)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80')",
            }}
          >
            <div className="absolute bottom-6 left-6 right-6 max-w-md bg-paper/90 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {t.hero.approachLabel}
              </p>
              <p className="mt-3 font-serif text-3xl leading-tight text-ink">
                {t.hero.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
          <div>
            <SectionLabel>{t.intro.label}</SectionLabel>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {t.intro.title}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            {t.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mb-10 max-w-2xl">
          <SectionLabel>{t.servicesIntro.label}</SectionLabel>
          <h2 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            {t.servicesIntro.title}
          </h2>
        </div>
        <div className="grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service) => (
            <article
              key={service.name}
              className="border-b border-line py-8 md:px-6 lg:px-8"
            >
              <h3 className="font-serif text-3xl font-medium text-ink">
                {service.name}
              </h3>
              <p className="mt-4 leading-7 text-muted">
                {service.description}
              </p>
              <p className="mt-5 text-sm font-medium leading-6 text-accent">
                {service.fit}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="bg-ink py-16 text-paper lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
                {t.worksIntro.label}
              </p>
              <h2 className="font-serif text-4xl font-medium sm:text-5xl">
                {t.worksIntro.title}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-paper/70 lg:pt-12">
              {t.worksIntro.text}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-paper/20 bg-paper/20 md:grid-cols-2">
            {t.works.map((work, index) => (
              <article key={work.brand} className="bg-ink p-6 sm:p-8">
                <div className="mb-12 flex items-start justify-between gap-6">
                  <p className="font-serif text-5xl text-accent-soft/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="max-w-[12rem] text-right text-xs uppercase tracking-[0.2em] text-paper/55">
                    {work.industry}
                  </p>
                </div>
                <h3 className="font-serif text-4xl font-medium">
                  {work.brand}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent-soft">
                  {work.type}
                </p>
                <p className="mt-6 max-w-xl leading-7 text-paper/72">
                  {work.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mb-10 max-w-2xl">
          <SectionLabel>{t.processIntro.label}</SectionLabel>
          <h2 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            {t.processIntro.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.process.map((item) => (
            <article key={item.name} className="border-l border-line pl-5">
              <p className="font-serif text-4xl text-clay">{item.step}</p>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                {item.name}
              </h3>
              <p className="mt-4 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="border-y border-line bg-[#eee7dc]"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
          <div>
            <SectionLabel>{t.faqIntro.label}</SectionLabel>
            <h2
              id="faq-heading"
              className="font-serif text-4xl font-medium text-ink sm:text-5xl"
            >
              {t.faqIntro.title}
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {t.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  {faq.question}
                  <span className="text-2xl font-light text-accent transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>{t.contact.label}</SectionLabel>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              {t.contact.text}
            </p>
            <div className="mt-10 space-y-3 text-sm text-muted">
              <p>
                {t.contact.email}:{" "}
                <a
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                  href="mailto:hello@translucent.design"
                >
                  hello@translucent.design
                </a>
              </p>
              <p>
                {t.contact.portfolio}:{" "}
                <a
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance
                </a>
              </p>
              <p>
                {t.contact.social}:{" "}
                <a
                  className="font-semibold text-ink underline-offset-4 hover:underline"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <form
            className="border border-line bg-paper p-5 shadow-soft sm:p-8"
            action="mailto:hello@translucent.design"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">
                {t.contact.fields.name}
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                  placeholder={t.contact.fields.namePlaceholder}
                />
              </label>
              <label className="block text-sm font-semibold text-ink">
                {t.contact.fields.email}
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                  placeholder={t.contact.fields.emailPlaceholder}
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-ink">
              {t.contact.fields.company}
              <input
                name="company"
                autoComplete="organization"
                className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                placeholder={t.contact.fields.companyPlaceholder}
              />
            </label>
            <label className="mt-5 block text-sm font-semibold text-ink">
              {t.contact.fields.projectType}
              <select
                required
                name="projectType"
                className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink focus:border-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.contact.fields.projectSelect}
                </option>
                {t.services.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold text-ink">
              {t.contact.fields.context}
              <textarea
                required
                name="message"
                minLength={20}
                rows={6}
                className="mt-2 w-full border border-line bg-white/50 px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                placeholder={t.contact.fields.contextPlaceholder}
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-ink focus-visible:outline focus-visible:outline-2 sm:w-auto"
            >
              {t.contact.fields.submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-sm text-muted sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Translucent Design Studio / Tainan, Taiwan</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  );
}
