import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      <div className="container-responsive grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 font-serif text-lg font-semibold text-honey"
            >
              B
            </span>
            <span className="font-serif text-lg font-semibold">
              Bright Value Dental
            </span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Family dentistry in Southwest Houston since 1998. General,
            cosmetic and kids&rsquo; dentistry for all ages — with
            five-star customer service and care that fits your budget.
          </p>
          <p className="mt-3 text-sm text-white/70">
            English · Español · 中文
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-honey">
            Visit us
          </h2>
          <address className="mt-3 text-sm not-italic leading-relaxed text-white/80">
            {clinic.address}
            <br />
            <a href={`tel:${clinic.phoneTel}`} className="font-semibold text-white hover:underline">
              {clinic.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${clinic.email}`} className="hover:underline">
              {clinic.email}
            </a>
          </address>
          <p className="mt-3 text-sm text-white/70">
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Get directions
            </a>
            {" · "}
            <a href={clinic.facebookUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
              Facebook
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-honey">
            Hours
          </h2>
          <ul className="mt-3 space-y-1.5 text-sm text-white/80">
            {clinic.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="font-semibold text-white">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-white/60">
            Hours can change — call to confirm.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-responsive py-4 text-center text-xs text-white/50">
          Preview redesign concept — built from the practice&rsquo;s public
          information. Not the practice&rsquo;s current website.
        </p>
      </div>
    </footer>
  );
}
