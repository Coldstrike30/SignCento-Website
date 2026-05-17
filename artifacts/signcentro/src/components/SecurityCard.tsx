import { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SecurityCardProps {
  icon: ReactNode;
  title: string;
  bullets: string[];
}

export function SecurityCard({ icon, title, bullets }: SecurityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-secondary/5 text-secondary rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="space-y-3 mt-4">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
            <span className="text-sm text-muted-foreground">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
