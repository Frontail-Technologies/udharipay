import Header from '@/components/header'
import Hero from '@/components/hero'
import StatsCards from '@/components/stats-cards'
import ProductShowcase from '@/components/product-showcase'
import ForBusinesses from '@/components/for-businesses'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <StatsCards />
      <ProductShowcase />
      <ForBusinesses />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
