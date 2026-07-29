import AnimatedElement from "@/components/AnimatedElement";

const cultureItems = [
  { emoji: "💿", title: "Britney Spears", desc: "Pop history, performance, resilience, reinvention, and a forever favorite." },
  { emoji: "🎭", title: "Broadway", desc: "Live theater, spectacle, storytelling, choreography, and the feeling of a curtain rising." },
  { emoji: "👑", title: "Drag culture", desc: "RuPaul's Drag Race, artistry, humor, transformation, fashion, and queer excellence." },
  { emoji: "🇨🇺", title: "Cuban roots", desc: "Miami, family, music, food, language, identity, and a culture that travels with me." },
  { emoji: "🐈", title: "My cats", desc: "Roommates, supervisors, chaos agents, and part of what makes home feel like home." },
  { emoji: "🌉", title: "San Francisco", desc: "Five years of becoming, finding community, and learning to call a new city home." },
  { emoji: "🤖", title: "AI + IT", desc: "New technology, experimentation, building, troubleshooting, and the thrill of possibility." },
  { emoji: "❤️", title: "Love", desc: "My relationship, shared life, growth, creativity, and building a future with someone." },
];

export default function CultureSection() {
  return (
    <section id="culture" className="py-24 relative bg-secondary/30">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none animate-float-a" />

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <AnimatedElement>
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">05 / Culture + Joy</p>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              The things that<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">light me up.</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={150}>
            <p className="max-w-[380px] m-0 text-muted-foreground text-lg">
              Because a personal website should have personality, taste, obsession, and joy.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item, i) => (
            <AnimatedElement key={i} delay={i * 80}>
              <article className="p-7 rounded-[24px] bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 hover:bg-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <span className="block text-4xl mb-4 drop-shadow-sm">{item.emoji}</span>
                <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="m-0 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}