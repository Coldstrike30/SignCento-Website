import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { WorkflowStep } from "@/components/WorkflowStep";
import { FeatureCard } from "@/components/FeatureCard";
import { FileText, Wand2, Smartphone, Eye, ShieldAlert, Database, SplitSquareVertical, BellRing, History, Users } from "lucide-react";

export default function Product() {
  useSeo("Product Features", "One platform for every digital agreement. Prepare, route, sign, and manage.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <PageHeader 
          title="One Platform for Every Digital Agreement" 
          description="Manage the entire agreement lifecycle—from creation to execution and secure storage—in a single, unified platform."
        />

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">End-to-End Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Robust features designed to handle complex organizational workflows securely.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<FileText />} title="Document Creation" description="Upload PDFs, Word docs, or generate documents dynamically using pre-approved templates." />
              <FeatureCard icon={<Wand2 />} title="Workflow Automation" description="Define complex routing rules, conditional logic, and sequential or parallel signing orders." />
              <FeatureCard icon={<Smartphone />} title="Multi-Channel Signing" description="Deliver signature requests via email, SMS, or WhatsApp to meet signers where they are." />
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
            
            <div className="flex flex-col gap-0 pl-4 md:pl-8 border-l border-primary/20 ml-4 md:ml-0">
              <WorkflowStep step={1} icon={<FileText />} title="Upload Document" description="Start with a PDF, Word file, or select a pre-configured template from your library." />
              <WorkflowStep step={2} icon={<Users />} title="Add Recipients" description="Specify signers, approvers, and CCs. Assign specific roles and authentication methods." />
              <WorkflowStep step={3} icon={<Wand2 />} title="Configure Workflow" description="Place signature fields, text boxes, and dates. Set routing order and conditional logic." />
              <WorkflowStep step={4} icon={<Smartphone />} title="Send for Signing" description="Dispatch the document securely via email or WhatsApp with one click." />
              <WorkflowStep step={5} icon={<Eye />} title="Track Status" description="Watch progress in real-time. Automated reminders keep signers engaged." />
              <WorkflowStep step={6} icon={<Database />} title="Store Agreement" description="Completed documents and audit trails are securely archived and easily searchable." />
            </div>
          </div>
        </section>

        <CTASection 
          title="Transform Your Document Processes" 
          subtitle="Stop chasing paper. Start closing deals faster with automated digital workflows."
        />
      </main>

      <Footer />
    </div>
  );
}
