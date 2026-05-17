import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  initial: string;
}

export function TestimonialCard({ quote, name, title, company, initial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border rounded-2xl p-8 shadow-sm relative"
    >
      <div className="absolute top-8 left-8 text-primary/10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg font-medium text-foreground relative z-10 mb-8 pt-6">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            {initial}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
