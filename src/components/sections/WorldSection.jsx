import { useState, useEffect } from "react";
import { Settings, Sparkles, Music, Cpu, Heart } from "lucide-react";
import { base44 } from "@/api/base44Client";
import AnimatedElement from "@/components/AnimatedElement";

const iconMap = { Settings, Sparkles, Music, Cpu, Heart };

const staticFallback = [
  { icon: "Settings", tag: "Work + Systems", title: "Operations that make sense", description: "Facilities, fleet, service desks, technology, process design, leadership, and mission-driven work. GLIDE is an important chapter, not the entire book." },
  { icon: "Sparkles", tag: "Creative Studio", title: "Graphics, concepts, and things I want to make", description: "Visual design, shirts, posters, branding experiments, layouts, and the beginning of a creative side hustle." },
  { icon: "Music", tag: "Pop + Stage", title: "Britney, Broadway, and drag", description: "Music, live theater, RuPaul's Drag Race, gay culture, performance, camp, and the art of reinvention." },
  { icon: "Cpu", tag: "Tech Curiosity", title: "IT, AI, and whatever is next", description: "I love new tools, experimenting with AI, building prototypes, troubleshooting systems, and imagining better ways to work." },
  { icon: "Heart", tag: "Real Life", title: "Love, cats, home, and becoming", description: "My relationship, my cats, my life in San Francisco, and the quieter parts of who I am outside of work." },
];

export default function WorldSection() {
  const [worldCards, setWorldCards] = useState([]);

  useEffect(() => {
    base44.entities.WorldCard.list().then(setWorldCards).catch(() => {});
  }, []);

  const items = worldCards.length > 0 ? worldCards : staticFallback;

  return (
    <section id="world" className="py-24 relative bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none animate-float-a" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <AnimatedElement>
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">02 / My World</p>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              Not a résumé.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">A whole person.</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={150}>
            <p className="max-w-[380px] m-0 text-muted-foreground text-lg">
              The site is organized around the things that actually make me who I am, not just my current job.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => {
            const IconComp = iconMap[card.icon] || Settings;
            return (
              <AnimatedElement key={i} delay={i * 100}>
                <article className="relative p-8 rounded-[24px] bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] tracking-[0.14em] uppercase font-bold text-muted-foreground mb-2 block">
                    {card.tag}
                  </span>
                  <h3 className="text-[22px] font-bold mb-3 text-foreground leading-[1.2]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {card.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed m-0 mt-auto">
                    {card.description}
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </article>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}