import { motion } from "framer-motion";
import { FileText, ShieldCheck, PenLine, CheckCircle2, Activity, ChevronRight } from "lucide-react";

export function HeroSplitVisual() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 blur-3xl rounded-[3rem] -z-10" />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative z-10 perspective-1000">
        
        {/* Left: WhatsApp Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -30, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[300px] md:w-[320px] rounded-[2.5rem] border-[6px] border-slate-800 bg-[#EFEAE2] shadow-2xl relative overflow-hidden h-[580px] flex flex-col z-20 md:-mr-8 transform md:rotate-[-2deg]"
        >
          {/* WhatsApp Header */}
          <div className="bg-[#00A884] text-white p-3 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight">FirstTrust Bank</div>
              <div className="text-[10px] text-white/90">Official Business Account</div>
            </div>
          </div>
          
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto pb-8">
            <div className="bg-white rounded-xl p-3 shadow-sm self-start max-w-[90%] rounded-tl-sm">
              <p className="text-[13px] leading-relaxed mb-3 text-slate-800">
                Hello Ada, FirstTrust Bank has sent you a document for signature.
              </p>
              
              <div className="space-y-2">
                <div className="bg-slate-50 border rounded-lg p-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-[13px] font-medium text-slate-700">Review Document</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </div>
                
                <div className="bg-slate-50 border rounded-lg p-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00A884]" />
                    <span className="text-[13px] font-medium text-slate-700">Verify with OTP</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </div>
                
                <div className="bg-primary border border-primary/20 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <PenLine className="h-4 w-4 text-white" />
                    <span className="text-[13px] font-semibold text-white">Sign Now</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/80" />
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  10:42 AM
                  <svg viewBox="0 0 16 11" width="14" height="10" className="text-[#53bdeb] fill-current">
                    <path d="M11.5 1.5L7.5 8.5L5.5 6L4.5 7L7.5 10.5L12.5 2.5L11.5 1.5Z"></path>
                    <path d="M15.5 1.5L11.5 8.5L10 6L9 7L11.5 10.5L16.5 2.5L15.5 1.5Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            
            <div className="self-start flex items-center gap-1.5 px-2">
              <div className="text-[11px] text-slate-500 font-medium tracking-wide">typing</div>
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right: Dashboard Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 30, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-[320px] md:w-[380px] bg-card rounded-3xl border shadow-xl flex flex-col z-10 md:rotate-[2deg] transform"
        >
          <div className="p-5 border-b bg-muted/30 rounded-t-3xl">
            <h3 className="font-semibold text-foreground text-sm mb-1">Loan Agreement — Ada Mensah</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Activity className="h-3 w-3 text-blue-500" /> Live Tracking
            </p>
          </div>
          
          <div className="p-6 flex-1">
            <div className="relative pl-6 space-y-6">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
              <div className="absolute left-[11px] top-2 h-[60%] w-px bg-emerald-500" />
              
              {/* Steps */}
              <div className="relative">
                <div className="absolute -left-6 bg-emerald-500 w-6 h-6 rounded-full border-4 border-card flex items-center justify-center top-0 shadow-sm">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Sent via WhatsApp</h4>
                    <p className="text-xs text-muted-foreground">Delivered successfully</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">10:41 AM</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 bg-emerald-500 w-6 h-6 rounded-full border-4 border-card flex items-center justify-center top-0 shadow-sm">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Viewed</h4>
                    <p className="text-xs text-muted-foreground">Document opened</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">10:42 AM</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 bg-emerald-500 w-6 h-6 rounded-full border-4 border-card flex items-center justify-center top-0 shadow-sm">
                  <CheckCircle2 className="h-3 w-3 text-white" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">OTP Verified</h4>
                    <p className="text-xs text-emerald-600 font-medium">Identity confirmed</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">10:43 AM</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 bg-blue-500 w-6 h-6 rounded-full border-4 border-card top-0 shadow-sm animate-pulse" />
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600">Signed</h4>
                    <p className="text-xs text-muted-foreground">Awaiting signature</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">In progress</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[22px] bg-muted border-2 border-border w-4 h-4 rounded-full top-1" />
                <div className="flex justify-between items-start opacity-50">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Completed</h4>
                    <p className="text-xs text-muted-foreground">Audit trail generation</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="p-4 border-t bg-muted/10 rounded-b-3xl flex justify-between items-center">
            <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Audit trail</span>
            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="w-[75%] h-full bg-emerald-500 rounded-full" />
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
