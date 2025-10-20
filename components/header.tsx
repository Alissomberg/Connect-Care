"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary-foreground">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-primary">ConnectCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-semibold transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="text-foreground hover:text-primary font-semibold transition-colors">
              Sobre nós
            </Link>
            <Link href="/contatos" className="text-foreground hover:text-primary font-semibold transition-colors">
              Contatos
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8"
            >
              <Link href="/escolher-tipo">Entrar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-foreground hover:text-primary font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre nós
            </Link>
            <Link
              href="/contatos"
              className="text-foreground hover:text-primary font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatos
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
              <Link href="/escolher-tipo">Entrar</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
