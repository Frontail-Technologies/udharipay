import Header from '@/components/header'
import Hero from '@/components/hero'
import TrustedBy from '@/components/trusted-by'
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
      <TrustedBy />
      <ProductShowcase />
      <ForBusinesses />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
