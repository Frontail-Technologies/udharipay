import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link href="/" className="text-sm text-primary hover:text-primary/80 mb-8 inline-block font-medium">
            ← Back to Home
          </Link>
          
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-sm text-foreground/60 mb-12">
              Last updated: {lastUpdated}
            </p>
            
            <div className="text-foreground/80 space-y-6">
              {children}
            </div>
          </article>

          <div className="border-t border-border mt-16 pt-8">
            <p className="text-sm text-foreground/60">
              If you have any questions about these terms, please contact us at udharipay@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
