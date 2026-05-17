import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HeroSplitVisual } from "@/components/HeroSplitVisual";
import { FeatureCard } from "@/components/FeatureCard";
import { IndustryCard } from "@/components/IndustryCard";
import { SecurityCard } from "@/components/SecurityCard";
import { CodeBlock } from "@/components/CodeBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Workflow, Code2, MessageCircle, BadgeCheck, Activity, FileCheck2, FilesIcon, Landmark, Building2, Users, Scale, Truck, ShoppingCart, CheckCircle2, Smartphone, Gauge, Sparkles, Globe2, PenLine, Network, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  useSeo("Sign Documents Directly from WhatsApp.", "The fastest way to get documents signed. Signcentro helps businesses send documents securely through WhatsApp.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection 
          badge={
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Enterprise Digital Agreement Platform
            </span>
          }
          headline={
            <>
              Enterprise E-Signatures. <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500">Now Faster with WhatsApp Signing.</span>
            </>
          }
          subheadline="Signcentro helps businesses prepare, send, sign, track, and manage documents securely across web, email, API, and WhatsApp — giving teams the power of a full digital agreement platform with the speed of mobile-first signing."
          buttons={
            <>
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90" asChild>
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary/20 hover:bg-primary/5" asChild>
                <Link href="/contact">Book Enterprise Demo</Link>
              </Button>
            </>
          }
          visual={<HeroSplitVisual />}
          align="center"
        />

        {/* 2. Trust line strip */}
        <section className="py-6 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-base text-muted-foreground font-semibold mb-6">
              Everything you expect from a world-class e-signature platform — plus WhatsApp signing for customers who respond faster on mobile.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {["ECOBANK", "MTN", "STANBIC", "AFRICA RE", "MINISTRY OF FINANCE", "DELOITTE"].map((logo, i) => (
                <div key={i} className="flex items-center gap-8 md:gap-16">
                  <span className="text-lg font-bold tracking-widest">{logo}</span>
                  {i < 5 && <div className="hidden md:block w-px h-6 bg-foreground/20" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Differentiator Section */}
        <section className="py-24 bg-muted/10 border-y relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Power of E-Signatures. The Speed of WhatsApp.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Signcentro delivers a complete digital agreement platform for teams that need secure, compliant, and trackable document signing. Unlike traditional e-signature tools that rely mainly on email and portals, Signcentro adds WhatsApp Signing so recipients can act faster from the channel they already use every day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<PenLine />} 
                title="Full E-Signature Platform" 
                description="Create, send, sign, track, and store agreements securely." 
              />
              <FeatureCard 
                icon={<Network />} 
                title="Multi-Channel Signing" 
                description="Send documents through email, web, API, embedded signing, and WhatsApp." 
              />
              <div className="border-l-4 border-[#25D366] rounded-r-2xl bg-white shadow-sm overflow-hidden hover:shadow-md transition-all">
                <FeatureCard 
                  icon={<Zap className="text-[#25D366]" />} 
                  title="Faster Completion with WhatsApp" 
                  description="Reduce signing delays by reaching recipients on a familiar mobile channel." 
                />
              </div>
              <FeatureCard 
                icon={<ShieldCheck />} 
                title="Enterprise Governance" 
                description="Control users, roles, workflows, audit trails, templates, and access permissions." 
              />
              <FeatureCard 
                icon={<Code2 />} 
                title="Built for Developers" 
                description="Use APIs and webhooks to embed signing into existing applications." 
              />
              <FeatureCard 
                icon={<Landmark />} 
                title="Designed for Regulated Workflows" 
                description="Support banking, HR, legal, procurement, government, and compliance-driven processes." 
              />
            </div>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Platform Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to digitize your operations at scale.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard icon={<ShieldCheck />} title="Secure E-Signatures" description="Legally binding electronic signatures compliant with global enterprise standards." delay={0.1} />
              
              <div className="md:col-span-2 lg:col-span-2 ring-1 ring-[#25D366]/50 rounded-2xl relative shadow-md bg-white">
                <div className="absolute top-4 right-4 bg-[#25D366]/10 text-[#00A884] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A884]"></span>
                  Flagship
                </div>
                <FeatureCard 
                  icon={<MessageCircle className="h-8 w-8 text-[#00A884]" />} 
                  title="WhatsApp Signing" 
                  description="Send documents directly to WhatsApp. Recipients can verify their identity, review documents, sign securely, and receive confirmation without downloading any app." 
                />
              </div>

              <FeatureCard icon={<Workflow />} title="Document Workflows" description="Automate complex signing orders, conditional routing, and multi-party approvals." delay={0.2} />
              <FeatureCard icon={<FilesIcon />} title="Templates & Reusable Documents" description="Save time by standardizing frequently used contracts and forms." delay={0.3} />
              <FeatureCard icon={<FileCheck2 />} title="Audit Trails & Compliance" description="Maintain comprehensive, tamper-evident audit trails for every interaction." delay={0.4} />
              <FeatureCard icon={<Code2 />} title="API & Embedded Signing" description="Embed signing seamlessly into your apps with our robust REST APIs and webhooks." delay={0.5} />
              <FeatureCard icon={<BadgeCheck />} title="Identity Verification" description="Ensure signer authenticity with OTP, email validation, and advanced identity checks." delay={0.6} />
              <FeatureCard icon={<Activity />} title="Admin Dashboard & Reporting" description="Monitor document status, views, and completions instantly from a central dashboard." delay={0.7} />
            </div>
          </div>
        </section>

        {/* 5. Industry Use Cases */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Built for Every Industry</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Tailored solutions to accelerate specific business functions.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <IndustryCard icon={<Landmark className="h-6 w-6" />} industry="Banking & Financial Services" description="Streamline account opening, loan agreements, and KYC processes with bank-grade security." />
              <IndustryCard icon={<Building2 className="h-6 w-6" />} industry="Government & Public Sector" description="Modernize citizen services and internal approvals while maintaining strict compliance." />
              <IndustryCard icon={<Users className="h-6 w-6" />} industry="Human Resources" description="Automate employee onboarding, offer letters, and policy acknowledgments." />
              <IndustryCard icon={<Scale className="h-6 w-6" />} industry="Legal Teams" description="Manage NDAs, vendor contracts, and compliance documents with tamper-proof audit trails." />
              <IndustryCard icon={<Truck className="h-6 w-6" />} industry="Procurement & Supply Chain" description="Accelerate vendor onboarding, MSAs, and purchase orders across global supply chains." />
              <IndustryCard icon={<ShoppingCart className="h-6 w-6" />} industry="Sales & Customer Agreements" description="Close deals faster with frictionless signing experiences for MSAs and quotes." />
            </div>
          </div>
        </section>

        {/* 6. Security */}
        <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">Security You Can Trust</h2>
                <p className="text-xl text-secondary-foreground/70 mb-8">
                  Enterprise-grade protection at every layer. Your data is encrypted, compliant, and always under your control.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-secondary-foreground/20 bg-secondary-foreground/5 text-white py-1.5 px-3">ISO 27001</Badge>
                  <Badge variant="outline" className="border-secondary-foreground/20 bg-secondary-foreground/5 text-white py-1.5 px-3">SOC 2 Type II</Badge>
                  <Badge variant="outline" className="border-secondary-foreground/20 bg-secondary-foreground/5 text-white py-1.5 px-3">GDPR</Badge>
                  <Badge variant="outline" className="border-secondary-foreground/20 bg-secondary-foreground/5 text-white py-1.5 px-3">eIDAS</Badge>
                </div>
                <Button variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/10 text-white" asChild>
                  <Link href="/security">Explore Security Features</Link>
                </Button>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                <SecurityCard icon={<ShieldCheck />} title="End-to-end encryption" bullets={["AES-256 at rest", "TLS 1.3 in transit", "Key management integration"]} />
                <SecurityCard icon={<FileCheck2 />} title="Tamper-proof audit trails" bullets={["Cryptographic hashing", "Comprehensive event logging", "Court-admissible records"]} />
                <SecurityCard icon={<Building2 />} title="Secure cloud infrastructure" bullets={["High availability architecture", "DDoS protection", "Continuous monitoring"]} />
                <SecurityCard icon={<Users />} title="RBAC & API auth" bullets={["Granular permissions", "OAuth 2.0 & API keys", "SSO/SAML integration"]} />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Final CTA */}
        <CTASection 
          title="Ready for Enterprise E-Signatures with Faster Completion?" 
          subtitle="Use Signcentro to manage secure digital agreements across email, web, API, and WhatsApp."
          primaryText="Start Free Trial"
          primaryHref="/pricing"
          secondaryText="Book Enterprise Demo"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}