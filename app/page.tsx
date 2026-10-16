const PHONE_DISPLAY = "(437) 971-9027";
const PHONE_TEL = "tel:+14379719027";
const PHONE_SMS = "sms:+14379719027";
const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=ZEC%20Sealing%20%26%20Landscaping&query_place_id=ChIJsztJSh1pK4gR0meDbnV-pHU";
const FACEBOOK = "https://www.facebook.com/ZEC-Sealing-Landscaping-106597822029549";

type IconProps = { className?: string };
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};
const PhoneIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
const ChatIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const Star = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
);
const Stars = ({ className = "h-5 w-5" }: IconProps) => (
  <span className="inline-flex text-star" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className={className} />)}</span>
);
const GrassIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M2 21h20" /><path d="M5 21c0-5-1-8-3-10M8 21c0-6 1-10 4-13M12 21c0-5 .5-8 2-11M16 21c0-4 1.5-7 4-9M19 21c0-3 .5-5 2-6" /></svg>
);
const TreeIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M12 22v-6" /><path d="M8 16h8a4 4 0 0 0 1.2-7.8A5 5 0 0 0 7.1 7.3 4.5 4.5 0 0 0 8 16z" /></svg>
);
const BricksIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9.3h18M3 14.6h18M9 4v5.3M15 9.3v5.3M9 14.6V20" /></svg>
);
const DropIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M12 2.7S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.7 12 2.7z" /></svg>
);
const SprayIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M3 21l7-7" /><path d="M10 14l3-3 4 4-3 3z" /><path d="M17 4v2M20 7h-2M19.5 4.5 18 6M21 11h-1.5M14 2.5V4" /></svg>
);
const LeafIcon = ({ className = "h-7 w-7" }: IconProps) => (
  <svg {...s} className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></svg>
);
const ChatBubbles = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M14 9a2 2 0 0 1-2 2H6l-3 3V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2z" /><path d="M18 9h1a2 2 0 0 1 2 2v10l-3-3h-6a2 2 0 0 1-2-2v-1" /></svg>
);
const CheckIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>
);
const ClockIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
const PinIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...s} className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const ChevronDown = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="m6 9 6 6 6-6" /></svg>
);
const ArrowRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...s} strokeWidth={2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const FacebookIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...s} className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const sodSteps = [
  "Old, worn-out lawn removed",
  "Fresh soil brought in and graded, even over surface roots",
  "New sod laid tight with clean edges",
  "Aftercare instructions, then a follow-up to check it's thriving",
];

const services = [
  { icon: TreeIcon, name: "Landscaping", text: "Front and back yard transformations, like a lush new lawn paired with clean decorative pebble areas." },
  { icon: BricksIcon, name: "Interlock Sand & Seal", text: "Pavers cleaned, re-sanded and sealed to lock joints in place, cut down on weeds and bring the colour back." },
  { icon: DropIcon, name: "Driveway, Asphalt & Concrete Sealing", text: "Protective sealing for driveways and concrete surfaces so they hold up through Ontario winters." },
  { icon: SprayIcon, name: "Pressure Washing", text: "Hardscapes washed down before sealing, or on their own to take years of grime off patios and walkways." },
  { icon: LeafIcon, name: "Spring & Fall Clean-ups", text: "Seasonal clean-ups, grass mowing, roto tilling and lawn and yard maintenance to keep things in shape." },
  { icon: DropIcon, name: "Gutter Cleaning", text: "Gutters cleared out as part of your seasonal clean-up so water goes where it should." },
];

const reviews = [
  { name: "Rich J.", job: "Lawn rebuild", text: "Surface roots from the town-planted maples had destroyed the lawn. Ivan's team removed it, added soil over the roots and laid new sod. Ten days later, the results speak for themselves." },
  { name: "Mike B.", job: "Sod installation", text: "The best sod install he has seen, far better than the company he used before, and Ivan passed along helpful tips for keeping it healthy." },
  { name: "June R.", job: "Sod project", text: "Ivan communicated the whole way through, showed them how to care for the new lawn, and followed up afterwards to make sure it was doing well." },
  { name: "Vladimir S.", job: "Front and back yard", text: "Ivan transformed both yards with a lush lawn and stylish pebble areas." },
  { name: "Kelly A.", job: "Sod installation, Fonthill", text: "A very detail-focused customer who strongly recommends Ivan for any sod project. Extremely professional from start to finish." },
  { name: "David & Judith D.", job: "Lawn", text: "Their lawn looks fantastic. Ivan is knowledgeable, hard working and gives exceptional service." },
];

