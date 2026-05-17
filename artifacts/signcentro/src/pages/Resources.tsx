import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Resources() {
  useSeo("Resources", "Insights for Digital Agreements, Automation, and Compliance.");

  const resources = [
    { tag: "Compliance", title: "Building eIDAS-compliant signing flows", time: "5 min read" },
    { tag: "Case Study", title: "How a pan-African bank cut contract turnaround by 73%", time: "8 min read" },
    { tag: "Guide", title: "The Ultimate Guide to Workflow Automation in HR", time: "12 min read" },
    { tag: "API", title: "Webhooks vs Polling: Best practices for tracking signatures", time: "6 min read" },
    { tag: "Procurement", title: "Digitizing Vendor Management: A step-by-step approach", time: "7 min read" },
    { tag: "Security", title: "Understanding Document Hashing and Tamper Evidence", time: "4 min read" },
    { tag: "Operations", title: "Scaling Banking Operations with WhatsApp Signing", time: "5 min read" },
    { tag: "Legal", title: "Are electronic signatures legally binding? A global overview", time: "10 min read" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Insights for Digital Agreements, Automation, and Compliance" 
          description="Guides, best practices, and stories from teams transforming their operations."
        />

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Featured Article */}
            <div className="mb-16 rounded-3xl overflow-hidden bg-card border shadow-lg group flex flex-col md:flex-row cursor-pointer">
              <div className="md:w-1/2 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 min-h-[300px] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-105 transition-transform duration-700">
                  <BookOpen className="w-32 h-32" />
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4">Featured Guide</Badge>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">The 2024 State of Digital Agreements in Enterprise</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Discover how leading organizations are moving beyond basic e-signatures to fully automated, integrated agreement lifecycle management.
                </p>
                <div className="flex items-center text-sm text-primary font-bold">
                  Read the full report <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-2xl border p-6 hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-xs font-medium text-muted-foreground gap-1 bg-muted px-2 py-1 rounded">
                      <Tag className="h-3 w-3" /> {item.tag}
                    </div>
                    <div className="flex items-center text-xs font-medium text-muted-foreground gap-1">
                      <Clock className="h-3 w-3" /> {item.time}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-primary">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Strip */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay ahead of the curve</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Join thousands of professionals receiving our monthly insights on digital transformation and compliance.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-grow rounded-lg px-4 h-12 text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <Button size="lg" variant="secondary" className="h-12 px-8">Subscribe</Button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}