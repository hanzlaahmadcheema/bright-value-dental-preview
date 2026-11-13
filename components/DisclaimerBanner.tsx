"use client";

import { useState } from "react";

/**
 * Preview-redesign notice. This site is a fresh redesign concept built
 * from the practice's public information — it is not the practice's
 * current website. Anything wrong gets corrected on request.
 */
export function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="bg-teal-950 text-white">
      <div className="container-responsive flex items-start gap-3 py-3 text-[13px] leading-snug sm:items-center sm:text-sm">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey text-xs font-bold text-teal-950"
        >
          i
        </span>
        <p className="flex-1">
          <strong>Preview redesign for Bright Value Dental.</strong> We
          rebuilt this site from the practice&rsquo;s public information —
          services, hours, insurance and reviews — because the current
          website is from 2018. Some details may be wrong; tell us what to
          fix and we will correct it.
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss notice"
          className="shrink-0 rounded-full border border-white/40 px-2.5 py-1 text-xs font-semibold hover:bg-white/10"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