const steps = [
  { title: "Call or text Ivan", text: `Reach Ivan at ${PHONE_DISPLAY}. Tell him what your lawn or driveway looks like now; photos by text help.` },
  { title: "Estimate and plan", text: "Ivan looks at the job, explains what it needs, and gives you a clear estimate before anything starts." },
  { title: "Prep done properly", text: "Old lawn out, soil in, surfaces pressure washed. Good prep is why our sod and sealing jobs last." },
  { title: "Install or seal", text: "The crew lays the sod or applies the sealer, on time and with clear communication all the way." },
  { title: "Aftercare and follow-up", text: "You get simple care instructions, and Ivan follows up after the job to make sure everything is thriving." },
];

const faqs = [
  { q: "How soon can I walk on new sod?", a: "Ivan gives every customer aftercare instructions tailored to the job, including watering and when it's safe to use the lawn. He also follows up afterwards to check on it, so you're never guessing." },
  { q: "My lawn has tree roots coming through. Can you fix it?", a: "Yes. We've rebuilt lawns that town-planted maples had ruined by removing the old turf, adding soil over the surface roots and laying fresh sod." },
  { q: "What areas do you serve?", a: "We work across the GTA and into Niagara, including Fonthill. Call or text with your address and we'll let you know if we can get to you." },
  { q: "Do you seal interlock and driveways too?", a: "Yes. We pressure wash, re-sand and seal interlock pavers, and seal asphalt and concrete driveways." },
  { q: "Do you give estimates?", a: `Call or text ${PHONE_DISPLAY}. Ivan will talk through the job and give you an estimate before any work begins.` },
  { q: "What are your hours?", a: "We start at 7 a.m. Call or text any time and Ivan will get back to you." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "ZEC Sealing & Landscaping",
  telephone: "+1-437-971-9027",
  url: "https://zec-sealing-landscaping.growlocalvisibility.com",
  founder: { "@type": "Person", name: "Ivan" },
  areaServed: ["Greater Toronto Area, ON", "Niagara Region, ON", "Fonthill, ON"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "23" },
  sameAs: [FACEBOOK, GOOGLE_URL],
  makesOffer: ["Sod installation", ...services.map((x) => x.name)].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
};

const nav = [
  { href: "#sod", label: "Sod" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="ZEC Sealing and Landscaping home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><GrassIcon className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold text-ink">ZEC</span>
              <span className="block text-xs font-semibold text-muted">Sealing &amp; Landscaping</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => <a key={n.href} href={n.href} className="font-semibold text-ink/75 transition-colors hover:text-brand">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hidden items-center gap-2 font-bold text-brand-dark md:flex"><PhoneIcon className="h-4 w-4" />{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn hidden bg-cta text-ink hover:bg-cta-hover md:inline-flex">Get an Estimate</a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-ink md:hidden"><PhoneIcon /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr]">
            <div className="up">
              <h1 className="font-extrabold text-ink" style={{ fontSize: "clamp(2.25rem, 4.9vw, 3.65rem)" }}>
                Sod Installation, Landscaping &amp; Driveway Sealing in the GTA and Niagara
              </h1>
              <p className="mt-5 max-w-[56ch] text-lg text-muted">
                Sod done right the first time. Ivan and the ZEC crew rebuild tired lawns from the soil up, seal driveways and interlock, and follow up after the job to make sure your new lawn is thriving.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn bg-cta text-lg text-ink shadow-md hover:bg-cta-hover"><PhoneIcon /> Call {PHONE_DISPLAY}</a>
                <a href={PHONE_SMS} className="btn border-2 border-brand bg-white text-brand-dark hover:bg-tint"><ChatIcon /> Text photos of your lawn</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold text-ink/80">
                <li className="flex items-center gap-1.5"><Stars className="h-4 w-4" /> 5.0 · 23 Google reviews</li>
                <li className="flex items-center gap-1.5"><CheckIcon className="h-4 w-4 text-brand" /> Zero complaints</li>
                <li className="flex items-center gap-1.5"><ChatBubbles className="h-4 w-4 text-brand" /> Follow-up after every job</li>
              </ul>
            </div>

            <aside className="up up-2 rounded-2xl border border-line bg-white p-7 shadow-xl shadow-brand/10" aria-label="Quick facts">
              <p className="font-display text-lg font-extrabold">Quick facts</p>
              <ul className="mt-4 divide-y divide-line">
                {[
                  { icon: Star, t: "5.0 stars on Google", d: "23 reviews, every one five stars" },
                  { icon: GrassIcon, t: "Sod is our specialty", d: "Most of our reviews are sod jobs" },
                  { icon: PinIcon, t: "GTA & Niagara", d: "Including Fonthill" },
                  { icon: ClockIcon, t: "Early starts", d: "Crew starts at 7 a.m." },
                ].map((f) => (
                  <li key={f.t} className="flex items-start gap-3 py-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-tint text-brand"><f.icon className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{f.t}</span><span className="block text-[0.95rem] text-muted">{f.d}</span></span>
                  </li>
                ))}
              </ul>
              <a href={PHONE_TEL} className="btn mt-4 w-full bg-brand text-white hover:bg-brand-dark"><PhoneIcon /> Talk to Ivan</a>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers choose ZEC" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: Star, t: "5.0 Google rating", s: "23 five-star reviews" },
              { icon: ChatBubbles, t: "Constant communication", s: "Estimate to final check-in" },
              { icon: ClockIcon, t: "Punctual crew", s: "Shows up when promised" },
              { icon: CheckIcon, t: "Replies to every review", s: "Owner-run and accountable" },
            ].map((i) => (
              <li key={i.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/15"><i.icon className="h-5 w-5" /></span>
                <span><span className="block font-bold">{i.t}</span><span className="block text-sm text-white/80">{i.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sod feature */}
        <section id="sod" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">Our core service</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Sod installation that customers call the best they&apos;ve seen</h2>
              <p className="mt-4 text-lg text-muted">
                A new lawn is only as good as what&apos;s underneath it. We don&apos;t roll sod over a bad base. We take the old lawn out, bring in soil, cover problem surface roots, and lay new sod tight and even. Then Ivan shows you how to care for it and checks back to make sure it&apos;s taking.
              </p>
              <a href={PHONE_TEL} className="btn mt-8 bg-cta text-ink hover:bg-cta-hover"><PhoneIcon /> Get a sod estimate</a>
            </div>
            <ol className="rounded-2xl border-2 border-brand bg-white p-6 md:p-8">
              {sodSteps.map((t, i) => (
                <li key={t} className="flex items-start gap-4 border-b border-line py-4 last:border-0">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tint font-display font-extrabold text-brand-dark">{i + 1}</span>
                  <span className="pt-1 text-lg font-semibold">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="max-w-2xl">
              <p className="font-bold text-brand">More services</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Landscaping, sealing and seasonal yard care</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((x) => (
                <article key={x.name} className="card flex flex-col rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint text-brand"><x.icon /></span>
                  <h3 className="mt-5 text-xl font-extrabold">{x.name}</h3>
                  <p className="mt-2 flex-1 text-muted">{x.text}</p>
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Call about this <ArrowRight /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Stars className="h-6 w-6" />
                <h2 className="mt-3 text-3xl font-extrabold md:text-[2.6rem]">Rated 5.0 from 23 Google reviews</h2>
                <p className="mt-3 text-lg text-muted">Expert sod work, great communication from estimate to completion, and a follow-up with lawn care tips. Ivan personally replies to every review.</p>
              </div>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="btn shrink-0 border-2 border-brand text-brand-dark hover:bg-tint">Read all reviews on Google <ArrowRight /></a>
            </div>
            <figure className="mt-12 rounded-2xl bg-brand-dark p-8 text-white md:p-10">
              <Stars />
              <blockquote className="mt-4 max-w-4xl font-display text-2xl font-bold leading-snug md:text-3xl">
                &ldquo;Town maples&apos; roots had destroyed our lawn. Ivan&apos;s team took it out, added soil over the roots and laid new sod. Ten days later, the results speak for themselves.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-white/80"><span className="font-bold text-white">Rich J.</span> · Lawn rebuild · Google review</figcaption>
            </figure>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(1).map((r) => (
                <figure key={r.name} className="card flex flex-col rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                    <span className="font-bold">{r.name}</span>
                    <span className="block text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">About ZEC</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Ivan stays with your lawn after the job is done</h2>
              <div className="mt-6 space-y-4 text-lg text-muted">
                <p>ZEC Sealing &amp; Landscaping is led by Ivan, and for the past four years customers have been leaving five-star reviews about the same things: his sod work, his communication and the way he follows up.</p>
                <p>Most landscapers are gone the minute the last roll of sod goes down. Ivan explains how to water and care for your new lawn, then checks in afterwards, sometimes asking for a photo, to make sure it&apos;s thriving.</p>
                <p>The same care goes into sealing work. Surfaces are pressure washed first, joints re-sanded, and the sealer applied so your driveway or interlock looks sharp and holds up.</p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: GrassIcon, t: "Sod specialists", s: "The service customers mention more than any other." },
                { icon: ChatBubbles, t: "Clear communication", s: "You know what's happening from estimate to finish." },
                { icon: ClockIcon, t: "Punctual", s: "Reviewers repeatedly mention the crew being on time." },
                { icon: CheckIcon, t: "Follows up", s: "Lawn care tips and a check-in after the job." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-white"><d.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-lg font-extrabold">{d.t}</h3>
                  <p className="mt-1 text-muted">{d.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 id="how" className="text-3xl font-extrabold md:text-[2.6rem]">How it works</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-5">
              {steps.map((x, i) => (
                <li key={x.title} className="relative rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cta font-display text-lg font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-extrabold">{x.title}</h3>
                  <p className="mt-1.5 text-[1rem] text-muted">{x.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-[2.6rem]">Working across the GTA and Niagara</h2>
              <p className="mt-4 text-lg text-muted">We take on sod, landscaping and sealing jobs throughout the Greater Toronto Area and down into Niagara, including Fonthill. Send your address by text and we&apos;ll confirm.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Greater Toronto Area", "Niagara Region", "Fonthill"].map((t) => <li key={t} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-dark">{t}</li>)}
              </ul>
              <a href={PHONE_SMS} className="btn mt-8 bg-cta text-ink hover:bg-cta-hover"><ChatIcon /> Text us your address</a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe title="Map of the GTA and Niagara service area" src="https://maps.google.com/maps?q=Hamilton%2C%20ON&z=8&output=embed" className="h-[360px] w-full md:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-[2.6rem]">Frequently asked questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-white">
                  <summary className="flex items-center justify-between gap-4 p-5 text-lg font-bold">{f.q}<ChevronDown className="chev h-5 w-5 shrink-0 text-brand" /></summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Ready for a lawn you&apos;re proud of?</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">Call or text Ivan at {PHONE_DISPLAY}. The crew starts at 7 a.m.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="btn bg-cta px-7 text-lg text-ink hover:bg-cta-hover"><PhoneIcon /> Call {PHONE_DISPLAY}</a>
              <a href={PHONE_SMS} className="btn border-2 border-white/80 text-white hover:bg-white/10"><ChatIcon /> Send a text</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-28 pt-14 text-white/75 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-extrabold text-white">ZEC Sealing &amp; Landscaping</p>
            <p className="mt-3 max-w-md">Sod installation, landscaping, interlock sand and seal, and driveway sealing across the GTA and Niagara. Led by Ivan.</p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-white hover:text-white/80" aria-label="ZEC Sealing and Landscaping on Facebook"><FacebookIcon /> Facebook</a>
          </div>
          <div>
            <p className="font-bold text-white">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href={PHONE_TEL} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li>GTA &amp; Niagara, ON</li>
              <li>Starts at 7 a.m.</li>
              <li><a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Find us on Google</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">Services</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Sod Installation</li>
              {services.map((x) => <li key={x.name}>{x.name}</li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 px-5 pt-6 text-sm text-white/55 md:px-6">© {new Date().getFullYear()} ZEC Sealing &amp; Landscaping · GTA &amp; Niagara Region</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href={PHONE_TEL} className="btn bg-cta text-ink"><PhoneIcon /> Call</a>
        <a href={PHONE_SMS} className="btn border-2 border-brand text-brand-dark"><ChatIcon /> Text</a>
      </div>
    </>
  );
}
