import { Link } from "react-router-dom";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { to: "/story", label: "Story" },
    { to: "/world", label: "World" },
    { to: "/work", label: "Work" },
    { to: "/studio", label: "Studio" },
    { to: "/culture", label: "Culture" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-[1180px] mx-auto px-6 py-12">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <Link to="/" className="flex items-center gap-3 no-underline" style={{ textDecoration: "none" }}>
            <span className="block w-9 h-9 rounded-[10px] overflow-hidden shadow-lg">
              <Image
                src="https://media.base44.com/images/public/6a691477eeba47d9f6e54520/9338c38ce_LD-App-Icon.png"
                alt="Lando Del Rio logo"
                fittingType="fill"
                className="w-full h-full"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-bold text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                Lando Del Rio
              </span>
              <small className="text-muted-foreground font-medium text-[10px] uppercase tracking-widest mt-[2px]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Operator. Creator. Human.
              </small>
            </span>
          </Link>

          <div className="flex gap-5 flex-wrap">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-[14px] no-underline text-muted-foreground hover:text-foreground transition-colors duration-200">
                {l.label}
              </Link>
            ))}
            <Link to="/AfterHours" className="text-[14px] no-underline text-muted-foreground hover:text-accent transition-colors duration-200">
              After Hours
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-5 border-t border-border">
          <a
            href="mailto:lando@delrio.app"
            className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-muted-foreground">Email</span>
              <span className="text-foreground text-[14px] font-medium">lando@delrio.app</span>
            </span>
            <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/lando-delrio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] tracking-[0.14em] uppercase font-bold text-muted-foreground">LinkedIn</span>
              <span className="text-foreground text-[14px] font-medium">/in/Lando-DelRio</span>
            </span>
            <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>

        <div className="mt-8 text-[13px] text-muted-foreground">
          © {year} Lando Del Rio · Miami roots, San Francisco life
        </div>
      </div>
    </footer>
  );
}