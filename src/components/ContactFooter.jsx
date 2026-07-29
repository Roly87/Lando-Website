import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-[1180px] mx-auto px-6 py-14">
        <p className="font-mono text-xs tracking-[0.18em] uppercase font-semibold text-primary mb-6">Let's connect</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:lando@delrio.app"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-[11px] tracking-[0.14em] uppercase font-bold text-muted-foreground">Email</span>
              <span className="text-foreground font-medium">lando@delrio.app</span>
            </span>
            <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/lando-delrio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-card border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-[11px] tracking-[0.14em] uppercase font-bold text-muted-foreground">LinkedIn</span>
              <span className="text-foreground font-medium">/in/Lando-DelRio</span>
            </span>
            <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>
        <p className="mt-8 text-[13px] text-muted-foreground">© {new Date().getFullYear()} Lando Del Rio · Miami roots, San Francisco life</p>
      </div>
    </footer>
  );
}