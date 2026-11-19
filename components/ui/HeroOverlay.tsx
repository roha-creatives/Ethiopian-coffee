// Readability layers over a hero photo, all transparent so the image still shows:
// a flat navy tint, a fade from the top behind the header menu, and a fade rising from the
// bottom-left behind the badge, title and intro. Sits behind the hero's content (-z-10).
export default function HeroOverlay({ tint = "bg-background-accent/40" }: { tint?: string }) {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <div className={`absolute inset-0 ${tint}`} />
      <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-ink-90/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-90/85 via-ink-90/35 via-45% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-ink-90/50 via-ink-90/10 via-55% to-transparent" />
    </div>
  );
}
