import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/official_Logo_1779048434158.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Signcentro Logo" className="h-8" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/product" className="text-foreground/80 hover:text-foreground transition-colors">Product</Link>
          <Link href="/solutions" className="text-foreground/80 hover:text-foreground transition-colors">Solutions</Link>
          <Link href="/whatsapp" className="text-foreground/80 hover:text-foreground transition-colors">WhatsApp Signing</Link>
          <Link href="/api" className="text-foreground/80 hover:text-foreground transition-colors">API</Link>
          <Link href="/security" className="text-foreground/80 hover:text-foreground transition-colors">Security</Link>
          <Link href="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/resources" className="text-foreground/80 hover:text-foreground transition-colors">Resources</Link>
          <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">Company</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Login</Link>
          <Button variant="outline" asChild>
            <Link href="/contact">Book Demo</Link>
          </Button>
          <Button asChild>
            <Link href="/pricing">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-4">
            <Link href="/product" onClick={() => setIsOpen(false)}>Product</Link>
            <Link href="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link href="/whatsapp" onClick={() => setIsOpen(false)}>WhatsApp Signing</Link>
            <Link href="/api" onClick={() => setIsOpen(false)}>API</Link>
            <Link href="/security" onClick={() => setIsOpen(false)}>Security</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/resources" onClick={() => setIsOpen(false)}>Resources</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>Company</Link>
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Book Demo</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/pricing" onClick={() => setIsOpen(false)}>Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
