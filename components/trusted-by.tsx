export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-center md:text-left">
          Already serving growing businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50 grayscale select-none">
          <span className="font-extrabold text-xl tracking-tight">MSMEs</span>
          <span className="font-extrabold text-xl tracking-tight">Distributors</span>
          <span className="font-extrabold text-xl tracking-tight">Wholesalers</span>
          <span className="font-extrabold text-xl tracking-tight">Agencies</span>
        </div>
      </div>
    </section>
  )
}
