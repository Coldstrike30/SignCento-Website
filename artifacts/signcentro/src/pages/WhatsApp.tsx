import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { WorkflowStep } from "@/components/WorkflowStep";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MessageSquare, Link as LinkIcon, ShieldCheck, FileCheck2, Send, Key, Smartphone, Gauge, Sparkles, Globe2, Building2, Layers, Download, Lock, CheckCircle2, History, Users, MonitorSmartphone, Brush, Eye, PenLine, Landmark, FileText, ShoppingCart, ShieldAlert, Truck, Wrench, Activity, ChevronRight, Database, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroSplitVisual } from "@/components/HeroSplitVisual";
import { FeatureCard } from "@/components/FeatureCard";
import { SecurityCard } from "@/components/SecurityCard";
import { IndustryCard } from "@/components/IndustryCard";
import { DashboardMockup } from "@/components/DashboardMockup";

export default function WhatsApp() {
  useSeo("WhatsApp Signing", "Sign documents directly inside WhatsApp.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        
        {/* Custom Hero for WhatsApp */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary border-primary/30 backdrop-blur font-bold">
                  Platform Capability
                </Badge>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
              >
                WhatsApp Signing for <br className="hidden md:block" />
                Modern Digital Agreements
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
              >
                Add WhatsApp as a secure signing channel within your enterprise e-signature workflows, without losing audit trails, compliance controls, templates, approvals, or document governance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                  <Link href="/pricing">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                  <Link href="/contact">Book Demo</Link>
                </Button>
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto mb-16 bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MonitorSmartphone className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Signcentro is not just a WhatsApp signing tool.</strong> It is a complete e-signature and document workflow platform that allows organizations to use WhatsApp where it improves speed, convenience, and completion rates.
              </p>
            </div>
            
            <HeroSplitVisual />
          </div>
        </section>

        {/* 1. How WhatsApp Signing Works */}
        <section className="py-24 bg-card border-y">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How WhatsApp Signing Works</h2>
              <p className="text-xl text-muted-foreground">A secure, frictionless process for your customers.</p>
            </div>
            
            {/* Horizontal Timeline (Desktop) */}
            <div className="hidden lg:flex justify-between items-start relative pt-8">
              {/* Connecting line */}
              <div className="absolute top-14 left-10 right-10 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/50 rounded-full" />
              
              {[
                { step: 1, icon: <Send />, title: "Send Document", desc: "Initiate request from platform" },
                { step: 2, icon: <MessageSquare className="text-[#25D366]" />, title: "WhatsApp Link", desc: "Secure link delivered to chat" },
                { step: 3, icon: <Key />, title: "OTP", desc: "Identity verification" },
                { step: 4, icon: <Eye />, title: "Review", desc: "Mobile-optimized viewer" },
                { step: 5, icon: <PenLine />, title: "Sign", desc: "Touchscreen signature pad" },
                { step: 6, icon: <FileCheck2 />, title: "Confirmation", desc: "Completed PDF returned" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center w-40 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-primary/10 shadow-md flex items-center justify-center text-primary mb-4 z-10">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Vertical Timeline (Mobile) */}
            <div className="lg:hidden flex flex-col gap-0 border-l-2 border-primary/20 pl-6 ml-4">
              <WorkflowStep step={1} icon={<Send />} title="Send Document" description="Initiate a signature request specifying WhatsApp as the delivery channel." />
              <WorkflowStep step={2} icon={<MessageSquare className="text-[#25D366]" />} title="WhatsApp Link" description="A secure, expiring link is delivered directly to their WhatsApp chat." />
              <WorkflowStep step={3} icon={<Key />} title="OTP Verification" description="To ensure identity, a One-Time Password is required to open the document." />
              <WorkflowStep step={4} icon={<Eye />} title="Review Document" description="The user reviews the document securely in their mobile browser." />
              <WorkflowStep step={5} icon={<PenLine />} title="Sign securely" description="The user applies their signature using their phone's touchscreen." />
              <WorkflowStep step={6} icon={<FileCheck2 />} title="Confirmation" description="A finalized copy is sent back via WhatsApp for their records." />
            </div>
          </div>
        </section>

        {/* 2. Why Businesses Love It */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Why Businesses Love It</h2>
              <p className="text-xl text-muted-foreground">Eliminate friction and accelerate document completion.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Smartphone className="text-[#00A884]" />} 
                title="No App Download Required" 
                description="Stop losing customers to friction. Recipients sign directly from a secure WhatsApp link opening in their native mobile browser. No new apps to install, no portals to log into." 
              />
              <FeatureCard 
                icon={<Gauge className="text-[#00A884]" />} 
                title="Faster Completion" 
                description="Reach signers where they respond fastest. WhatsApp boasts a 98% open rate compared to email's 20%. Documents that used to take days are now signed in minutes." 
              />
              <FeatureCard 
                icon={<Sparkles className="text-[#00A884]" />} 
                title="Better Customer Experience" 
                description="Provide a simple, familiar, mobile-first signing experience. Meet your customers in the communication channel they already know and trust." 
              />
              <FeatureCard 
                icon={<ShieldCheck className="text-[#00A884]" />} 
                title="Secure Verification" 
                description="Combine the ubiquity of WhatsApp with bank-grade security. Use OTP, rigorous identity checks, complete audit trails, and highly encrypted signing links." 
              />
              <FeatureCard 
                icon={<Globe2 className="text-[#00A884]" />} 
                title="Ideal for Emerging Markets" 
                description="Designed for regions where WhatsApp is the default business communication channel. Perfect for Africa, LATAM, and APAC where email usage is significantly lower." 
              />
              <FeatureCard 
                icon={<Building2 className="text-[#00A884]" />} 
                title="Enterprise Controlled" 
                description="Maintains strict compliance. Every document sent, action taken, signer verified, timestamp recorded, and completion event is tracked securely in Signcentro." 
              />
            </div>
          </div>
        </section>

        {/* 3. Security & Verification */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security & Verification</h2>
              <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
                WhatsApp is used as the delivery and engagement channel. The signing process is secured through Signcentro's encrypted signing links, OTP verification, identity checks, access controls, and complete audit trails.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SecurityCard icon={<Lock />} title="Encrypted Signing Links" bullets={["Expiring, unique URLs", "TLS 1.3 encryption", "No documents sent directly in chat"]} />
              <SecurityCard icon={<Key />} title="OTP Verification" bullets={["SMS or WhatsApp OTP", "Brute-force protection", "Configurable complexity"]} />
              <SecurityCard icon={<ShieldCheck />} title="Identity Checks" bullets={["Phone number binding", "Device fingerprinting", "Liveness check integration"]} />
              <SecurityCard icon={<Users />} title="Access Controls" bullets={["Granular permissions", "IP allowlisting", "Role-based visibility"]} />
              <SecurityCard icon={<History />} title="Complete Audit Trails" bullets={["Cryptographic hashing", "Tamper-evident seals", "Court-admissible logs"]} />
            </div>
          </div>
        </section>

        {/* 4. Use Cases */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">High-Volume Use Cases</h2>
              <p className="text-xl text-muted-foreground">Perfect for B2C and B2B workflows where speed is critical.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <Landmark className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Loan agreements</h4>
                <p className="text-xs text-muted-foreground">Approve retail loans instantly.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <Users className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Account opening</h4>
                <p className="text-xs text-muted-foreground">Frictionless onboarding flows.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <FileText className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">HR offer letters</h4>
                <p className="text-xs text-muted-foreground">Secure talent faster.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Policy acknowledgements</h4>
                <p className="text-xs text-muted-foreground">Track employee compliance.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <Building2 className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Vendor onboarding</h4>
                <p className="text-xs text-muted-foreground">Streamline MSAs and NDAs.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <ShoppingCart className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Procurement approvals</h4>
                <p className="text-xs text-muted-foreground">Keep supply chains moving.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <FileCheck2 className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Customer consent forms</h4>
                <p className="text-xs text-muted-foreground">Obtain permissions reliably.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <ShieldAlert className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Insurance documents</h4>
                <p className="text-xs text-muted-foreground">Process claims and policies.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <Truck className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Delivery confirmations</h4>
                <p className="text-xs text-muted-foreground">Sign off on receipts.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border flex flex-col items-center text-center hover:border-primary transition-colors cursor-default">
                <Wrench className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Field service approvals</h4>
                <p className="text-xs text-muted-foreground">Approve work orders on-site.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Admin Dashboard View */}
        <section className="py-24 bg-muted/10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="flex-1 w-full lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-[3rem]" />
                  {/* Extended Dashboard Mockup for WhatsApp context */}
                  <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-2xl relative z-10">
                    <div className="h-12 border-b flex items-center px-4 justify-between bg-muted/50">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="font-medium text-sm">WhatsApp Deliveries</div>
                      <div className="w-6 h-6 rounded-full bg-primary/20" />
                    </div>
                    <div className="p-4 bg-card">
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1 border rounded-lg p-3">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sent via WhatsApp</div>
                          <div className="text-2xl font-bold">1,248</div>
                        </div>
                        <div className="flex-1 border rounded-lg p-3">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Avg. Time to Sign</div>
                          <div className="text-2xl font-bold text-[#00A884]">14m</div>
                        </div>
                        <div className="flex-1 border rounded-lg p-3">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Completion Rate</div>
                          <div className="text-2xl font-bold">92%</div>
                        </div>
                      </div>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                            <tr>
                              <th className="px-4 py-2">Document</th>
                              <th className="px-4 py-2">Channel</th>
                              <th className="px-4 py-2">OTP Status</th>
                              <th className="px-4 py-2">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-4 py-3 font-medium">Loan Agreement - A. Doe</td>
                              <td className="px-4 py-3"><Badge className="bg-[#25D366]/20 text-[#00A884] hover:bg-[#25D366]/30 border-none">WhatsApp</Badge></td>
                              <td className="px-4 py-3 text-emerald-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Verified</td>
                              <td className="px-4 py-3"><span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Viewed</span></td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium">Account Opening - J. Smith</td>
                              <td className="px-4 py-3"><Badge className="bg-[#25D366]/20 text-[#00A884] hover:bg-[#25D366]/30 border-none">WhatsApp</Badge></td>
                              <td className="px-4 py-3 text-emerald-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Verified</td>
                              <td className="px-4 py-3"><span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Signed</span></td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 font-medium">Vendor NDA - TechCorp</td>
                              <td className="px-4 py-3"><Badge variant="outline">Email</Badge></td>
                              <td className="px-4 py-3 text-muted-foreground">-</td>
                              <td className="px-4 py-3"><span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">Pending</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 space-y-8 lg:order-1">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Complete Oversight</h2>
                  <p className="text-lg text-muted-foreground mb-6">Manage all your WhatsApp deliveries from the same powerful dashboard you use for email and portal signing.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Activity className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Real-time delivery status</h4>
                      <p className="text-sm text-muted-foreground">Know instantly when a message is delivered and read on WhatsApp.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Gauge className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Engagement analytics</h4>
                      <p className="text-sm text-muted-foreground">Track completion times and compare channel performance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <History className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Cross-channel audit trail</h4>
                      <p className="text-sm text-muted-foreground">Unified logging across all delivery methods in one compliant record.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Customer Signing Experience */}
        <section className="py-24 bg-card border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">The Customer Experience</h2>
              <p className="text-xl text-muted-foreground">A smooth, native-feeling flow that keeps users engaged.</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 lg:gap-12 perspective-1000">
              
              {/* Phone 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-[260px] rounded-[2rem] border-[5px] border-slate-800 bg-[#EFEAE2] shadow-xl relative overflow-hidden h-[480px] flex flex-col mb-4">
                  <div className="bg-[#00A884] text-white p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-4 w-4 text-white" />
                    </div>
                    <div className="font-bold text-sm">Acme Corp</div>
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-3">
                    <div className="bg-white rounded-xl p-3 shadow-sm self-start max-w-[90%] rounded-tl-sm">
                      <p className="text-[12px] mb-2">Please review and sign your contract.</p>
                      <div className="bg-primary/10 rounded-lg p-2 flex items-center justify-between text-primary">
                        <span className="text-[12px] font-semibold">Review Document</span>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center w-[260px]">
                  <div className="inline-block bg-primary text-white w-6 h-6 rounded-full text-sm font-bold leading-6 mb-2">1</div>
                  <p className="text-sm font-medium">WhatsApp message arrives with secure link</p>
                </div>
              </motion.div>

              {/* Phone 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-[260px] rounded-[2rem] border-[5px] border-slate-800 bg-slate-50 shadow-xl relative overflow-hidden h-[480px] flex flex-col mb-4">
                  <div className="h-10 border-b flex items-center justify-center text-xs font-semibold">Signcentro Secure</div>
                  <div className="flex-1 p-5 flex flex-col items-center justify-center text-center">
                    <Key className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-sm mb-2">Identity Verification</h3>
                    <p className="text-[11px] text-muted-foreground mb-6">Enter the OTP sent to your phone to view this document.</p>
                    <div className="flex gap-2 mb-4">
                      <div className="w-8 h-10 border-2 rounded-md border-primary text-center leading-[36px] font-bold">8</div>
                      <div className="w-8 h-10 border-2 rounded-md border-primary text-center leading-[36px] font-bold">4</div>
                      <div className="w-8 h-10 border-2 rounded-md border-primary text-center leading-[36px] font-bold">2</div>
                      <div className="w-8 h-10 border-2 rounded-md border-primary text-center leading-[36px] font-bold">1</div>
                    </div>
                    <div className="w-full bg-primary text-white text-xs font-bold py-3 rounded-lg">Verify & View</div>
                  </div>
                </div>
                <div className="text-center w-[260px]">
                  <div className="inline-block bg-primary text-white w-6 h-6 rounded-full text-sm font-bold leading-6 mb-2">2</div>
                  <p className="text-sm font-medium">OTP verification screen</p>
                </div>
              </motion.div>

              {/* Phone 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-[260px] rounded-[2rem] border-[5px] border-slate-800 bg-white shadow-xl relative overflow-hidden h-[480px] flex flex-col mb-4">
                  <div className="h-10 border-b flex items-center px-3 justify-between">
                    <span className="text-[10px] font-medium text-muted-foreground">Contract.pdf</span>
                    <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">Completed</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col">
                    <div className="flex-1 border bg-slate-50 mb-3 overflow-hidden relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
                         <Brush className="w-32 h-32" />
                      </div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Signed Successfully
                    </div>
                  </div>
                </div>
                <div className="text-center w-[260px]">
                  <div className="inline-block bg-primary text-white w-6 h-6 rounded-full text-sm font-bold leading-6 mb-2">3</div>
                  <p className="text-sm font-medium">Document review and signature pad → Completed</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 7. Enterprise Controls */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Enterprise Controls</h2>
              <p className="text-xl text-muted-foreground">Govern your WhatsApp deployments at scale.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard icon={<Users />} title="Role-Based Access" description="Control which departments or individuals can use WhatsApp as a delivery channel." />
              <FeatureCard icon={<Lock />} title="Single Sign-On" description="Manage user access with SAML 2.0 integration with Okta, Azure AD, and others." />
              <FeatureCard icon={<Database />} title="Data Residency" description="Ensure WhatsApp delivery logs and completed documents are stored in your required region." />
              <FeatureCard icon={<History />} title="Retention Policies" description="Automatically purge documents and chat logs according to your legal requirements." />
              <FeatureCard icon={<Code2 />} title="API Access" description="Trigger WhatsApp signature requests programmatically from your core systems." />
              <FeatureCard icon={<Brush />} title="White-Label Branding" description="Send requests from a dedicated WhatsApp business number with your brand profile." />
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Get Documents Signed Faster?" 
          subtitle="Use WhatsApp to reduce signing delays and improve completion rates."
          primaryText="Start WhatsApp Signing"
          primaryHref="/whatsapp"
          secondaryText="Book Demo"
          secondaryHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}