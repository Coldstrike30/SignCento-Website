import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Truck, Landmark, Scale, ShoppingCart, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  useSeo("Solutions", "Digital Signing Solutions for Every Business Function");

  const solutions = [
    {
      title: "HR & Employee Onboarding",
      icon: <Users className="h-8 w-8 text-primary" />,
      pain: "Manual onboarding takes days and creates disjointed employee experiences.",
      solution: "Automate offer letters, contracts, and policy acknowledgments in one seamless flow.",
      benefits: ["Send bulk offer letters", "Standardized NDA templates", "Automated reminders", "Secure employee records"],
    },
    {
      title: "Procurement & Vendor Management",
      icon: <Truck className="h-8 w-8 text-primary" />,
      pain: "Vendor approvals are delayed by complex, multi-department routing.",
      solution: "Accelerate procurement with automated routing for MSAs, NDAs, and purchase orders.",
      benefits: ["Custom approval workflows", "Centralized vendor repository", "Audit-ready logs", "Mobile signing for executives"],
    },
    {
      title: "Banking & Financial Services",
      icon: <Landmark className="h-8 w-8 text-primary" />,
      pain: "Strict regulatory requirements slow down customer acquisition and loan processing.",
      solution: "Deliver fast, compliant account opening and loan agreements with advanced identity verification.",
      benefits: ["eIDAS & local compliance", "OTP identity binding", "WhatsApp integration", "Tamper-evident seals"],
    },
    {
      title: "Legal & Compliance",
      icon: <Scale className="h-8 w-8 text-primary" />,
      pain: "Managing risk and tracking contract obligations manually is error-prone.",
      solution: "Ensure every signature is legally binding with comprehensive, court-admissible audit trails.",
      benefits: ["Cryptographic hashing", "Role-based access control", "Data residency options", "Version control"],
    },
    {
      title: "Sales & Customer Agreements",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      pain: "Friction at the signing stage leads to lost deals and extended sales cycles.",
      solution: "Close deals instantly with a frictionless signing experience embedded in your CRM.",
      benefits: ["CRM integrations via API", "Branded signing portals", "Real-time tracking", "Payment collection ready"],
    },
    {
      title: "Government & Public Sector",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      pain: "Paper-based bureaucratic processes delay citizen services.",
      solution: "Modernize public service delivery with secure, accessible electronic signatures.",
      benefits: ["High availability", "Accessibility compliance", "On-premise deployment options", "Strict data governance"],
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Digital Signing Solutions for Every Business Function" 
          description="Discover how Signcentro accelerates operations across your entire organization."
        />

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-24">
              {solutions.map((sol, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        {sol.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{sol.title}</h2>
                    </div>
                    
                    <div className="space-y-4 border-l-2 border-primary/20 pl-6">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                        <p className="text-foreground/90">{sol.pain}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">The Solution</h4>
                        <p className="text-foreground/90">{sol.solution}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold mb-3">Key Benefits</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {sol.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" asChild>
                        <Link href="/contact">Discuss your use case</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full relative">
                    <div className="aspect-[4/3] rounded-3xl bg-secondary/5 border overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center text-primary/20 group-hover:text-primary/40 transition-colors">
                        {sol.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to optimize your workflow?" 
          subtitle="Explore our platform or speak to a specialist to design your ideal signing solution."
        />
      </main>
      <Footer />
    </div>
  );
}
