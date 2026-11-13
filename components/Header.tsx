"use client";

import { useState } from "react";
import { clinic } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Dr. Yu", href: "#doctor" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-white/95 backdrop-blur">
      <div className="container-responsive flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 font-serif text-lg font-semibold text-honey"
          >
            B
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-teal-950">
              Bright Value Dental
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-muted">
              Family dentistry since 1998
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink/80 hover:text-teal-700"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinic.phoneTel}`}
            className="hidden rounded-full bg-teal-700 px-4 py-2 text-sm font-bold text-white hover:bg-teal-800 sm:block"
          >
            Call {clinic.phoneDisplay}
          </a>
          <a
            href="#book"
            className="rounded-full border-2 border-teal-700 px-4 py-2 text-sm font-bold text-teal-800 hover:bg-teal-50"
          >
            Book a visit
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-teal-950 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-teal-900/10 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-base font-semibold text-ink hover:bg-mint"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${clinic.phoneTel}`}
            className="mt-1 block rounded-full bg-teal-700 px-4 py-2.5 text-center text-base font-bold text-white"
          >
            Call {clinic.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
