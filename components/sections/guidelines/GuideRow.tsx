import type { ReactNode } from "react";

// Design-guide row: title column beside the content; stacks below desktop. The kit sizes
// the columns 30% / 100%, so both shrink and the title column lands near 23%; the flex
// bases reproduce that.
export default function GuideRow({
  aside,
  children,
  className = "",
}: {
  aside: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-gutter lg:flex-row ${className}`}>
      <div className="flex flex-col gap-gutter lg:shrink lg:basis-[30%]">
        {aside}
      </div>
      <div className="min-w-0 lg:shrink lg:basis-full">{children}</div>
    </div>
  );
}
