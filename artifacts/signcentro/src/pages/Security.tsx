import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { SecurityCard } from "@/components/SecurityCard";
import { Badge } from "@/components/ui/badge";
import { Shield, Key, Fingerprint, History, Server, FileLock2, Activity, Globe2, AlertTriangle, Scale } from "lucide-react";

export default function Security() {
  useSeo("Security & Compliance", "Enterprise Security at the Core. Bank-grade security you can trust.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Enterprise Security at the Core" 
          description="Built to meet the strict security, privacy, and compliance requirements of modern global enterprises."
        >
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">ISO 27001</Badge>
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">SOC 2 Type II</Badge>
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">GDPR</Badge>
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">eIDAS</Badge>
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">HIPAA-ready</Badge>
            <Badge variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-lg py-2 px-4">PCI DSS</Badge>
          </div>
        </PageHeader>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <SecurityCard 
                icon={<Shield />} 
                title="Data Encryption" 
                bullets={[
                  "AES-256 bit encryption for data at rest",
                  "TLS 1.2/1.3 for all data in transit",
                  "Hardware Security Modules (HSM) for key management",
                  "Strict cryptographic separation between tenants"
                ]} 
              />
              <SecurityCard 
                icon={<Fingerprint />} 
                title="Identity Verification" 
                bullets={[
                  "Multi-factor authentication (MFA) enforcement",
                  "Email OTP and SMS verification",
                  "Advanced ID document scanning",
                  "Biometric liveness checks integration"
                ]} 
              />
              <SecurityCard 
                icon={<History />} 
                title="Audit Trails" 
                bullets={[
                  "Comprehensive, immutable event logging",
                  "Cryptographic hashing of document versions",
                  "IP address, browser, and timestamp tracking",
                  "Court-admissible PDF certificates"
                ]} 
              />
              <SecurityCard 
                icon={<Key />} 
                title="Access Controls" 
                bullets={[
                  "Granular Role-Based Access Control (RBAC)",
                  "SAML 2.0 / SSO integration (Okta, Azure AD)",
                  "Principle of least privilege enforcement",
                  "Automated provisioning/deprovisioning via SCIM"
                ]} 
              />
              <SecurityCard 
                icon={<FileLock2 />} 
                title="Secure APIs" 
                bullets={[
                  "OAuth 2.0 and API Key authentication",
                  "Rate limiting and DDoS protection",
                  "Strict payload validation and sanitization",
                  "Web Application Firewall (WAF) routing"
                ]} 
              />
              <SecurityCard 
                icon={<Database />} 
                title="Data Retention" 
                bullets={[
                  "Configurable retention policies per document type",
                  "Automated secure deletion protocols",
                  "Legal hold capabilities",
                  "Data archiving workflows"
                ]} 
              />
              <SecurityCard 
                icon={<Scale />} 
                title="Compliance Readiness" 
                bullets={[
                  "Regular third-party penetration testing",
                  "Continuous compliance monitoring",
                  "U.S. ESIGN Act and UETA compliant",
                  "EU eIDAS compliant for Advanced Electronic Signatures"
                ]} 
              />
              <SecurityCard 
                icon={<Globe2 />} 
                title="Deployment Options" 
                bullets={[
                  "Global public cloud availability (AWS, GCP)",
                  "Data residency enforcement by region",
                  "Private cloud deployments for strict isolation",
                  "On-premise options for critical infrastructure"
                ]} 
              />
              <SecurityCard 
                icon={<AlertTriangle />} 
                title="Incident Response" 
                bullets={[
                  "24/7/365 Security Operations Center (SOC)",
                  "Automated threat detection and alerting",
                  "Documented and tested incident response playbooks",
                  "Transparent status reporting and SLAs"
                ]} 
              />
              <SecurityCard 
                icon={<Activity />} 
                title="Privacy & Governance" 
                bullets={[
                  "Strict adherence to GDPR and CCPA",
                  "No sharing or selling of customer data",
                  "Data Processing Agreements (DPA) available",
                  "Dedicated internal Privacy and Security teams"
                ]} 
              />
            </div>
          </div>
        </section>

        <CTASection 
          title="Discuss Your Security Requirements" 
          subtitle="Our security architects are ready to review your specific compliance needs."
          primaryText="Speak with a security architect"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}

// Add missing icon import
import { Database } from "lucide-react";