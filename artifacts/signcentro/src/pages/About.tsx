import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Target, Zap, Wrench, Heart } from "lucide-react";

export default function About() {
  useSeo("About Us", "Built for the Future of Digital Business.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Built for the Future of Digital Business" 
          description="We believe that agreements shouldn't slow you down. Signcentro exists to make organizational processes frictionless, secure, and fully automated."
        />

        {/* Stats Strip */}
        <section className="py-12 bg-card border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-primary mb-2">12M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Documents Signed</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-primary mb-2">99.99%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Uptime SLA</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Countries</div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">27001 Certified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Mission</h2>
                <h3 className="text-3xl font-bold mb-6">To accelerate global commerce by removing friction from trust.</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Every business interaction requires trust, usually formalized as a contract. Historically, establishing that trust took days of paper-shuffling. We built Signcentro to compress that timeline to seconds.
                </p>
                <p className="text-lg text-muted-foreground">
                  We are obsessed with creating infrastructure that allows organizations to move faster while maintaining absolute security and legal compliance.
                </p>
              </div>
              <div className="aspect-square rounded-3xl bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10">
                  <Target className="w-48 h-48" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <ShieldAlert className="h-8 w-8" />, title: "Trust Above All", desc: "Security and compliance are non-negotiable. We protect our customers' data as if it were our own." },
                { icon: <Zap className="h-8 w-8" />, title: "Velocity", desc: "Speed matters. We build tools that help our customers move faster, and we operate with urgency internally." },
                { icon: <Wrench className="h-8 w-8" />, title: "Craft", desc: "We sweat the details. The difference between a good product and a great one is execution." },
                { icon: <Heart className="h-8 w-8" />, title: "Customer Obsession", desc: "We start with the customer's workflow and work backwards. Their success is our only metric." },
              ].map((val, i) => (
                <div key={i} className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                  <p className="text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership (Placeholder) */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Sarah Chen", role: "Chief Executive Officer" },
                { name: "Marcus Johnson", role: "Chief Technology Officer" },
                { name: "Elena Rodriguez", role: "Chief Information Security Officer" },
                { name: "David Kim", role: "VP of Product" },
              ].map((leader, i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-border mb-4 overflow-hidden" />
                  <h4 className="font-bold text-lg">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Join us in modernizing agreements" 
          subtitle="We're always looking for talented people to join our mission."
          primaryText="View Open Roles"
          primaryHref="/careers"
          secondaryText="Contact Us"
        />
      </main>
      <Footer />
    </div>
  );
}

// Add missing icon
import { ShieldAlert } from "lucide-react";