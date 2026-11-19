import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import IconList from "@/components/ui/IconList";
import SideLabelHeader from "@/components/ui/SideLabelHeader";
import { customPlan, pricingPlans, type PricingPlan } from "@/lib/content/pricing";
import { pricingIntro } from "@/lib/content/sections";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// Plan name (Text) over tagline (H4), 12px apart.
function PlanHeading({ name, tagline, dark, reveal }: { name: string; tagline: string; dark?: boolean; reveal?: RevealSpec }) {
  return (
    <div {...revealAttrs(reveal)}>
      <div className={`mb-3 text-body ${dark ? "text-accent" : "text-text"}`}>{name}</div>
      <h3 className={`text-h4 ${dark ? "text-lemon-50" : "text-primary"}`}>{tagline}</h3>
    </div>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="flex w-full flex-col justify-between gap-gutter rounded-2xl bg-greyscale-10 p-gutter md:w-[calc(50%-12px)] lg:w-auto lg:flex-1">
      <div className="flex flex-col gap-12">
        <PlanHeading name={plan.name} tagline={plan.tagline} reveal />
        <IconList items={plan.features} variant="plan" reveal={{ delay: 200 }} />
      </div>
      <div className="flex flex-col gap-gutter">
        <p className="font-heading text-h4 text-secondary">{plan.price}</p>
        <Button href={plan.cta.href} arrow className="w-full">
          {plan.cta.label}
        </Button>
      </div>
    </article>
  );
}

// "(n) Pricing Plans" (our-project, pricing-plans): label beside a 45% heading, then a dark
// custom-plan card (min 600px) and two light plan cards. Tablet: custom card full width,
// plans 2-up; phones stack.
export default function PricingSection({ index }: { index: number }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col gap-16">
        <SideLabelHeader index={index} {...pricingIntro} />

        <div className="flex flex-wrap gap-gutter lg:flex-nowrap">
          <article className="flex min-h-[600px] w-full flex-col justify-between gap-gutter rounded-2xl bg-background-accent p-gutter lg:w-auto lg:flex-1">
            <div className="flex flex-col items-start gap-gutter">
              <PlanHeading name={customPlan.name} tagline={customPlan.tagline} dark reveal />
              <p className="mb-paragraph text-body indent-lead text-text">{customPlan.description}</p>
              <Button href={customPlan.cta.href} arrow reveal={{ delay: 400 }}>
                {customPlan.cta.label}
              </Button>
            </div>
            <CoverImage src={customPlan.image} sizes="(min-width: 1025px) 33vw, 100vw" className="h-[250px] rounded-2xl" />
          </article>
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
