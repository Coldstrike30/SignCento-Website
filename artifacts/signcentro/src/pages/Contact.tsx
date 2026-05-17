import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  useSeo("Contact Us", "Get in touch with our team.");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's talk about your workflow.</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Whether you need a custom enterprise deployment or just have a question about our API, our team is ready to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Sales & Enterprise</h3>
                    <p className="text-muted-foreground mb-2">Speak with our enterprise solutions team.</p>
                    <a href="mailto:sales@signcentro.com" className="text-primary font-medium hover:underline">sales@signcentro.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Support</h3>
                    <p className="text-muted-foreground mb-2">Get help with your existing account.</p>
                    <a href="mailto:support@signcentro.com" className="text-primary font-medium hover:underline">support@signcentro.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">Lagos, Nigeria<br />Global offices in London and San Francisco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input required placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <Input type="email" required placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input required placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interest</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Book a Demo</SelectItem>
                      <SelectItem value="api">API Integration</SelectItem>
                      <SelectItem value="enterprise">Enterprise Deployment</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea required placeholder="How can we help you?" className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}