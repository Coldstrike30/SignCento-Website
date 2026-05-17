import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { SecurityCard } from "@/components/SecurityCard";
import { FileCheck2, Server, Shield, Lock, Activity, Database, AlertCircle, Bot } from "lucide-react";

export default function Trust() {
  useSeo("Trust Center", "Transparency, uptime, and compliance details.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Trust, Security, and Governance" 
          description="Transparency is our foundation. Here is everything you need to know about how we protect your data."
        />

        {/* Hero Stats */}
        <section className="py-12 bg-secondary text-secondary-foreground border-b border-secondary-foreground/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10">
                <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                <div className="text-sm text-secondary-foreground/70">Historical Uptime</div>
              </div>
              <div className="p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10">
                <div className="text-3xl font-bold text-white mb-1">SOC 2</div>
                <div className="text-sm text-secondary-foreground/70">Type II Audited</div>
              </div>
              <div className="p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10">
                <div className="text-3xl font-bold text-white mb-1">ISO 27001</div>
                <div className="text-sm text-secondary-foreground/70">Certified Platform</div>
              </div>
              <div className="p-6 bg-secondary-foreground/5 rounded-2xl border border-secondary-foreground/10">
                <div className="text-3xl font-bold text-white mb-1">GDPR</div>
                <div className="text-sm text-secondary-foreground/70">Compliant Infrastructure</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <SecurityCard icon={<Shield />} title="Security Practices" bullets={["Annual 3rd-party penetration tests", "Continuous vulnerability scanning", "Bug bounty program", "Strict code review processes"]} />
              <SecurityCard icon={<FileCheck2 />} title="Compliance Standards" bullets={["EU eIDAS Advanced Signatures", "US ESIGN Act and UETA", "HIPAA Business Associate Agreements", "PCI DSS compliance for payments"]} />
              <SecurityCard icon={<Server />} title="Infrastructure & Hosting" bullets={["Primary hosting on AWS and GCP", "Multi-AZ redundancy", "Daily encrypted backups", "Disaster recovery SLAs"]} />
              <SecurityCard icon={<Lock />} title="Privacy" bullets={["Data processing agreements (DPAs)", "Standard Contractual Clauses (SCCs)", "Right to be forgotten workflows", "No data monetization"]} />
              <SecurityCard icon={<Activity />} title="Uptime & Availability" bullets={["Active-active database clustering", "Global CDN edge caching", "Real-time public status page", "Financially backed SLAs"]} />
              <SecurityCard icon={<AlertCircle />} title="Incident Response" bullets={["Defined MTTA and MTTR targets", "Customer notification commitments", "Post-mortem public reports", "24/7 designated incident commanders"]} />
            </div>

            <div className="mt-16 bg-muted/30 rounded-3xl p-8 border">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Responsible AI Readiness</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                As we integrate AI capabilities into document analysis and workflow routing, we maintain strict adherence to responsible AI principles:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><strong>No customer data training:</strong> We never train foundational models on your private agreements.</li>
                <li className="flex gap-2"><strong>Opt-in only:</strong> All AI features require explicit organizational opt-in.</li>
                <li className="flex gap-2"><strong>Human-in-the-loop:</strong> AI provides suggestions; humans make legal determinations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Subprocessors */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Authorized Subprocessors</h2>
              <p className="text-muted-foreground">We carefully vet all third-party vendors who may process data on our behalf.</p>
            </div>

            <div className="border rounded-2xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-medium">Entity Name</th>
                    <th className="px-6 py-4 font-medium">Service Provided</th>
                    <th className="px-6 py-4 font-medium">Corporate Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-card">
                    <td className="px-6 py-4 font-semibold">Amazon Web Services (AWS)</td>
                    <td className="px-6 py-4 text-muted-foreground">Cloud Infrastructure & Storage</td>
                    <td className="px-6 py-4">United States (Global Regions)</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-6 py-4 font-semibold">Google Cloud Platform</td>
                    <td className="px-6 py-4 text-muted-foreground">Analytics & ML Processing</td>
                    <td className="px-6 py-4">United States</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-6 py-4 font-semibold">Cloudflare</td>
                    <td className="px-6 py-4 text-muted-foreground">CDN, WAF, & DDoS Protection</td>
                    <td className="px-6 py-4">United States</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-6 py-4 font-semibold">Twilio</td>
                    <td className="px-6 py-4 text-muted-foreground">SMS & WhatsApp Messaging</td>
                    <td className="px-6 py-4">United States</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-6 py-4 font-semibold">SendGrid</td>
                    <td className="px-6 py-4 text-muted-foreground">Transactional Email Delivery</td>
                    <td className="px-6 py-4">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection 
          title="Require extensive documentation?" 
          subtitle="Enterprise customers can request our full security package including SOC 2 reports and penetration testing summaries."
          primaryText="Request Security Package"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}