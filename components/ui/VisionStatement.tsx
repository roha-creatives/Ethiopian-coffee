import SectionLabel from "@/components/ui/SectionLabel";
import { vision } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

// "(3) Our Visison" label beside a 400px Big Text statement (about-us, project-detail).
export default function VisionStatement({ index = 3 }: { index?: number }) {
  return (
    <div className="flex justify-between gap-gutter">
      <SectionLabel index={index} label={vision.label} className="shrink-0" reveal />
      <p className="mb-paragraph w-[400px] max-w-full text-big-text indent-lead text-text" {...reveal(200)}>
        {vision.copy}
      </p>
    </div>
  );
}
