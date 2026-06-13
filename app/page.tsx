const services = [
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
];

const works = [
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
];

const process = [
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
];

const faqs = [
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
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="font-serif text-2xl leading-none text-ink">
          Translucent
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a className="transition hover:text-ink" href="#services">
            Services
          </a>
          <a className="transition hover:text-ink" href="#works">
            Works
          </a>
          <a className="transition hover:text-ink" href="#process">
            Process
          </a>
          <a className="transition hover:text-ink" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 lg:px-10 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.24em] text-muted">
              Tainan, Taiwan / Brand Identity Studio
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] text-ink sm:text-6xl lg:text-8xl">
              Clear identity systems for brands that need to be understood.
            </h1>
          </div>
          <div className="max-w-xl lg:pb-3">
            <p className="text-lg leading-8 text-muted">
              Translucent Design Studio crafts strategic, lasting visual identities for growing businesses, new ventures, and B2B teams that need every touchpoint to feel intentional.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-ink focus-visible:outline focus-visible:outline-2"
              >
                Book a Consultation
              </a>
              <a
                href="#works"
                className="inline-flex min-h-12 items-center justify-center border border-ink/20 px-6 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2"
              >
                View Selected Works
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid min-h-[280px] overflow-hidden border border-line bg-[#ebe4d8] shadow-soft md:grid-cols-[0.85fr_1.15fr] lg:mt-20">
          <div className="flex flex-col justify-between border-b border-line p-6 md:border-b-0 md:border-r lg:p-9">
            <p className="max-w-xs text-sm leading-6 text-muted">
              For small and mid-sized businesses that value clarity, consistency, and a brand presence built for repeated commercial use.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-serif text-4xl text-accent">01</p>
                <p className="mt-2 text-muted">Strategic foundation before style.</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent">02</p>
                <p className="mt-2 text-muted">Visual systems that teams can use.</p>
              </div>
            </div>
          </div>
          <div
            className="relative min-h-[300px] bg-cover bg-center"
            role="img"
            aria-label="Editorial workspace with printed brand identity materials and warm neutral lighting"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(245,240,232,0.72), rgba(245,240,232,0.08)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80')",
            }}
          >
            <div className="absolute bottom-6 left-6 right-6 max-w-md bg-paper/90 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Selected approach</p>
              <p className="mt-3 font-serif text-3xl leading-tight text-ink">
                Minimal marks, deliberate systems, and guidelines people can actually follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
          <div>
            <SectionLabel>Studio Intro</SectionLabel>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Design is a business language before it is a surface treatment.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              We help brands translate strategy into a visual identity that can be recognized, repeated, and trusted. The work starts with what the business needs to communicate, then becomes a system of decisions for type, color, marks, layout, and applications.
            </p>
            <p>
              A good identity does not ask every asset to start from zero. It gives teams a shared visual logic so proposals, packaging, campaigns, and websites feel like they belong to the same company.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            Focused services for building and maintaining brand coherence.
          </h2>
        </div>
        <div className="grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.name} className="border-b border-line py-8 md:px-6 lg:px-8">
              <h3 className="font-serif text-3xl font-medium text-ink">{service.name}</h3>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
              <p className="mt-5 text-sm font-medium leading-6 text-accent">{service.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="bg-ink py-16 text-paper lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
                Selected Works
              </p>
              <h2 className="font-serif text-4xl font-medium sm:text-5xl">
                Replaceable case cards with a clear commercial story.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-paper/70 lg:pt-12">
              Each case is structured to show context, project type, and the concrete shift the identity created. The layout is ready for real photography or portfolio imagery when available.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-paper/20 bg-paper/20 md:grid-cols-2">
            {works.map((work, index) => (
              <article key={work.brand} className="bg-ink p-6 sm:p-8">
                <div className="mb-12 flex items-start justify-between gap-6">
                  <p className="font-serif text-5xl text-accent-soft/80">{String(index + 1).padStart(2, "0")}</p>
                  <p className="max-w-[12rem] text-right text-xs uppercase tracking-[0.2em] text-paper/55">
                    {work.industry}
                  </p>
                </div>
                <h3 className="font-serif text-4xl font-medium">{work.brand}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent-soft">{work.type}</p>
                <p className="mt-6 max-w-xl leading-7 text-paper/72">{work.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
            A calm process with clear decisions at each stage.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <article key={item.name} className="border-l border-line pl-5">
              <p className="font-serif text-4xl text-clay">{item.step}</p>
              <h3 className="mt-5 text-xl font-semibold text-ink">{item.name}</h3>
              <p className="mt-4 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[#eee7dc]" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 id="faq-heading" className="font-serif text-4xl font-medium text-ink sm:text-5xl">
              Practical answers before a first conversation.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ink">
                  {faq.question}
                  <span className="text-2xl font-light text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Tell us what your brand needs to make clearer.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Share a little context about your business, timeline, and the identity work you are considering. We will reply with next steps and whether the fit is right.
            </p>
            <div className="mt-10 space-y-3 text-sm text-muted">
              <p>
                Email:{" "}
                <a className="font-semibold text-ink underline-offset-4 hover:underline" href="mailto:hello@translucent.design">
                  hello@translucent.design
                </a>
              </p>
              <p>
                Portfolio:{" "}
                <a className="font-semibold text-ink underline-offset-4 hover:underline" href="https://www.behance.net/" target="_blank" rel="noreferrer">
                  Behance
                </a>
              </p>
              <p>
                Social:{" "}
                <a className="font-semibold text-ink underline-offset-4 hover:underline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <form className="border border-line bg-paper p-5 shadow-soft sm:p-8" action="mailto:hello@translucent.design" method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">
                Name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-semibold text-ink">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Company
              <input
                name="company"
                autoComplete="organization"
                className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                placeholder="Company or brand name"
              />
            </label>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Project type
              <select
                required
                name="projectType"
                className="mt-2 min-h-12 w-full border border-line bg-white/50 px-4 text-base text-ink focus:border-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Brand Strategy</option>
                <option>Visual Identity Design</option>
                <option>Logo System Design</option>
                <option>Brand Guidelines</option>
                <option>Campaign Visual Design</option>
                <option>Website Visual Direction</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold text-ink">
              Project context
              <textarea
                required
                name="message"
                minLength={20}
                rows={6}
                className="mt-2 w-full border border-line bg-white/50 px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-accent"
                placeholder="What is changing in the business, and what should the brand identity help clarify?"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-paper transition hover:bg-ink focus-visible:outline focus-visible:outline-2 sm:w-auto"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-sm text-muted sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Translucent Design Studio / Tainan, Taiwan</p>
          <p>A brand design studio crafting clear, strategic, and lasting visual identities.</p>
        </div>
      </footer>
    </main>
  );
}
