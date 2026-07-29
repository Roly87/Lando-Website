import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import AnimatedElement from "@/components/AnimatedElement";

const sections = [
  { num: "01", to: "/story", title: "My Story", desc: "From Miami to San Francisco — the chapters that shaped me." },
  { num: "02", to: "/world", title: "My World", desc: "The things that make me who I am, beyond the résumé." },
  { num: "03", to: "/work", title: "Work", desc: "Operations, systems, and tech built for people." },
  { num: "04", to: "/studio", title: "Creative Studio", desc: "Graphics, concepts, and things I make because I have to." },
  { num: "05", to: "/culture", title: "Culture + Joy", desc: "Pop, Broadway, drag, roots, and the things that light me up." },
  { num: "06", to: "/AfterHours", title: "After Hours", desc: "A quieter, more personal corner. Passcode required." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <section className="py-24 relative bg-secondary/20">
        <div className="max-w-[1180px] mx-auto px-6 relative z-10">
          <AnimatedElement>
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">Explore</p>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] mb-16 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              The whole <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Lando.</span>
            </h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <AnimatedElement key={s.to} delay={i * 80}>
                <Link to={s.to} className="group block p-8 rounded-[24px] bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-extrabold text-3xl text-muted/30 group-hover:text-primary/20 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>{s.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed m-0">{s.desc}</p>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}