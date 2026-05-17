import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { CodeBlock } from "@/components/CodeBlock";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Globe, Webhook, TerminalSquare, Box, KeyRound, FileJson, LayoutDashboard, Code, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function API() {
  useSeo("API & Developers", "Embed Digital Signing Into Any Application");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Embed Digital Signing Into Any Application" 
          description="A powerful, developer-first API to seamlessly integrate e-signatures, document generation, and workflow automation into your software."
        >
          <Button size="lg" asChild>
            <Link href="/contact">Start Building</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#docs">Read the Docs</a>
          </Button>
        </PageHeader>

        <section className="py-24 bg-card" id="docs">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Built for Developers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to ship integrations faster and maintain them with confidence.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard icon={<Globe />} title="REST APIs" description="Modern, predictable RESTful endpoints with standard HTTP verbs and JSON payloads." />
              <FeatureCard icon={<Webhook />} title="Webhooks" description="Real-time event subscriptions to keep your systems perfectly in sync with document statuses." />
              <FeatureCard icon={<TerminalSquare />} title="SDKs & Libraries" description="Official SDKs available for TypeScript, Python, Java, and Go for rapid integration." />
              <FeatureCard icon={<Box />} title="Sandbox Environment" description="A fully-featured, free sandbox to test your integrations safely before going live." />
              <FeatureCard icon={<KeyRound />} title="API Keys" description="Secure authentication with scoped API keys and detailed access logging." />
              <FeatureCard icon={<FileJson />} title="Postman Collection" description="Ready-to-use Postman collections to explore the API without writing code." />
              <FeatureCard icon={<LayoutDashboard />} title="Developer Portal" description="Comprehensive dashboard to manage keys, monitor usage, and debug webhooks." />
              <FeatureCard icon={<Code />} title="Embedded Signing" description="Seamlessly embed the signing experience directly within your own UI." />
              <FeatureCard icon={<Eye />} title="Status Tracking" description="Granular tracking of document views, signatures, and authentication events." />
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Beautifully Simple API</h2>
              <p className="text-xl text-secondary-foreground/70">Send your first document in minutes.</p>
            </div>

            <Tabs defaultValue="curl" className="max-w-4xl mx-auto">
              <TabsList className="mb-4 bg-secondary-foreground/10 border border-secondary-foreground/20">
                <TabsTrigger value="curl" className="data-[state=active]:bg-primary data-[state=active]:text-white">cURL</TabsTrigger>
                <TabsTrigger value="node" className="data-[state=active]:bg-primary data-[state=active]:text-white">Node.js</TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-primary data-[state=active]:text-white">Python</TabsTrigger>
                <TabsTrigger value="webhook" className="data-[state=active]:bg-primary data-[state=active]:text-white">Webhook Payload</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curl">
                <CodeBlock 
                  title="Create Signature Request"
                  language="bash"
                  code={`curl -X POST https://api.signcentro.com/v1/signature-requests \\
  -H "Authorization: Bearer sc_live_***" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_url": "https://example.com/contract.pdf",
    "title": "Service Agreement",
    "signers": [
      {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "role": "Client",
        "auth_method": "otp_email"
      }
    ],
    "callback_url": "https://app.example.com/webhook"
  }'`}
                />
              </TabsContent>
              
              <TabsContent value="node">
                <CodeBlock 
                  title="Create Signature Request (TypeScript)"
                  language="typescript"
                  code={`import { Signcentro } from '@signcentro/sdk';

const client = new Signcentro(process.env.SIGNCENTRO_API_KEY);

const request = await client.signatureRequests.create({
  documentUrl: "https://example.com/contract.pdf",
  title: "Service Agreement",
  signers: [{
    name: "Jane Doe",
    email: "jane@example.com",
    role: "Client"
  }],
  callbackUrl: "https://app.example.com/webhook"
});

console.log('Created request:', request.id);`}
                />
              </TabsContent>

              <TabsContent value="python">
                <CodeBlock 
                  title="Create Signature Request (Python)"
                  language="python"
                  code={`from signcentro import Signcentro

client = Signcentro(api_key="sc_live_***")

request = client.signature_requests.create(
    document_url="https://example.com/contract.pdf",
    title="Service Agreement",
    signers=[{
        "name": "Jane Doe",
        "email": "jane@example.com",
        "role": "Client"
    }],
    callback_url="https://app.example.com/webhook"
)

print(f"Created request: {request.id}")`}
                />
              </TabsContent>

              <TabsContent value="webhook">
                <CodeBlock 
                  title="Example Webhook Payload (document.completed)"
                  language="json"
                  code={`{
  "event": "document.completed",
  "created_at": "2024-05-14T10:30:00Z",
  "data": {
    "request_id": "req_8f92a4b1",
    "status": "completed",
    "title": "Service Agreement",
    "download_url": "https://api.signcentro.com/v1/documents/req_8f92a4b1/download",
    "audit_trail_url": "https://api.signcentro.com/v1/documents/req_8f92a4b1/audit",
    "signers": [
      {
        "email": "jane@example.com",
        "status": "signed",
        "signed_at": "2024-05-14T10:29:45Z"
      }
    ]
  }
}`}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <CTASection 
          title="Start Building with Signcentro" 
          subtitle="Get access to sandbox environments, extensive documentation, and developer support for embedded and WhatsApp signing."
          primaryText="Contact Developer Relations"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
