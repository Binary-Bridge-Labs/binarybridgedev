"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { format } from "@/lib/format";
import type { Dictionary } from "@/lib/i18n";
import { contactEmail } from "@/lib/site";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-line bg-chip px-4 py-3 text-sm text-fg placeholder:text-muted outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20 aria-[invalid=true]:border-rose-500/70";

const LABEL_CLASS = "text-sm font-medium text-fg";
const ERROR_CLASS = "mt-1.5 text-xs text-rose-500";

type ContactProps = {
  dict: Dictionary;
};

export function Contact({ dict }: ContactProps) {
  const { contact, company, ui } = dict;
  const { form } = contact;

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    projectType: contact.projectTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [opened, setOpened] = useState(false);

  function update(field: keyof FormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  function validate(current: FormValues): FormErrors {
    const next: FormErrors = {};
    if (current.name.trim().length < 2) next.name = form.errorName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email.trim())) next.email = form.errorEmail;
    if (current.message.trim().length < 10) next.message = form.errorMessage;
    return next;
  }

  // Chưa có máy chủ nhận form. Khi hợp lệ, mở ứng dụng email với nội dung đã điền.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setOpened(false);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `${form.subjectPrefix} ${values.projectType} - ${values.name.trim()}`;
    const body = [
      `${form.bodyName}: ${values.name.trim()}`,
      `${form.bodyEmail}: ${values.email.trim()}`,
      `${form.bodyPhone}: ${values.phone.trim() || form.phoneNotProvided}`,
      `${form.bodyProjectType}: ${values.projectType}`,
      "",
      values.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate py-16 lg:py-20">
      <div aria-hidden="true" className="aurora-blob -z-10 right-0 top-1/4 h-[420px] w-[420px] bg-blue-600/30" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{contact.eyebrow}</p>
          <h2 id="contact-title" className="mt-4 text-balance text-3xl font-bold leading-tight text-fg sm:text-4xl lg:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-body sm:text-lg">{contact.description}</p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-muted">{ui.emailLabel}</dt>
              <dd className="mt-1 text-fg">
                <a href={`mailto:${contactEmail}`} className="hover:text-accent">
                  {contactEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">{ui.addressLabel}</dt>
              <dd className="mt-1 text-fg">{company.address}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <MagneticButton variant="ghost" href={`mailto:${contactEmail}?subject=${encodeURIComponent(contact.consultCta)}`}>
              {contact.consultCta}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form noValidate onSubmit={handleSubmit} className="glass glow-border rounded-3xl p-7 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={LABEL_CLASS}>
                  {form.name} <span className="text-accent">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={FIELD_CLASS}
                  placeholder={form.namePlaceholder}
                />
                {errors.name ? (
                  <p id="contact-name-error" className={ERROR_CLASS}>
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className={LABEL_CLASS}>
                  {form.email} <span className="text-accent">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={FIELD_CLASS}
                  placeholder={form.emailPlaceholder}
                />
                {errors.email ? (
                  <p id="contact-email-error" className={ERROR_CLASS}>
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-phone" className={LABEL_CLASS}>
                  {form.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={update("phone")}
                  className={FIELD_CLASS}
                  placeholder={form.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="contact-type" className={LABEL_CLASS}>
                  {form.projectType}
                </label>
                <select
                  id="contact-type"
                  name="projectType"
                  value={values.projectType}
                  onChange={update("projectType")}
                  className={FIELD_CLASS}
                >
                  {contact.projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-canvas text-fg">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className={LABEL_CLASS}>
                {form.message} <span className="text-accent">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={update("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${FIELD_CLASS} resize-y`}
                placeholder={form.messagePlaceholder}
              />
              {errors.message ? (
                <p id="contact-message-error" className={ERROR_CLASS}>
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <MagneticButton type="submit" className="w-full sm:w-auto">
                {form.submit}
              </MagneticButton>
              <p role="status" aria-live="polite" className="text-sm text-muted">
                {opened ? format(form.sentNote, { email: contactEmail }) : form.idleNote}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
