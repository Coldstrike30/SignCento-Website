import { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, href, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
    >
      <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      {href && (
        <Link href={href} className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-auto">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
}
