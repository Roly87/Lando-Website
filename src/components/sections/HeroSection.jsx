import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100vh] flex items-center pt-24 pb-16 bg-background">
      <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] pointer-events-none animate-float-a" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-accent/20 blur-[120px] pointer-events-none animate-float-b" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px] pointer-events-none opacity-50" />

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
            <Link
              to="/world"
              className="relative overflow-hidden inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
              Meet the whole Lando <ArrowDownRight className="w-4 h-4 group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/story"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-[15px] border border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 hover:scale-105 active:scale-95"
            >
              My story
            </Link>
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