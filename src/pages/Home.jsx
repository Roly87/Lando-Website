import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Settings, Sparkles, Music, Cpu, Heart, ArrowDownRight, ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";

// CSS Injection for custom animations preserving the site's original feel
const styles = `
  @keyframes floatA {
    0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
    50% { transform: translateY(-20px) scale(1.05) rotate(2deg); }
  }
  @keyframes floatB {
    0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
    50% { transform: translateY(15px) scale(0.95) rotate(-2deg); }
  }
  @keyframes shimmer {
    0% { transform: translateX(-150%); }
    100% { transform: translateX(150%); }
  }
  @keyframes sparkPulse {
    0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--primary), 0.6); }
    50% { opacity: 0.5; transform: scale(0.8); box-shadow: 0 0 10px 4px rgba(var(--primary), 0); }
  }
  .animate-shimmer { animation: shimmer 2.5s infinite; }
  .animate-float-a { animation: floatA 12s ease-in-out infinite; }
  .animate-float-b { animation: floatB 15s ease-in-out infinite reverse; }
  .animate-spark { animation: sparkPulse 2s infinite; }
`;

const AnimatedElement = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      return;
    }
    const fallback = setTimeout(() => setIsVisible(true), 800 + delay);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 100px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const iconMap = { Settings, Sparkles, Music, Cpu, Heart };

