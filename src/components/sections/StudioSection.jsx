import AnimatedElement from "@/components/AnimatedElement";

const posters = [
  { label: "Concept 01", title: "Loud\nOn Purpose", bgClass: "from-primary/20 via-primary/10 to-transparent", textClass: "text-foreground" },
  { label: "Concept 02", title: "Miami\nTo SF", bgClass: "from-accent/20 via-accent/10 to-transparent", textClass: "text-foreground" },
  { label: "Concept 03", title: "Cuban\nFuture", bgClass: "from-secondary/40 via-secondary/20 to-transparent", textClass: "text-foreground" },
  { label: "Concept 04", title: "Pop\nOperations", bgClass: "from-primary/10 via-accent/10 to-transparent", textClass: "text-foreground" },
];

export default function StudioSection() {
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