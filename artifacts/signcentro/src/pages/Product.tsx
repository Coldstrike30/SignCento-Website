import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { WorkflowStep } from "@/components/WorkflowStep";
import { FeatureCard } from "@/components/FeatureCard";
import { FileText, Wand2, Smartphone, Eye, ShieldAlert, Database, SplitSquareVertical, BellRing, History, Users, Send, ShieldCheck, FileCheck2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Product() {
  useSeo("Product Features", "One platform for every digital agreement. Prepare, route, sign, and manage.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <PageHeader 
          title="A Complete Digital Agreement Platform" 
          description="From document preparation and template management to multi-party signing, workflow automation, API integrations, compliance logs, and secure storage, Signcentro gives organizations the tools to manage digital agreements end to end. WhatsApp Signing extends the platform by making signing easier for mobile-first recipients."
        />
        
        <div className="bg-primary/5 border-y border-primary/10 py-4">
          <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-primary text-sm font-medium">
            <SplitSquareVertical className="h-5 w-5" />
            <span>Signcentro supports email, web, API, embedded, and WhatsApp signing — all included on every plan.</span>
          </div>
        </div>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">End-to-End Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Robust features designed to handle complex organizational workflows securely.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<FileText />} title="Document Creation" description="Upload PDFs, Word docs, or generate documents dynamically using pre-approved templates." />
              <FeatureCard icon={<Wand2 />} title="Workflow Automation" description="Define complex routing rules, conditional logic, and sequential or parallel signing orders." />
              <FeatureCard icon={<Smartphone className="text-[#00A884]" />} title="Multi-Channel Signing" description="Deliver signature requests via WhatsApp, email, or SMS to meet signers where they are." />
              <FeatureCard icon={<Eye />} title="Real-Time Tracking" description="Monitor view status, signature progress, and bottlenecks from a centralized dashboard." />
              <FeatureCard icon={<ShieldAlert />} title="Enterprise Administration" description="Manage users, teams, permissions, and billing across multiple departments seamlessly." />
              <FeatureCard icon={<Database />} title="Document Repository" description="Store all completed agreements in a secure, searchable, and compliant central repository." />
              <FeatureCard icon={<SplitSquareVertical />} title="Approval Routing" description="Add internal approvers who need to review documents before they are sent to external parties." />
              <FeatureCard icon={<BellRing />} title="Notifications & Reminders" description="Automate follow-ups and expiration alerts to keep agreements moving forward." />
              <FeatureCard icon={<History />} title="Audit Trails" description="Generate legally binding, tamper-evident logs of every action taken on a document." />
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">The Agreement Lifecycle</h2>
              <p className="text-xl text-muted-foreground">How documents flow through Signcentro.</p>
            </div>
            
            <div className="flex flex-col gap-0 pl-4 md:pl-8 border-l border-primary/20 ml-4 md:ml-0 relative">
              <WorkflowStep step={1} icon={<FileText />} title="Upload Document" description="Start with a PDF, Word file, or select a pre-configured template from your library." />
              <WorkflowStep step={2} icon={<Users />} title="Add Recipients" description="Specify signers, approvers, and CCs. Assign specific roles and authentication methods." />
              <WorkflowStep step={3} icon={<Wand2 />} title="Configure Workflow" description="Set up signing order, conditional routing, and reminders." />
              
              <div className="relative">
                <WorkflowStep step={4} icon={
                  <div className="flex flex-col items-center">
                    <Send />
                    <span className="mt-1 text-[10px] bg-[#25D366]/20 text-[#00A884] px-1.5 py-0.5 rounded-full whitespace-nowrap">WhatsApp</span>
                  </div>
                } title="Choose Delivery Channel" description="Select delivery via Email, Web Portal, API, or WhatsApp depending on recipient preference." />
              </div>
              
              <WorkflowStep step={5} icon={<ShieldCheck />} title="Recipient Verification" description="The recipient verifies their identity using a One-Time Password or other configured methods before accessing the document." />
              <WorkflowStep step={6} icon={<FileCheck2 />} title="Review & Sign" description="The user reviews the document securely and signs." />
              <WorkflowStep step={7} icon={<History />} title="Audit Trail Generated" description="A legally binding, tamper-evident log of the entire delivery and signing process is created." />
              <WorkflowStep step={8} icon={<Database />} title="Completed Document Stored" description="The finalized agreement is securely archived and easily searchable." />
            </div>
          </div>
        </section>

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