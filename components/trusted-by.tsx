import { Store, Handshake, Truck, Users } from 'lucide-react'

export default function TrustedBy() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center gap-12">
        
        {/* Title with lines */}
        <div className="flex items-center w-full gap-4 max-w-2xl">
          <div className="h-px bg-border/60 flex-1" />
          <h2 className="text-[13px] md:text-base font-bold text-foreground/80 uppercase tracking-[0.15em] text-center">
            Already Serving Growing Businesses
          </h2>
          <div className="h-px bg-border/60 flex-1" />
        </div>

        {/* Grid: 2x2 on Mobile, 4x1 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-5xl">
          
          {/* MSMEs */}
          <div className="flex flex-col items-center justify-center p-6 md:p-10 border-b md:border-b-0 border-r border-border/40">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4 md:mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
              <Store className="w-10 h-10 md:w-14 md:h-14 text-primary relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-extrabold text-lg md:text-2xl text-foreground tracking-tight">MSMEs</span>
          </div>

          {/* Distributors */}
          <div className="flex flex-col items-center justify-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-border/40">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4 md:mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
              <Handshake className="w-10 h-10 md:w-14 md:h-14 text-primary relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-extrabold text-lg md:text-2xl text-foreground tracking-tight">Distributors</span>
          </div>

          {/* Wholesalers */}
          <div className="flex flex-col items-center justify-center p-6 md:p-10 border-r border-border/40">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4 md:mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
              <Truck className="w-10 h-10 md:w-14 md:h-14 text-primary relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-extrabold text-lg md:text-2xl text-foreground tracking-tight">Wholesalers</span>
          </div>

          {/* Agencies */}
          <div className="flex flex-col items-center justify-center p-6 md:p-10">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4 md:mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
              <Users className="w-10 h-10 md:w-14 md:h-14 text-primary relative z-10" strokeWidth={1.5} />
            </div>
            <span className="font-extrabold text-lg md:text-2xl text-foreground tracking-tight">Agencies</span>
          </div>

        </div>

      </div>
    </section>
  )
}
