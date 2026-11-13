"use client";

import { clinic } from "@/lib/content";

/** Sticky bottom bar on mobile: call + book. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-teal-900/10 bg-white/95 px-3 py-2.5 backdrop-blur lg:hidden">
      <a
        href={`tel:${clinic.phoneTel}`}
        className="flex-1 rounded-full bg-teal-700 px-4 py-3 text-center text-sm font-bold text-white"
      >
        Call {clinic.phoneDisplay}
      </a>
      <a
        href="#book"
        className="flex-1 rounded-full border-2 border-teal-700 px-4 py-3 text-center text-sm font-bold text-teal-800"
      >
        Book a visit
      </a>
    </div>
  );
}
