"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center p-2">
              <Image src="/logo-connectcare.png" alt="ConnectCare Logo" width={48} height={48} className="w-10 h-10" />
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
            <Link href="/faq" className="text-foreground hover:text-primary font-semibold transition-colors">
              FAQ
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
            <Link
              href="/faq"
              className="text-foreground hover:text-primary font-semibold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
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
