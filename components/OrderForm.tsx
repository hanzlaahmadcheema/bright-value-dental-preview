"use client";

import { useState } from "react";
import { services } from "@/lib/content";

/**
 * Appointment request form. Client-side validation only — the request
 * is confirmed on screen; the office calls back to confirm the time.
 */
export function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState(services[0].title);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (!name.trim()) errs.push("Please enter your name.");
    if (!phone.trim()) errs.push("Please enter your phone number.");
    if (!date.trim()) errs.push("Please choose a preferred day.");
    setErrors(errs);
    if (errs.length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-200 bg-mint p-6 text-center sm:p-8" role="status">
        <p className="font-serif text-2xl font-semibold text-teal-950">
          Thanks, {name} — your request is in.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          You asked for <strong>{service}</strong> on{" "}
          <strong>{date}</strong>. The office will call you at{" "}
          <strong>{phone}</strong> to confirm a time.
          {notes.trim() ? ` Your note: “${notes.trim()}”.` : ""}
        </p>
        <p className="mt-3 text-xs text-muted">
          In pain right now? Don&rsquo;t wait for a callback — call{" "}
          <a href="tel:+17136681600" className="font-semibold text-teal-800 underline">
            (713) 668-1600
          </a>{" "}
          and we will fit you in today if we can.
        </p>
      </div>
    );
  }

  const input =
    "w-full rounded-xl border border-teal-900/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20";
  const label = "mb-1.5 block text-sm font-bold text-teal-950";

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-teal-900/10 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-teal-950">
        Request an appointment
      </h3>
      <p className="mt-1 text-sm text-muted">
        Fill this in and the office will call you back to confirm a time.
        Same-day emergency visits are usually available.
      </p>
      {errors.length > 0 && (
        <ul className="mt-4 space-y-1 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ord-name" className={label}>
            Your name
          </label>
          <input
            id="ord-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Maria Gonzalez"
            className={input}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="ord-phone" className={label}>
            Phone number
          </label>
          <input
            id="ord-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(713) 555-0100"
            className={input}
            autoComplete="tel"
            inputMode="tel"
          />
        </div>
        <div>
          <label htmlFor="ord-service" className={label}>
            What do you need?
          </label>
          <select
            id="ord-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={input}
          >
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="ord-date" className={label}>
            Preferred day
          </label>
          <input
            id="ord-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={input}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ord-notes" className={label}>
            Anything we should know? <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="ord-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Tooth pain on the upper left, or: I am nervous about the dentist."
            rows={3}
            className={input}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-teal-700 px-6 py-3.5 text-base font-bold text-white hover:bg-teal-800"
      >
        Request my appointment
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        No payment needed to request. The office confirms every appointment
        by phone.
      </p>
    </form>
  );
}
