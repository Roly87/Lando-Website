import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Image } from "@/components/ui/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/story", label: "Story" },
    { to: "/world", label: "My World" },
    { to: "/work", label: "Work" },
    { to: "/studio", label: "Studio" },
    { to: "/culture", label: "Culture" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${
        scrolled
          ? "py-3 bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "py-5 bg-background border-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 w-full flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <span className="block w-9 h-9 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Image
              src="https://media.base44.com/images/public/6a691477eeba47d9f6e54520/9338c38ce_LD-App-Icon.png"
              alt="Lando Del Rio logo"
              fittingType="fill"
              className="w-full h-full"
            />
          </span>
          <span className="flex flex-col">
            <span
              className="font-bold text-foreground tracking-wide group-hover:text-primary transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Lando Del Rio
            </span>
            <small
              className="text-muted-foreground font-medium text-[10px] uppercase tracking-widest mt-[2px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Miami → San Francisco
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/AfterHours"
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-primary/25 flex items-center gap-2"
          >
            After Hours <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="sm:hidden">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-foreground hover:bg-secondary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l border-border bg-background/95 backdrop-blur-xl p-6">
            <div className="flex flex-col gap-2 mt-12">
              <Link
                to="/"
                className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-4 h-px bg-border w-full" />
              <Link
                to="/AfterHours"
                className="px-4 py-3 rounded-full text-[15px] font-semibold text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                Enter After Hours <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}