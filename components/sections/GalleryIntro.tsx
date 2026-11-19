import CoverImage from "@/components/ui/CoverImage";
import IconList from "@/components/ui/IconList";
import SectionLabel from "@/components/ui/SectionLabel";
import { galleryIntro } from "@/lib/content/gallery";
import { reveal } from "@/lib/reveal";

// gallery.json section 2: same frame as the About block (label + photo 30% beside heading,
// copy and highlight list 60%) with a 200px photo and no counters.
export default function GalleryIntro() {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
        <div className="flex w-full flex-col justify-between gap-gutter lg:w-[30%]">
          <SectionLabel index={2} label={galleryIntro.label} reveal />
          <CoverImage
            src={galleryIntro.image}
            alt={galleryIntro.imageAlt}
            sizes="(min-width: 1025px) 30vw, 100vw"
            reveal={{ delay: 200 }}
            className="h-[350px] rounded-2xl md:h-[400px] lg:h-[200px]"
          />
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-[60%]">
          <h2 {...reveal(200)}>{galleryIntro.heading}</h2>
          <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row">
            <p className="text-body indent-lead text-text md:w-1/2" {...reveal(100)}>
              {galleryIntro.copy}
            </p>
            <IconList
              items={galleryIntro.categories}
              variant="highlight"
              className="max-md:w-full"
              reveal={{ delay: 200 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
