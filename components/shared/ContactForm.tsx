"use client";

import { useId, useState, type FormEvent } from "react";
import { Check, LoaderCircle } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  acceptedTerms: boolean;
};

type ContactFormProps = {
  /** Called with validated values; may be a Server Action. Throw to show an error. */
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  className?: string;
};

type Status = { state: "idle" | "submitting" | "success" | "error"; message?: string };

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
  acceptedTerms: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// form-contact.json (MetForm): transparent fields with a Primary 70% border, 16px
// radius and padding, Greyscale 10% labels/text. Meant for a dark section background.
const fieldClass =
  "w-full rounded-field border border-brand-70 bg-transparent p-4 font-body text-field text-ink-10 transition-colors placeholder:text-accent hover:text-accent focus:text-ink-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-50/40 aria-invalid:border-error";
const labelClass = "mb-4 block font-body text-body text-ink-10";

export default function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set = <K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (key === "email") setEmailError(null);
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "This field is required.";
    if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email address.";
    return null;
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = validateEmail(values.email);
    setEmailError(error);
    if (error) return;

    if (!onSubmit) {
      setStatus({ state: "error", message: "Form submission isn't configured yet." });
      return;
    }

    setStatus({ state: "submitting" });
    try {
      await onSubmit({ ...values, email: values.email.trim() });
      setValues(initialValues);
      setStatus({ state: "success", message: "Thanks! We'll be in touch soon." });
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again." });
    }
  }

  const fid = (name: string) => `${id}-${name}`;
  const submitting = status.state === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className={`flex flex-col gap-gutter ${className}`}>
      <div className="grid gap-gutter md:grid-cols-2">
        <div>
          <label htmlFor={fid("name")} className={labelClass}>Full Name</label>
          <input
            id={fid("name")}
            name="name"
            autoComplete="name"
            placeholder="John Doe"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={fid("email")} className={labelClass}>
            Email <span className="text-brand-90" aria-hidden="true">*</span>
          </label>
          <input
            id={fid("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="john@companyname.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => values.email && setEmailError(validateEmail(values.email))}
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? fid("email-error") : undefined}
            className={fieldClass}
          />
          {emailError && (
            <p id={fid("email-error")} className="mt-2 text-small text-error">{emailError}</p>
          )}
        </div>
        <div>
          <label htmlFor={fid("phone")} className={labelClass}>Phone</label>
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g +62 123 456"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={fid("location")} className={labelClass}>Location</label>
          <input
            id={fid("location")}
            name="location"
            autoComplete="address-level2"
            placeholder="e.g. Bandar Lampung"
            value={values.location}
            onChange={(e) => set("location", e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={fid("message")} className={labelClass}>Message</label>
        <textarea
          id={fid("message")}
          name="message"
          rows={5}
          placeholder="Write your message or Questions here"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${fieldClass} min-h-[136px] resize-y`}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-2 text-body text-accent">
        <span className="relative mt-[0.3em] flex size-3.5 shrink-0 items-center justify-center">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={values.acceptedTerms}
            onChange={(e) => set("acceptedTerms", e.target.checked)}
            className="peer size-full cursor-pointer appearance-none border border-brand-70 checked:border-brand-90 checked:bg-brand-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-50"
          />
          <Check className="pointer-events-none absolute size-3 text-ink-10 opacity-0 peer-checked:opacity-100" aria-hidden="true" />
        </span>
        I have read and accepted terms and privacy
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className={buttonClasses("primary", "py-[15px] disabled:cursor-wait disabled:opacity-70")}
        >
          Discover Now
          {submitting && <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
        </button>
        <p
          role="status"
          className={`text-small ${status.state === "error" ? "text-error" : "text-support-30"}`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
