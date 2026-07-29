import StudioSection from "@/components/sections/StudioSection";
import ContactFooter from "@/components/ContactFooter";

export default function Studio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StudioSection />
      <ContactFooter />
    </main>
  );
}