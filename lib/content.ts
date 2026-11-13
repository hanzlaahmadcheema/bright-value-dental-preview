/**
 * Bright Value Dental — REDESIGN preview content.
 *
 * VERIFIED = from the practice's own website (brightvaluedental.com,
 * 2018 WordPress build), directory listings (Cylex, updated Aug 2026;
 * dentistsranked.com, Nov 2026) and the practice's published patient
 * reviews. No facts invented. Hours use the Aug 2026 directory listing
 * (Mon/Wed/Fri 10–6, Tue/Thu 10–2, Sat 9–2) — the old site says
 * Mon–Fri 10–6; the page tells visitors to call to confirm.
 * UNIVERSAL = standard content every dental website has. The disclaimer
 * banner on the site tells the practice to correct anything wrong.
 */

export const clinic = {
  name: "Bright Value Dental",
  shortName: "Bright Value Dental",
  tagline: "Family dentistry in Southwest Houston since 1998",
  doctor: "Dr. David Yu, DDS",
  doctorShort: "Dr. Yu",
  phoneDisplay: "(713) 668-1600",
  phoneTel: "+17136681600",
  email: "info@brightvaluedental.com",
  address: "5716 Bellaire Blvd, Suite B, Houston, TX 77081",
  area: "Gulfton · Bellaire · Sharpstown · Southwest Houston",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bright+Value+Dental+5716+Bellaire+Blvd+Houston+TX+77081",
  facebookText: "Bright Value Dental — find us on Facebook",
  facebookUrl: "https://www.facebook.com/brightvaluedental",
  websiteText: "Current website — brightvaluedental.com",
  websiteUrl: "https://brightvaluedental.com/",
  rating: "4.9",
  reviewCount: "751",
  since: "1998",
  hours: [
    { days: "Monday, Wednesday, Friday", time: "10:00 AM – 6:00 PM" },
    { days: "Tuesday, Thursday", time: "10:00 AM – 2:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  languages: ["English", "Español", "中文"],
};

export type Service = {
  title: string;
  blurb: string;
  detail: string;
};

/** VERIFIED services — from the practice's own site and listings. */
export const services: Service[] = [
  {
    title: "Check-ups & cleanings",
    blurb: "Routine exams and cleanings for the whole family.",
    detail:
      "Oral examinations, prevention and routine cleanings — the foundation of a healthy smile, for kids and adults alike.",
  },
  {
    title: "Cosmetic dentistry",
    blurb: "Whitening, bonding and crowns to smile freely.",
    detail:
      "Custom whitening trays made in-office, dental bonding and crowns — cosmetic care that lets patients smile freely and confidently.",
  },
  {
    title: "Kids' dentistry",
    blurb: "Gentle care that starts a lifetime of good habits.",
    detail:
      "Our team loves working with children and helping them start a lifetime of great dental health — all ages welcome, from babies to seniors.",
  },
  {
    title: "Dentures",
    blurb: "Complete and partial dentures, custom-fitted.",
    detail:
      "If you would like to replace missing teeth, complete or partial dentures can be an excellent option for many patients.",
  },
  {
    title: "Gum care",
    blurb: "Periodontal treatment for bleeding or swollen gums.",
    detail:
      "If you have experienced bleeding or swelling in your gums, you may have periodontal disease. We treat gum disease and focus on saving teeth where we can.",
  },
  {
    title: "Emergency dentistry",
    blurb: "Same-day visits when you are in pain.",
    detail:
      "Tooth pain, a chipped tooth or an infection — we can usually see patients on the same day they contact us. Walk-ins welcome for urgent needs.",
  },
];

/** VERIFIED — accepted plans, from the practice's own site and listings. */
export const insurance = [
  "Most PPO plans",
  "Medicaid",
  "CHIP & Children's Medicaid",
  "Some Medicare plans",
  "DentaQuest",
  "MCNA",
  "CareCredit",
  "Cash, Visa & Mastercard",
];

/**
 * PARAPHRASED patient reviews, published on the practice's own website
 * homepage (brightvaluedental.com). Names as published there.
 */
export const reviews = [
  {
    name: "Aliya",
    text: "I have a huge fear of dentists, but Dr. Yu is very calm and personable — he made me feel super comfortable. Everyone was sweet and welcoming.",
    source: "Patient review published on the practice's own website",
  },
  {
    name: "Rosie",
    text: "I came in with a dental emergency and the staff got me in immediately. They were extremely understanding — I am forever grateful they gave me my smile back.",
    source: "Patient review published on the practice's own website",
  },
];

/** VERIFIED — from the practice's own site and listings. */
export const faqs = [
  {
    q: "Do you take my insurance?",
    a: "We accept nearly every PPO, PDP and DPPO plan, plus some Medicare plans, CHIP, Medicaid, Children's Medicaid, TMHP, DentaQuest and MCNA. We also take CareCredit, cash, Visa and Mastercard. Call (713) 668-1600 and we will check your eligibility.",
  },
  {
    q: "I am in pain — can I be seen today?",
    a: "Usually, yes. We can often see patients on the same day they contact us, and emergency walk-ins are welcome. Call (713) 668-1600 as early as you can and we will fit you in.",
  },
  {
    q: "Do you see children?",
    a: "Yes — all ages, from babies to seniors. Our team loves working with children and helping them start a lifetime of great dental health.",
  },
  {
    q: "I am nervous about the dentist. Is that okay?",
    a: "Completely. Many of our patients feel the same way. Dr. Yu is calm and personable, we explain everything before we do it, and every treatment room has a TV so you can watch a movie or a show during your visit.",
  },
  {
    q: "What if I don't have insurance?",
    a: "We aim for affordable dentistry that fits your budget, with options for patients without insurance. Call us and we will talk through the cost before anything happens — no surprises.",
  },
  {
    q: "What are your hours?",
    a: "Monday, Wednesday and Friday 10am–6pm; Tuesday and Thursday 10am–2pm; Saturday 9am–2pm; closed Sundays. Hours can change, so call (713) 668-1600 to confirm.",
  },
];
