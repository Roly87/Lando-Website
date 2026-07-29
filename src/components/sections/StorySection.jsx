import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import AnimatedElement from "@/components/AnimatedElement";

const staticFallback = [
  { index: "01", location: "Miami / Florida", title: "Cuban roots, big personality", description: "Raised in a Cuban-American family with music, culture, humor, faith, food, and a strong sense of identity always close by." },
  { index: "02", location: "At Sea", title: "Cruise ship chapter", description: "Worked in the cruise industry, learning service, performance, adaptability, and how to connect with people from everywhere." },
  { index: "03", location: "California", title: "A move west", description: "Built a new life in the Bay Area and eventually made San Francisco home." },
  { index: "04", location: "Mission-driven work", title: "Operations with purpose", description: "Grew through frontline service, community safety, facilities, fleet, workplace support, systems improvement, and leadership." },
  { index: "05", location: "Now", title: "More than one lane", description: "Exploring design, AI, graphics, shirts, music, culture, and a more personal creative identity alongside my operations career." },
];

export default function StorySection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    base44.entities.TimelineCard.list().then(setCards).catch(() => {});
  }, []);

  const items = cards.length > 0 ? cards : staticFallback;

  return (
    <section id="story" className="py-24 relative bg-secondary/30">
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <AnimatedElement>
          <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">01 / My Story</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-start">
          <AnimatedElement delay={80} className="sticky top-32">
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] mb-6 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              From Florida<br />
              to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">San Francisco.</span>
            </h2>
            <p className="text-2xl mb-5 text-foreground font-medium" style={{ fontFamily: "'Syne', sans-serif" }}>
              My career is only one part of the story.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Cuban-American from Miami who made a life across coasts, industries, stages, ships, workplaces, and communities. Five years in San Francisco have changed how I see myself, my work, and what I want to create next.
            </p>
          </AnimatedElement>

          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden sm:block" />

            {items.map((card, i) => (
              <AnimatedElement key={i} delay={i * 100}>
                <article className="relative px-8 py-7 rounded-[24px] bg-card/60 backdrop-blur-md border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 group">
                  <span className="absolute top-6 right-8 font-extrabold text-5xl text-muted/30 group-hover:text-primary/10 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {card.index}
                  </span>
                  <div className="relative z-10">
                    <small className="text-[11px] tracking-[0.14em] uppercase font-bold text-accent mb-3 block">
                      {card.location}
                    </small>
                    <h3 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed m-0 pr-8">
                      {card.description}
                    </p>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}