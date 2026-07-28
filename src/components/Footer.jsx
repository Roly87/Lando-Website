import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "#story", label: "Story" },
    { href: "#world", label: "World" },
    { href: "#work", label: "Work" },
    { href: "#studio", label: "Studio" },
    { href: "#culture", label: "Culture" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1180px] mx-auto px-6 py-12">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          <Link to="/" className="flex items-center gap-3 no-underline" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "0.02em", textDecoration: "none", fontSize: "20px" }}>
            <span className="flex items-center justify-center w-9 h-9 rounded-[10px] text-[15px] font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
              LD
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
              <a key={l.href} href={l.href} className="text-[14px] no-underline text-muted-foreground hover:text-foreground transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <Link to="/AfterHours" className="text-[14px] no-underline text-muted-foreground hover:text-accent transition-colors duration-200">
              After Hours
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-wrap mt-8 pt-5 border-t border-border text-[13px] text-muted-foreground">
          <span>© {year} Lando Del Rio · Miami roots, San Francisco life</span>
          <span>Built with care, color, and a little bit of Britney.</span>
        </div>
      </div>
    </footer>
  );
}