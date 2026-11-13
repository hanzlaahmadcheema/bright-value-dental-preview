import { Reveal } from "@/components/Reveal";
import { OrderForm } from "@/components/OrderForm";
import { clinic, services, insurance, reviews, faqs } from "@/lib/content";

const HERO_IMG =
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80";
const OFFICE_IMG =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80";
const SCANS_IMG =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  return (
    <div id="top">
      {/* ---------- HERO: split layout ---------- */}
      <section className="bg-mint">
        <div className="container-responsive grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Family dentistry · Southwest Houston · Since 1998
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] text-teal-950 sm:text-5xl lg:text-[3.4rem]">
              A calmer way to the dentist.
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/80">
              Dr. David Yu has cared for Southwest Houston families for over
              20 years — general, cosmetic and kids&rsquo; dentistry, with
              five-star service and prices that fit your budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${clinic.phoneTel}`}
                className="rounded-full bg-teal-700 px-6 py-3 text-base font-bold text-white hover:bg-teal-800"
              >
                Call {clinic.phoneDisplay}
              </a>
              <a
                href="#book"
                className="rounded-full border-2 border-teal-800 px-6 py-3 text-base font-bold text-teal-900 hover:bg-white"
              >
                Book a visit
              </a>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <dt className="sr-only">Google rating</dt>
                <dd className="font-serif text-2xl font-semibold text-teal-950">
                  {clinic.rating}★
                </dd>
                <dd className="text-xs font-medium text-muted">
                  {clinic.reviewCount} Google reviews
                </dd>
              </div>
              <div>
                <dt className="sr-only">Serving since</dt>
                <dd className="font-serif text-2xl font-semibold text-teal-950">
                  Since {clinic.since}
                </dd>
                <dd className="text-xs font-medium text-muted">
                  27 years in Southwest Houston
                </dd>
              </div>
              <div>
                <dt className="sr-only">Emergency care</dt>
                <dd className="font-serif text-2xl font-semibold text-teal-950">
                  Same-day
                </dd>
                <dd className="text-xs font-medium text-muted">
                  emergency visits
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal variant="right" className="relative">
            <img
              src={HERO_IMG}
              alt="Dr. Yu explaining a dental X-ray to a patient in the chair"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              loading="eager"
            />
            <div className="absolute -bottom-5 left-4 max-w-[280px] rounded-2xl bg-white p-4 shadow-xl sm:left-6">
              <p className="text-sm font-bold text-teal-950">
                In pain right now?
              </p>
              <p className="mt-1 text-sm leading-snug text-muted">
                We can usually see you the same day you call. Walk-ins
                welcome for urgent needs.
              </p>
              <a
                href={`tel:${clinic.phoneTel}`}
                className="mt-2 inline-block text-sm font-bold text-teal-700 underline"
              >
                Call {clinic.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- INSURANCE STRIP ---------- */}
      <section aria-label="Insurance accepted" className="border-y border-teal-900/10 bg-white">
        <div className="container-responsive flex flex-wrap items-center gap-x-3 gap-y-2 py-4">
          <span className="text-xs font-bold uppercase tracking-wider text-muted">
            We accept
          </span>
          {insurance.map((plan) => (
            <span
              key={plan}
              className="rounded-full bg-mint px-3 py-1.5 text-sm font-semibold text-teal-900"
            >
              {plan}
            </span>
          ))}
          <a href="#faq" className="text-sm font-bold text-teal-700 underline">
            Check your plan
          </a>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="scroll-mt-24 py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              What we do
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              Complete care, for every age
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              From a child&rsquo;s first check-up to dentures and gum care —
              one office for the whole family, all under one roof.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="flex h-full flex-col rounded-2xl border border-teal-900/10 bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-teal-950">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-teal-700">
                    {s.blurb}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.detail}
                  </p>
                  <a
                    href="#book"
                    className="mt-auto pt-4 text-sm font-bold text-teal-700 underline"
                  >
                    Book {s.title.toLowerCase()}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CALM BAND ---------- */}
      <section className="bg-teal-950 py-14 text-white lg:py-20">
        <div className="container-responsive grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={SCANS_IMG}
              alt="Dentist studying 3D dental scans on a lightbox"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal variant="right">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-honey">
              Nervous about the dentist?
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              You are not the only one — and that is okay.
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Many of our patients arrive nervous. Dr. Yu is calm and
              personable, we explain everything before we do it, and every
              treatment room has a TV — so you can watch a movie or a show
              while we work. The latest equipment, advanced techniques, and
              no surprises.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "We explain every step before we do it",
                "TVs in every treatment room",
                "Calm, unhurried appointments — you are never rushed",
                "Costs talked through before anything happens",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey text-xs font-bold text-teal-950">
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-7 inline-block rounded-full bg-honey px-6 py-3 text-base font-bold text-teal-950 hover:bg-amberstar"
            >
              Book a calm first visit
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------- MEET DR. YU ---------- */}
      <section id="doctor" className="scroll-mt-24 py-14 lg:py-20">
        <div className="container-responsive grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Meet your dentist
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              Dr. David Yu, DDS
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Dr. Yu has practiced general dentistry in Houston for over 20
              years, leading Bright Value Dental since 1998. His approach is
              simple: affordable, high-quality dentistry with five-star
              customer service — in a comfortable, family-friendly office
              where patients of all ages feel welcome.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-mint px-2 py-4">
                <dd className="font-serif text-2xl font-semibold text-teal-950">20+</dd>
                <dt className="mt-0.5 text-xs font-medium text-muted">years of experience</dt>
              </div>
              <div className="rounded-2xl bg-mint px-2 py-4">
                <dd className="font-serif text-2xl font-semibold text-teal-950">4.9★</dd>
                <dt className="mt-0.5 text-xs font-medium text-muted">751 Google reviews</dt>
              </div>
              <div className="rounded-2xl bg-mint px-2 py-4">
                <dd className="font-serif text-2xl font-semibold text-teal-950">All ages</dd>
                <dt className="mt-0.5 text-xs font-medium text-muted">babies to seniors</dt>
              </div>
            </dl>
          </Reveal>
          <Reveal variant="right" className="lg:col-span-2">
            <div className="relative">
              <img
                src={OFFICE_IMG}
                alt="Bright, modern dental treatment room with a teal chair"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 right-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-700 font-serif text-3xl font-semibold text-honey shadow-xl">
                Y
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Serving Gulfton, Bellaire, Sharpstown and Southwest Houston —
              in English, Español and 中文.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- PATIENT VOICES ---------- */}
      <section id="reviews" className="scroll-mt-24 bg-mint py-14 lg:py-20">
        <div className="container-responsive">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Patient voices
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              What patients say
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <Reveal key={r.name}>
                <figure className="h-full rounded-2xl border border-teal-900/10 bg-white p-6 shadow-sm sm:p-8">
                  <blockquote className="font-serif text-xl leading-relaxed text-teal-950">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-teal-800">
                    — {r.name}
                  </figcaption>
                  <p className="mt-1 text-xs text-muted">{r.source}</p>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-sm text-muted">
              Rated <strong className="text-teal-900">{clinic.rating}★</strong> from{" "}
              <strong className="text-teal-900">{clinic.reviewCount} Google reviews</strong>.
              Read more on Google — or come and see for yourself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- BOOK ---------- */}
      <section id="book" className="scroll-mt-24 py-14 lg:py-20">
        <div className="container-responsive grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Book a visit
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              Request an appointment
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                ["Tell us what you need", "Pick a service and a day that suits you — it takes less than a minute."],
                ["We call you back", "The office calls to confirm a time that works for you."],
                ["Come as you are", "Bring your insurance card if you have one. Nervous? Tell us — we will take it slow."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-teal-950">{title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted">{body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl bg-mint p-4 text-sm leading-relaxed text-teal-900">
              Prefer to talk? Call{" "}
              <a href={`tel:${clinic.phoneTel}`} className="font-bold underline">
                {clinic.phoneDisplay}
              </a>{" "}
              — in pain right now? We can usually see you the same day you
              call.
            </p>
          </Reveal>
          <Reveal variant="right" className="lg:col-span-3">
            <OrderForm />
          </Reveal>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-teal-900/10 bg-white py-14 lg:py-20">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Visit us
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              Find us on Bellaire Blvd
            </h2>
            <address className="mt-4 text-base not-italic leading-relaxed text-ink/80">
              {clinic.address}
              <br />
              {clinic.area}
            </address>
            <p className="mt-4 space-y-1 text-base">
              <a href={`tel:${clinic.phoneTel}`} className="block font-bold text-teal-800 hover:underline">
                {clinic.phoneDisplay}
              </a>
              <a href={`mailto:${clinic.email}`} className="block text-teal-800 hover:underline">
                {clinic.email}
              </a>
              <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="block text-teal-800 hover:underline">
                Message us on Facebook
              </a>
            </p>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full border-2 border-teal-700 px-5 py-2.5 text-sm font-bold text-teal-800 hover:bg-mint"
            >
              Get directions
            </a>
          </Reveal>
          <Reveal variant="right">
            <h3 className="font-serif text-2xl font-semibold text-teal-950">Hours</h3>
            <ul className="mt-4 divide-y divide-teal-900/10 rounded-2xl border border-teal-900/10 bg-mint/60">
              {clinic.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 px-5 py-3 text-sm">
                  <span className="font-semibold text-teal-950">{h.days}</span>
                  <span className="text-ink/80">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              Hours can change — call{" "}
              <a href={`tel:${clinic.phoneTel}`} className="font-semibold text-teal-800 underline">
                {clinic.phoneDisplay}
              </a>{" "}
              to confirm. Se habla Español · 中文口语.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-14 lg:py-20">
        <div className="container-responsive max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Questions
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-teal-950 sm:text-4xl">
              Before you visit
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl border border-teal-900/10 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-bold text-teal-950">
                    <span className="flex items-center justify-between gap-4">
                      {f.q}
                      <span aria-hidden="true" className="text-teal-600 transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-teal-950 py-14 text-white">
        <div className="container-responsive text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Your smile is worth a calm, honest visit.
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/80">
              Twenty-seven years, 751 five-star reviews, and a team that
              explains everything first. Book a visit — or just call and ask.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${clinic.phoneTel}`}
                className="rounded-full bg-honey px-6 py-3 text-base font-bold text-teal-950 hover:bg-amberstar"
              >
                Call {clinic.phoneDisplay}
              </a>
              <a
                href="#book"
                className="rounded-full border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10"
              >
                Book a visit
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
