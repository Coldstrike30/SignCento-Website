import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { WorkflowStep } from "@/components/WorkflowStep";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MessageSquare, Link as LinkIcon, ShieldCheck, FileCheck2, Send, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WhatsApp() {
  useSeo("WhatsApp Signing", "Sign documents directly inside WhatsApp.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        
        {/* Custom Hero for WhatsApp */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-emerald-900/10 to-background">
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 max-w-2xl">
                <Badge variant="outline" className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
                  New Feature
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Sign Documents Directly from <span className="text-emerald-600">WhatsApp</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10">
                  Reach your customers where they already are. Accelerate turnaround times by delivering signature requests straight to their WhatsApp inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/pricing">Start Free Trial</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                    <Link href="/contact">Book Demo</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 w-full flex justify-center">
                {/* WhatsApp Mockup */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-[320px] rounded-[2.5rem] border-8 border-slate-800 bg-[#EFEAE2] shadow-2xl relative overflow-hidden h-[600px] flex flex-col"
                >
                  <div className="bg-[#00A884] text-white p-4 flex items-center gap-3 sticky top-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Acme Bank</div>
                      <div className="text-xs text-white/80">Official Business Account</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                    <div className="bg-white rounded-lg p-3 shadow-sm self-start max-w-[85%] rounded-tl-none">
                      <p className="text-sm mb-2">Hello Jane! Please review and sign your new account opening agreement.</p>
                      <div className="bg-slate-50 p-2 rounded border text-xs text-slate-600 flex items-center gap-2 mb-2">
                        <FileCheck2 className="h-4 w-4" /> Account_Agreement.pdf
                      </div>
                      <a href="#" className="text-blue-500 font-medium text-sm flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" /> Click here to review & sign
                      </a>
                    </div>

                    <div className="bg-[#D9FDD3] rounded-lg p-3 shadow-sm self-end max-w-[85%] rounded-tr-none">
                      <p className="text-sm">I've clicked the link. What's my OTP?</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm self-start max-w-[85%] rounded-tl-none">
                      <p className="text-sm mb-2">Your secure signing OTP is:</p>
                      <div className="text-xl font-mono font-bold tracking-widest text-center my-2">842 195</div>
                      <p className="text-xs text-slate-500">Valid for 10 minutes. Do not share this code.</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 shadow-sm self-start max-w-[85%] rounded-tl-none mt-4">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-1">
                        <ShieldCheck className="h-4 w-4" /> Successfully Signed
                      </div>
                      <p className="text-sm text-slate-600">Thank you! You can download your copy of the agreement here.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">How It Works</h2>
              <p className="text-xl text-muted-foreground">A secure, frictionless process for your customers.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex flex-col gap-0 border-l border-emerald-200 pl-6 ml-4">
                <WorkflowStep step={1} icon={<Send />} title="Send Document" description="Initiate a signature request specifying WhatsApp as the delivery channel." />
                <WorkflowStep step={2} icon={<MessageSquare />} title="Recipient Gets Link" description="A secure, expiring link is delivered directly to their WhatsApp chat." />
                <WorkflowStep step={3} icon={<Key />} title="OTP Verification" description="To ensure identity, a One-Time Password is required to open the document." />
                <WorkflowStep step={4} icon={<FileCheck2 />} title="Review Document" description="The user reviews the document securely in their mobile browser." />
                <WorkflowStep step={5} icon={<ShieldCheck />} title="Sign" description="The user applies their signature using their phone's touchscreen." />
                <WorkflowStep step={6} icon={<FileCheck2 />} title="Completion Confirmation" description="A finalized copy is sent back via WhatsApp for their records." />
              </div>

              <div className="space-y-8">
                <div className="bg-muted/50 rounded-2xl p-8 border">
                  <h3 className="text-xl font-bold mb-4">Perfect Use Cases</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">•</span> Customer onboarding & KYC</li>
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">•</span> Retail loan agreements</li>
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">•</span> High-volume HR offer letters</li>
                    <li className="flex gap-2"><span className="text-emerald-500 font-bold">•</span> Micro-merchant vendor agreements</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">Security Controls</h3>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex gap-2"><ShieldCheck className="h-5 w-5 shrink-0" /> Multi-factor OTP authentication via SMS or WhatsApp</li>
                    <li className="flex gap-2"><ShieldCheck className="h-5 w-5 shrink-0" /> Strict link expiration policies</li>
                    <li className="flex gap-2"><ShieldCheck className="h-5 w-5 shrink-0" /> Cryptographic binding to the phone number</li>
                    <li className="flex gap-2"><ShieldCheck className="h-5 w-5 shrink-0" /> Full audit trail recording the WhatsApp delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Reach your customers faster" 
          subtitle="Increase conversion rates by letting customers sign where they spend their time."
          primaryText="Start Free Trial"
        />
      </main>
      <Footer />
    </div>
  );
}