import { Link } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@assets/official_Logo2_1779106076501.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <img src={logo} alt="Signcentro Logo" className="h-8 mb-6 brightness-0 invert" />
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Signcentro helps modern organizations prepare, send, sign, track, and manage agreements securely from anywhere.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/product" className="hover:text-white transition-colors">Platform</Link></li>
              <li><Link href="/api" className="hover:text-white transition-colors">API & Developers</Link></li>
              <li><Link href="/whatsapp" className="hover:text-white transition-colors">WhatsApp Signing</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/solutions" className="hover:text-white transition-colors">Financial Services</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Government</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Human Resources</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Legal Teams</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/trust" className="hover:text-white transition-colors">Trust Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/subprocessors" className="hover:text-white transition-colors">Subprocessors</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Signcentro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
