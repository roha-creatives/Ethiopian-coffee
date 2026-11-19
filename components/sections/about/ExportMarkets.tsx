import { exportMarkets, markets } from "@/lib/content/about";
import FeatureShowcase from "../FeatureShowcase";

// "(n) Where We Ship" on About: the Why Choose Us band with export markets as plain text rows.
export default function ExportMarkets({ index }: { index: number }) {
  return <FeatureShowcase index={index} {...exportMarkets} items={markets} href={null} imageMode="stretch" />;
}
