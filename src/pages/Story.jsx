import StorySection from "@/components/sections/StorySection";
import ContactFooter from "@/components/ContactFooter";

export default function Story() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StorySection />
      <ContactFooter />
    </main>
  );
}