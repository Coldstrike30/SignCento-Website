import { Button } from "./ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTASection({ 
  title, 
  subtitle, 
  primaryText = "Start Free Trial", 
  primaryHref = "/pricing", 
  secondaryText = "Speak to Sales", 
  secondaryHref = "/contact" 
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card border rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
              <Link href={primaryHref}>{primaryText}</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
