"use client";

import { useId, useState, type FormEvent } from "react";
import { ChevronDown, LoaderCircle } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { inquiryForm } from "@/lib/content/contact";

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  country: string;
  interest: string;
  message: string;
};

type Field = keyof ContactFormValues;

type ContactFormProps = {
  /** Called with validated values; may be a Server Action. Throw to show an error. */
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  className?: string;
};

type Status = { state: "idle" | "submitting" | "success" | "error"; message?: string };

const initialValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  country: "",
  interest: "",
  message: "",
};

/** Required fields, as on ethiopiancoffee.net/contact. */
const required: Field[] = ["name", "email", "message"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// form-contact.json (MetForm): transparent fields with a Primary 70% border, 16px
// radius and padding, Greyscale 10% labels/text. Meant for a dark section background.
const fieldClass =
  "w-full rounded-field border border-brand-70 bg-transparent p-4 font-body text-field text-ink-10 transition-colors placeholder:text-accent hover:text-accent focus:text-ink-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-50/40 aria-invalid:border-error";
const labelClass = "mb-4 block font-body text-body text-ink-10";

function validate(key: Field, value: string): string | null {
  if (required.includes(key) && !value.trim()) return "This field is required.";
  if (key === "email" && value.trim() && !EMAIL_RE.test(value.trim())) return "Please enter a valid email address.";
  return null;
}

export default function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const id = useId();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const set = (key: Field, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: Partial<Record<Field, string>> = {};
    for (const key of required) {
      const error = validate(key, values[key]);
      if (error) found[key] = error;
    }
    setErrors(found);
    if (Object.keys(found).length) return;

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

  /** Label + input/textarea/select wiring shared by every field. */
  const field = (key: Field, label: string) => ({
    label: (
      <label htmlFor={fid(key)} className={labelClass}>
        {label}
        {required.includes(key) && (
          <span className="text-brand-90" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
    ),
    props: {
      id: fid(key),
      name: key,
      value: values[key],
      required: required.includes(key),
      onBlur: () => values[key] && setErrors((e) => ({ ...e, [key]: validate(key, values[key]) ?? undefined })),
      "aria-invalid": errors[key] ? true : undefined,
      "aria-describedby": errors[key] ? fid(`${key}-error`) : undefined,
    },
    error: errors[key] && (
      <p id={fid(`${key}-error`)} className="mt-2 text-small text-error">
        {errors[key]}
      </p>
    ),
  });

  const name = field("name", "Full Name");
  const company = field("company", "Company");
  const email = field("email", "Email Address");
  const country = field("country", "Destination Market");
  const interest = field("interest", "Coffee of Interest");
  const message = field("message", "Message");

  return (
    <form noValidate onSubmit={handleSubmit} className={`flex flex-col gap-gutter ${className}`}>
      <div className="grid gap-gutter md:grid-cols-2">
        <div>
          {name.label}
          <input
            {...name.props}
            autoComplete="name"
            placeholder="Your name"
            onChange={(e) => set("name", e.target.value)}
            className={fieldClass}
          />
          {name.error}
        </div>
        <div>
          {company.label}
          <input
            {...company.props}
            autoComplete="organization"
            placeholder="Your company"
            onChange={(e) => set("company", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          {email.label}
          <input
            {...email.props}
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            onChange={(e) => set("email", e.target.value)}
            className={fieldClass}
          />
          {email.error}
        </div>
        <div>
          {country.label}
          <input
            {...country.props}
            autoComplete="country-name"
            placeholder="e.g. USA, Germany, Saudi Arabia, China"
            onChange={(e) => set("country", e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        {interest.label}
        <div className="relative">
          <select
            {...interest.props}
            onChange={(e) => set("interest", e.target.value)}
            className={`${fieldClass} cursor-pointer appearance-none pr-12 ${values.interest ? "" : "text-accent"} [&>option]:bg-panel [&>option]:text-ink-10`}
          >
            <option value="">Select an option</option>
            {inquiryForm.interests.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-accent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        {message.label}
        <textarea
          {...message.props}
          rows={5}
          placeholder="Tell us about your sourcing needs, volume, frequency, destination port..."
          onChange={(e) => set("message", e.target.value)}
          className={`${fieldClass} min-h-[136px] resize-y`}
        />
        {message.error}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className={buttonClasses("primary", "py-[15px] disabled:cursor-wait disabled:opacity-70")}
        >
          Send Inquiry
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
