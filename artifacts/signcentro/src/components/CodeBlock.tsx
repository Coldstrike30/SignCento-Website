import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "json", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-secondary text-secondary-foreground shadow-2xl border border-secondary-foreground/20">
      <div className="flex items-center justify-between px-4 py-3 bg-secondary-foreground/5 border-b border-secondary-foreground/10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          {title && <span className="text-xs font-mono text-secondary-foreground/70">{title}</span>}
        </div>
        <button 
          onClick={handleCopy}
          className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-secondary-foreground/90">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
