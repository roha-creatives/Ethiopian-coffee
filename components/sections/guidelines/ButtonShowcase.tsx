import Button from "@/components/ui/Button";
import StatCounter from "@/components/ui/StatCounter";
import { sampleCounters } from "@/lib/content/design-guidelines";
import GuideRow from "./GuideRow";

const RowTitle = ({ children }: { children: string }) => (
  <h2 className="mt-gutter font-body text-subtitle text-primary capitalize">
    {children}
  </h2>
);
const GroupTitle = ({ children }: { children: string }) => (
  <h3 className="text-body text-text">{children}</h3>
);

// Buttons (sizes, types on a Background Accent band, icon placement) and counters.
// The kit's "Leading" button has its arrow after the label and "Trailling" before; kept.
export default function ButtonShowcase() {
  return (
    <section className="py-24">
      <div className="container-site">
        <div className="flex flex-col gap-gutter p-gutter max-md:p-4">
          <GuideRow aside={<RowTitle>Button</RowTitle>}>
            <div className="flex flex-col gap-gutter p-gutter max-md:px-0">
              <GroupTitle>Button Size Variant</GroupTitle>
              <div className="flex flex-wrap items-center gap-gutter">
                <Button href="#" size="lg">
                  Large
                </Button>
                <Button href="#">Medium</Button>
                <Button href="#" size="sm">
                  small
                </Button>
              </div>
              <hr className="border-border" />
              <GroupTitle>Button Type Variant</GroupTitle>
              <div className="flex flex-wrap items-center gap-gutter bg-background-accent p-gutter">
                <Button href="#">Primary</Button>
                <Button href="#" variant="muted" reveal>
                  Secondary
                </Button>
                <Button href="#" variant="outline" reveal={{ delay: 400 }}>
                  Accent
                </Button>
              </div>
              <hr className="border-border" />
              <GroupTitle>Button Icon</GroupTitle>
              <div className="flex flex-wrap items-center gap-gutter">
                <Button href="#" arrow>
                  Leading
                </Button>
                <Button href="#" arrow="start">
                  Trailling
                </Button>
              </div>
            </div>
          </GuideRow>

          <GuideRow aside={<RowTitle>Counter</RowTitle>}>
            <div className="mt-10 flex flex-wrap justify-center gap-gutter rounded-[20px] p-gutter max-md:px-0 md:justify-between">
              {sampleCounters.map((counter, i) => (
                <StatCounter
                  key={i}
                  {...counter}
                  variant="compact"
                  reveal={{ effect: "fadeInUp" }}
                />
              ))}
            </div>
          </GuideRow>
        </div>
      </div>
    </section>
  );
}