function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center pt-24 pb-16 bg-background">
      {/* Ambient orbs - Enhanced for wow factor without hardcoded hex */}
      <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] pointer-events-none animate-float-a" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-accent/20 blur-[120px] pointer-events-none animate-float-b" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px] pointer-events-none opacity-50" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 max-w-[1180px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px]"
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-spark" />
            Miami Roots · San Francisco Life
          </div>

          <h1 className="font-bold text-[clamp(52px,9vw,112px)] leading-[0.96] tracking-[-0.03em] mb-7 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
            Operator.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer">
              Creator.
            </span><br />
            Human.
          </h1>

          <p className="text-[clamp(17px,2vw,21px)] max-w-[560px] mb-10 leading-relaxed text-muted-foreground">
            I'm Lando Del Rio. I build systems, make things look better, love pop culture deeply, and keep finding new ways to connect technology, creativity, and real life.
          </p>

          <div className="flex gap-4 flex-wrap mb-10">
            <a
              href="#world"
              className="relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              Meet the whole Lando <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] border border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              My story
            </a>
          </div>

          <div className="flex gap-2 flex-wrap">
            {["Operations", "Design", "AI + IT", "Music + Theater", "Cuban-American"].map(t => (
              <span key={t} className="text-[11px] font-semibold px-4 py-1.5 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground tracking-[0.1em] uppercase hover:border-primary/40 hover:text-foreground transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const [cards, setCards] = useState([]);

  const staticFallback = [
    { index: "01", location: "Miami / Florida", title: "Cuban roots, big personality", description: "Raised in a Cuban-American family with music, culture, humor, faith, food, and a strong sense of identity always close by." },
    { index: "02", location: "At Sea", title: "Cruise ship chapter", description: "Worked in the cruise industry, learning service, performance, adaptability, and how to connect with people from everywhere." },
    { index: "03", location: "California", title: "A move west", description: "Built a new life in the Bay Area and eventually made San Francisco home." },
    { index: "04", location: "Mission-driven work", title: "Operations with purpose", description: "Grew through frontline service, community safety, facilities, fleet, workplace support, systems improvement, and leadership." },
    { index: "05", location: "Now", title: "More than one lane", description: "Exploring design, AI, graphics, shirts, music, culture, and a more personal creative identity alongside my operations career." },
  ];

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
            {/* Connecting line */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent hidden sm:block" />
            
            {items.map((card, i) => (
              <AnimatedElement key={i} delay={i * 100}>
                <article
                  className="relative px-8 py-7 rounded-[24px] bg-card/60 backdrop-blur-md border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1.5 group"
                >
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

function WorldSection() {
  const [worldCards, setWorldCards] = useState([]);

  const staticFallback = [
    { icon: "Settings", tag: "Work + Systems", title: "Operations that make sense", description: "Facilities, fleet, service desks, technology, process design, leadership, and mission-driven work. GLIDE is an important chapter, not the entire book." },
    { icon: "Sparkles", tag: "Creative Studio", title: "Graphics, concepts, and things I want to make", description: "Visual design, shirts, posters, branding experiments, layouts, and the beginning of a creative side hustle." },
    { icon: "Music", tag: "Pop + Stage", title: "Britney, Broadway, and drag", description: "Music, live theater, RuPaul's Drag Race, gay culture, performance, camp, and the art of reinvention." },
    { icon: "Cpu", tag: "Tech Curiosity", title: "IT, AI, and whatever is next", description: "I love new tools, experimenting with AI, building prototypes, troubleshooting systems, and imagining better ways to work." },
    { icon: "Heart", tag: "Real Life", title: "Love, cats, home, and becoming", description: "My relationship, my cats, my life in San Francisco, and the quieter parts of who I am outside of work." },
  ];

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
                <article
                  className="relative p-8 rounded-[24px] bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col"
                >
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
                  
                  {/* Decorative glow on hover */}
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

function WorkSection() {
  const workItems = [
    { label: "Operations Leadership", title: "Clear systems for complex workplaces", desc: "I design structure around facilities, fleet, workplace support, vendors, documentation, and service delivery.", tags: ["Listen", "Map", "Build", "Improve"], isFlow: true },
    { label: "Selected GLIDE Work", title: "Mission-driven operations", desc: "Selected projects include fleet program development, facilities systems, a Zendesk-centered Operations Help Center, driver onboarding, digital forms, and workplace communications.", tags: ["Facilities", "Fleet", "Zendesk", "OHC"], isFlow: false },
    { label: "Tech + AI", title: "Turning new tools into useful tools", desc: "I use AI and technology for prototypes, design, research, documentation, automation concepts, process maps, and better internal experiences.", tags: ["AI", "IT", "Automation", "UX"], isFlow: false },
  ];

  return (
    <section id="work" className="py-24 relative bg-secondary/20">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none animate-float-b" />
      
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <AnimatedElement>
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">03 / Work</p>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              What I build<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">for people.</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={150}>
            <p className="max-w-[380px] m-0 text-muted-foreground text-lg">
              A simplified look at my professional work without turning the entire site into an employer case study.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workItems.map((item, i) => (
            <AnimatedElement key={i} delay={i * 120}>
              <article
                className="p-8 rounded-[24px] bg-card border border-border flex flex-col h-full hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="mb-8 flex-grow">
                  <small className="text-[11px] tracking-[0.14em] uppercase font-bold text-accent mb-3 block">
                    {item.label}
                  </small>
                  <h3 className="text-[22px] font-bold mb-4 text-foreground leading-[1.2]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed m-0">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 flex-wrap pt-6 border-t border-border mt-auto">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="inline-flex items-center">
                      <span className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground group-hover:border-primary/30 transition-colors">
                        {tag}
                      </span>
                      {item.isFlow && ti < item.tags.length - 1 && (
                        <ArrowRight className="w-3 h-3 mx-1 text-muted-foreground" />
                      )}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioSection() {
  // Using theme tokens creatively for gradients to adhere to strict rules while maintaining "wow"
  const posters = [
    { label: "Concept 01", title: "Loud\nOn Purpose", bgClass: "from-primary/20 via-primary/10 to-transparent", textClass: "text-foreground" },
    { label: "Concept 02", title: "Miami\nTo SF", bgClass: "from-accent/20 via-accent/10 to-transparent", textClass: "text-foreground" },
    { label: "Concept 03", title: "Cuban\nFuture", bgClass: "from-secondary/40 via-secondary/20 to-transparent", textClass: "text-foreground" },
    { label: "Concept 04", title: "Pop\nOperations", bgClass: "from-primary/10 via-accent/10 to-transparent", textClass: "text-foreground" },
  ];

  return (
    <section id="studio" className="py-24 relative bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <AnimatedElement>
            <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-4">04 / Creative Studio</p>
            <h2 className="font-extrabold text-[clamp(34px,5.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
              I make things<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">because I have to.</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement delay={150}>
            <p className="max-w-[380px] m-0 text-muted-foreground text-lg">
              A growing home for visual work, concepts, experiments, and the future shirt project.
            </p>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posters.map((poster, i) => (
              <div
                key={i}
                className={`rounded-[24px] p-8 flex flex-col justify-between border border-border/50 bg-gradient-to-br ${poster.bgClass} backdrop-blur-sm relative overflow-hidden group hover:scale-[1.03] hover:shadow-2xl hover:border-primary/50 transition-all duration-500`}
                style={{ aspectRatio: "3/4" }}
              >
                <div className="absolute inset-0 bg-card/40 backdrop-blur-[2px] z-0" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <small className="text-[11px] tracking-[0.16em] uppercase font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {poster.label}
                  </small>
                  <strong 
                    className={`text-3xl leading-[1.05] font-black whitespace-pre-line ${poster.textClass} drop-shadow-md group-hover:scale-105 group-hover:translate-x-2 transition-transform duration-500 origin-bottom-left`} 
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {poster.title}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

function CultureSection() {
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
              <article
                className="p-7 rounded-[24px] bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 hover:bg-card hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
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

function AfterHoursSection() {
  return (
    <section id="after-hours" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary),0.15),transparent_70%)]" />
      
      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <AnimatedElement>
          <div className="rounded-[40px] p-10 md:p-16 bg-card/40 backdrop-blur-2xl border border-border shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 relative z-10">
              <div className="flex flex-col justify-center">
                <p className="font-mono text-xs tracking-[0.18em] uppercase font-bold text-primary mb-4">06 / After Hours</p>
                <h3 className="font-extrabold text-3xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                  A quieter, more personal corner.
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground max-w-xl">
                  A separate space for longer reflections on music, gay culture, relationships, identity, art, the cruise ship years, the move from Florida, and whatever I am thinking about lately.
                </p>
                
                <div>
                  <a
                    href="/AfterHours"
                    className="relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[15px] bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    Enter After Hours <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center">
                {[
                  { label: "Currently thinking about", text: "Pop stars, reinvention, and why performance matters." },
                  { label: "Personal archive", text: "Florida, cruise ships, California, San Francisco." },
                  { label: "Unfiltered interests", text: "Broadway, drag, design, music, relationships, cats, and culture." },
                ].map((note, i) => (
                  <div key={i} className="p-5 rounded-[20px] bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-border transition-colors">
                    <strong className="block text-[11px] tracking-[0.14em] uppercase font-bold text-accent mb-2">
                      {note.label}
                    </strong>
                    <span className="text-[15px] text-foreground font-medium">
                      {note.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <style>{styles}</style>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <HeroSection />
        <StorySection />
        <WorldSection />
        <WorkSection />
        <StudioSection />
        <CultureSection />
        <AfterHoursSection />
      </main>
    </>
  );
}