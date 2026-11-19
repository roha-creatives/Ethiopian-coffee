import { specimenText, typeSpecimens } from "@/lib/content/design-guidelines";

// "line_text" divider: label, then a Greyscale 30% rule filling the column.
function LineLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-body text-small font-medium text-secondary capitalize">
        {children}
      </span>
      <span className="h-px flex-1 bg-accent/60" aria-hidden="true" />
    </div>
  );
}

// Heading / Body specimen cards: 30px radius, soft shadow; each row is a 30% label line
// beside the sample (85% wide) set in that style. Columns shrink from 30% / 100% bases as in
// the kit (see GuideRow).
export default function TypeSpecimens() {
  return (
    <section className="py-24">
      <div className="container-site flex flex-col gap-gutter">
        {typeSpecimens.map((card) => (
          <div
            key={card.title}
            className="rounded-[30px] px-4 py-10 shadow-[0_0_40px_-12px_rgba(0,0,0,0.06)] md:p-gutter"
          >
            <h2 className="mb-gutter font-heading text-title text-secondary">
              {card.title}
            </h2>
            <hr className="mb-gutter border-border" />
            {card.rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col md:flex-row md:items-center"
              >
                <div className="w-full md:shrink md:basis-[30%]">
                  <LineLabel>{row.label}</LineLabel>
                </div>
                <div className="overflow-hidden py-gutter md:shrink md:basis-full md:p-gutter">
                  <p className={`lg:w-[85%] ${row.className}`}>
                    {specimenText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
