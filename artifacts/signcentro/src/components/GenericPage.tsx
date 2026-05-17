import { useSeo } from "@/hooks/use-seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function GenericPage({ title, description }: { title: string, description: string }) {
  useSeo(title, description);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">{description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
