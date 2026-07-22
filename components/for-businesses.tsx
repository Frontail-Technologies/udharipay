import { Building2, Package, Wrench, Users, Building } from 'lucide-react'

export default function ForBusinesses() {
  const businesses = [
    {
      title: 'MSMEs',
      description: 'Automate recurring collections and focus on growing your business without payment headaches.',
      icon: Building2,
    },
    {
      title: 'Distributors & Wholesalers',
      description: 'Manage distributor payouts and customer collections with seamless settlement.',
      icon: Package,
    },
    {
      title: 'Service Businesses',
      description: 'Collect subscription and service payments automatically with minimal friction.',
      icon: Wrench,
    },
    {
      title: 'Collection Teams',
      description: 'Reduce manual follow-ups and improve collection efficiency with automated workflows.',
      icon: Users,
    },
    {
      title: 'Enterprises',
      description: 'Enterprise-grade infrastructure for large-scale recurring collection operations.',
      icon: Building,
    },
  ]

  return (
    <section id="businesses" className="px-4 md:px-6 py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl  font-bold text-foreground">
            For any business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Whether you&apos;re an MSME or enterprise, UdhariPay scales with your collection needs.
          </p>
        </div>

        {/* Four-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.slice(0, 4).map((business, index) => {
            const IconComponent = business.icon
            return (
              <div key={index} className="space-y-4">
                <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">{business.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{business.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
