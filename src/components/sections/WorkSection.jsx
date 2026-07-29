import { ArrowRight } from "lucide-react";
import AnimatedElement from "@/components/AnimatedElement";

const workItems = [
  { label: "Operations Leadership", title: "Clear systems for complex workplaces", desc: "I design structure around facilities, fleet, workplace support, vendors, documentation, and service delivery.", tags: ["Listen", "Map", "Build", "Improve"], isFlow: true },
  { label: "Selected GLIDE Work", title: "Mission-driven operations", desc: "Selected projects include fleet program development, facilities systems, a Zendesk-centered Operations Help Center, driver onboarding, digital forms, and workplace communications.", tags: ["Facilities", "Fleet", "Zendesk", "OHC"], isFlow: false },
  { label: "Tech + AI", title: "Turning new tools into useful tools", desc: "I use AI and technology for prototypes, design, research, documentation, automation concepts, process maps, and better internal experiences.", tags: ["AI", "IT", "Automation", "UX"], isFlow: false },
];

export default function WorkSection() {
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
              <article className="p-8 rounded-[24px] bg-card border border-border flex flex-col h-full hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
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