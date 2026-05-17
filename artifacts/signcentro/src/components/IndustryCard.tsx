import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface IndustryCardProps {
  icon: ReactNode;
  industry: string;
  description: string;
  href?: string;
}

export function IndustryCard({ icon, industry, description, href = "/solutions" }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border bg-card p-8 hover:shadow-lg transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="h-14 w-14 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center mb-6 shadow-md">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{industry}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={href} className="inline-flex items-center text-sm font-semibold text-primary group-hover:underline">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
