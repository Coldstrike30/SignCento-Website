import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  useSeo("Pricing", "Simple, transparent pricing for teams of all sizes.");
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: "Starter",
      desc: "For individuals and small teams.",
      price: isAnnual ? "$12" : "$15",
      features: ["5 users included", "100 documents per month", "Basic templates", "Email support", "Standard security"],
    },
    {
      name: "Business",
      desc: "For growing companies.",
      price: isAnnual ? "$29" : "$39",
      features: ["Unlimited users", "Unlimited documents", "Advanced workflows", "WhatsApp signing", "Priority support", "Custom branding", "API access (limited)"],
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For large organizations with complex needs.",
      price: "Custom",
      features: ["Everything in Business", "Unlimited API access", "SSO & Advanced IAM", "Dedicated success manager", "On-premise deployment option", "Custom SLA & compliance"],
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing.</h1>
            <p className="text-xl text-muted-foreground mb-8">Choose the plan that fits your organization's needs.</p>
            
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm ${!isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 bg-primary rounded-full relative p-1 transition-colors"
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm ${isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>
                Annually <span className="text-success text-emerald-600 text-xs font-bold ml-1 bg-emerald-100 px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className={`rounded-2xl border p-8 bg-card flex flex-col ${tier.popular ? 'ring-2 ring-primary relative shadow-lg' : 'shadow-sm'}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6 h-10">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/user/mo</span>}
                </div>
                <Button className="w-full mb-8" variant={tier.popular ? 'default' : 'outline'}>
                  {tier.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
                <div className="space-y-4 flex-grow">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}