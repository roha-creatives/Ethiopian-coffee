import { features } from "@/lib/content/home";
import { whyChooseUs } from "@/lib/content/sections";
import FeatureShowcase from "./FeatureShowcase";

// "(n) Why Choose Us" (home, about-us, our-project, gallery, pricing-plans).
export default function WhyChooseUs({ index }: { index: number }) {
  return <FeatureShowcase index={index} {...whyChooseUs} items={features} />;
}
