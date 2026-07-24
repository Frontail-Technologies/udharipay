export default function TrustedBy() {
  return (
    <section className="border-y border-border/60 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col items-center justify-center gap-8">
        <p className="text-[11px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest text-center">
          Already serving growing businesses
        </p>
        <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-y-6 gap-x-4 md:gap-14 opacity-60 grayscale select-none text-center">
          <span className="font-extrabold text-lg md:text-xl tracking-tight">MSMEs</span>
          <span className="font-extrabold text-lg md:text-xl tracking-tight">Distributors</span>
          <span className="font-extrabold text-lg md:text-xl tracking-tight">Wholesalers</span>
          <span className="font-extrabold text-lg md:text-xl tracking-tight">Agencies</span>
        </div>
      </div>
    </section>
  )
}
