import type { ReactNode } from "react";

// Dark card that hosts the contact form (#15200F, 30px radius, 32px padding): the service
// detail "Book an Appointment" card and the contact page form.
export default function FormCard({
  title,
  children,
  className = "",
}: {
  /** Optional H5 title with a Greyscale 70% rule beneath it. */
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col gap-gutter rounded-[30px] bg-panel p-8 ${className}`}>
      {title && (
        <>
          <h3 className="text-h5 text-brand-30">{title}</h3>
          <hr className="border-secondary" />
        </>
      )}
      {children}
    </div>
  );
}
