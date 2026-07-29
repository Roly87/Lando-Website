import WorldSection from "@/components/sections/WorldSection";
import ContactFooter from "@/components/ContactFooter";

export default function World() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <WorldSection />
      <ContactFooter />
    </main>
  );
}