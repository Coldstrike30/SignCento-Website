import { ReactNode } from "react";
import { motion } from "framer-motion";

interface WorkflowStepProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export function WorkflowStep({ step, icon, title, description }: WorkflowStepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-4 relative"
    >
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold relative z-10 shadow-sm border border-primary/20">
          {step}
        </div>
        <div className="w-px h-full bg-border absolute top-10 bottom-[-2rem] last:hidden" />
      </div>
      <div className="pb-8 pt-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-primary">{icon}</div>
          <h4 className="text-lg font-bold">{title}</h4>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
