import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.11)", padding: "48px 0 40px", marginTop: "0", }}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex justify-between items-end gap-8 flex-wrap">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 no-underline" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "0.02em", textDecoration: "none", fontSize: "20px" }}>
            <span
              className="flex items-center justify-center w-9 h-9 rounded-[10px] text-[15px] font-bold"
              style={{ background: "linear-gradient(100deg, #6366f1, #8b5cf6 55%, #3b82f6)", }}
            >
              LD
            </span>
            <span>
              Lando Del Rio
              <small className="block" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Operator. Creator. Human.
              </small>
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-5 flex-wrap">
            <a href="#story" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#f7f5fa"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>Story</a>
            <a href="#world" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#f7f5fa"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>World</a>
            <a href="#work" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#f7f5fa"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>Work</a>
            <a href="#studio" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#f7f5fa"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>Studio</a>
            <a href="#culture" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#f7f5fa"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>Culture</a>
            <Link to="/AfterHours" className="text-[14px] no-underline transition-all duration-200" style={{ textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = "#9c7cff"; }} onMouseLeave={e => { e.currentTarget.style.color = "#aaa6b4"; }}>After Hours</Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-wrap mt-8 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.11)", fontSize: "13px", }}>
          <span>© {year} Lando Del Rio · Miami roots, San Francisco life</span>
          <span>Built with care, color, and a little bit of Britney.</span>
        </div>
      </div>
    </footer>
  );
}