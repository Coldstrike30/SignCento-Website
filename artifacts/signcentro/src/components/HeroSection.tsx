import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface HeroSectionProps {
  badge?: React.ReactNode;
  headline: ReactNode;
  subheadline: string;
  buttons?: ReactNode;
  visual?: ReactNode;
  align?: "left" | "center";
}

export function HeroSection({ badge, headline, subheadline, buttons, visual, align = "center" }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} lg:flex-row gap-12`}>
          <div className={`flex-1 ${align === "center" ? "max-w-4xl mx-auto" : "max-w-2xl"}`}>
            {badge && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm bg-background/50 backdrop-blur">
                  {badge}
                </Badge>
              </motion.div>
            )}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              {headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-10"
            >
              {subheadline}
            </motion.p>
            {buttons && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex flex-col sm:flex-row gap-4 ${align === "center" ? "justify-center" : "justify-start"}`}
              >
                {buttons}
              </motion.div>
            )}
          </div>
          {visual && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 w-full"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
