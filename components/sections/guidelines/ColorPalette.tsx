import { palette } from "@/lib/content/design-guidelines";
import GuideRow from "./GuideRow";

// Palette rows: Sub Title heading + Text description, then bordered swatch cards (121px
// colour block over the name) in a 5 / 4 / 3-column grid; two columns on phones.
export default function ColorPalette() {
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="flex flex-col gap-gutter p-gutter max-md:p-4">
          {palette.map((group) => (
            <GuideRow
              key={group.title}
              aside={
                <>
                  <h2 className="font-body text-subtitle text-primary capitalize">
                    {group.title}
                  </h2>
                  <p className="text-body text-text">{group.description}</p>
                </>
              }
            >
              <ul className={`grid grid-cols-2 gap-gutter ${group.columns}`}>
                {group.swatches.map((swatch) => (
                  <li
                    key={swatch.name}
                    className="flex flex-col gap-gutter border border-accent p-gutter"
                  >
                    <div
                      className={`min-h-[121px] ${swatch.className}`}
                      aria-hidden="true"
                    />
                    <span className="text-body text-secondary">
                      {swatch.name}
                    </span>
                  </li>
                ))}
              </ul>
            </GuideRow>
          ))}
        </div>
      </div>
    </section>
  );
}
