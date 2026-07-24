'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#platform', label: 'How It Works' },
    { href: '#businesses', label: 'For Businesses' },
    { href: '#faq', label: 'FAQs' },
  ]

  return (
    <>
      {/* Floating navbar wrapper */}
      <div className="fixed top-4 left-0 right-0 z-50 px-6">
        <header
          className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${scrolled
            ? 'bg-background/90 backdrop-blur-md border-border shadow-lg shadow-foreground/5'
            : 'bg-background/70 backdrop-blur-sm border-border/60 shadow-sm'
            }`}
        >
          <nav className="flex h-14 items-center justify-between px-5">
            {/* Logo */}
            <Link href="/" className="flex items-center font-bold italic text-xl tracking-tight">
              <span className="text-foreground">UDHARI</span>
              <span className="text-primary">PAY</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="mailto:udharipay@gmail.com"
                className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                Contact Us
              </a>
            </div>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </nav>
        </header>
      </div>


      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 md:hidden z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed left-4 right-4 top-20 bg-card border border-border rounded-2xl z-40 md:hidden shadow-xl overflow-hidden">
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-border mt-3 pt-3">
                <a 
                  href="mailto:udharipay@gmail.com"
                  className="flex w-full items-center justify-center h-11 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
