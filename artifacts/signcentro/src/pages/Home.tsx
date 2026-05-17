import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { DashboardMockup } from "@/components/DashboardMockup";
import { FeatureCard } from "@/components/FeatureCard";
import { IndustryCard } from "@/components/IndustryCard";
import { SecurityCard } from "@/components/SecurityCard";
import { CodeBlock } from "@/components/CodeBlock";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShieldCheck, Workflow, Code2, MessageCircle, BadgeCheck, Activity, FileCheck2, FilesIcon, Landmark, Building2, Users, Scale, Truck, ShoppingCart, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  useSeo("Sign Documents Faster. Close Deals Smarter.", "Enterprise-grade e-signature platform built for scale.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection 
          headline={
            <>
              Sign Documents Faster. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Close Deals Smarter.</span>
            </>
          }
          subheadline="Signcentro helps modern organizations prepare, send, sign, track, and manage agreements securely from anywhere."
          buttons={
            <>
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
                <Link href="/contact">Book Enterprise Demo</Link>
              </Button>
            </>
          }
          visual={<DashboardMockup />}
          align="left"
        />

        {/* 2. Trust line strip */}
        <section className="py-10 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              Built for secure approvals, contracts, onboarding, procurement, compliance, and workflow automation.
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

        {/* 3. Why Signcentro */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">More Than E-Signatures — A Complete Digital Agreement Platform</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Move beyond simple signing. Signcentro automates your entire agreement lifecycle from document generation to secure storage and compliance archiving.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "End-to-end document lifecycle management",
                "Advanced role-based access control (RBAC)",
                "Bank-grade security and encryption",
                "Seamless API integration capabilities",
                "Real-time audit trails and tracking",
                "Customizable approval workflows",
                "Multi-channel signing including WhatsApp"
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-lg text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Platform Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to digitize your operations at scale.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard icon={<Workflow />} title="Smart Document Workflows" description="Automate complex signing orders, conditional routing, and multi-party approvals." delay={0} />
              <FeatureCard icon={<ShieldCheck />} title="Secure E-Signatures" description="Legally binding electronic signatures compliant with global enterprise standards." delay={0.1} />
              <FeatureCard icon={<Code2 />} title="API & Developer Platform" description="Embed signing seamlessly into your apps with our robust REST APIs and webhooks." delay={0.2} />
              <FeatureCard icon={<MessageCircle />} title="WhatsApp Signing" description="Reach users where they are by delivering signature requests directly via WhatsApp." delay={0.3} />
              <FeatureCard icon={<BadgeCheck />} title="Identity Verification" description="Ensure signer authenticity with OTP, email validation, and advanced identity checks." delay={0.4} />
              <FeatureCard icon={<Activity />} title="Real-Time Tracking" description="Monitor document status, views, and completions instantly from a central dashboard." delay={0.5} />
              <FeatureCard icon={<FileCheck2 />} title="Compliance & Governance" description="Maintain comprehensive, tamper-evident audit trails for every interaction." delay={0.6} />
              <FeatureCard icon={<FilesIcon />} title="Templates & Reusable Docs" description="Save time by standardizing frequently used contracts and forms." delay={0.7} />
            </div>
          </div>
        </section>

        {/* 5. Industry Use Cases */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
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

        {/* 7. API */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Developer-Friendly APIs</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Embed secure, legally binding electronic signatures directly into your applications in minutes. Built by developers, for developers.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>RESTful architecture with predictable resource URLs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Comprehensive webhooks for real-time state sync</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>SDKs available for TypeScript, Python, Go, and Java</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="/api">Explore the API</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 w-full">
                <CodeBlock 
                  title="Create a signature request"
                  code={`POST /api/v1/signature-requests
Host: api.signcentro.com
Authorization: Bearer sc_live_***

{
  "document_url": "https://example.com/contract.pdf",
  "signers": [
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "role": "Client"
    }
  ],
  "callback_url": "https://app.example.com/webhook",
  "expires_in_hours": 72
}

// 201 Created
{
  "request_id": "req_8f92a4b1",
  "status": "pending",
  "signing_url": "https://signcentro.com/s/req_8f92a4b1"
}`} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Trusted by Enterprise Leaders</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Signcentro reduced our contract turnaround time from weeks to hours. The WhatsApp signing feature was a game changer for reaching clients."
                name="Chinedu Okafor"
                title="Head of Operations"
                company="Apex Trust Bank"
                initial="CO"
              />
              <TestimonialCard 
                quote="The API was incredibly easy to integrate into our core banking system. We had automated loan agreements running in production within two sprints."
                name="Amina Diallo"
                title="CTO"
                company="Sahel Fintech"
                initial="AD"
              />
              <TestimonialCard 
                quote="Compliance is non-negotiable for us. Signcentro provides the exact audit trails and identity verification we need to satisfy our regulators."
                name="Thabo Nkosi"
                title="HR Director"
                company="MetroTel"
                initial="TN"
              />
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <CTASection 
          title="Ready to Go Paperless?" 
          subtitle="Join thousands of organizations streamlining their agreements with Signcentro."
        />
      </main>

      <Footer />
    </div>
  );
}
