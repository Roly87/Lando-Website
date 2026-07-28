import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Loader2 } from "lucide-react";

const PASSPHRASE = "lando";

const cards = [
  {
    title: "Why this exists",
    wide: true,
    quote: true,
    body: "I wanted one part of my website that did not have to prove anything. It can just be curious, emotional, funny, nostalgic, gay, Cuban, musical, messy, and mine.",
  },
  { title: "Pop devotion", body: "Britney Spears is more than a favorite singer. Her career opens conversations about performance, fame, control, vulnerability, survival, and the complicated ways audiences consume women." },
  { title: "Queer culture", body: "Gay culture, drag, camp, chosen family, humor, fashion, reinvention, and the joy of seeing ourselves reflected loudly and beautifully." },
  { title: "Theater brain", body: "Broadway, live music, spectacle, stagecraft, choreography, and the emotional electricity of being in a room where something is happening only once." },
  { title: "Florida to California", body: "Miami, Cuban roots, the cruise ship years, the move west, and five years of becoming a different version of myself in San Francisco." },
  { title: "Home life", body: "A relationship, cats, shared space, future plans, everyday tenderness, and the parts of life that are not optimized or measured." },
  { title: "What I am making next", body: "Graphic design, shirts, personal projects, writing, AI experiments, music ideas, and whatever happens when I stop separating professional creativity from personal creativity." },
];

export default function AfterHours() {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("lando-after-hours") === "open") {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = (e) => {
    e?.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (pass.trim().toLowerCase() === PASSPHRASE) {
        setUnlocked(true);
        sessionStorage.setItem("lando-after-hours", "open");
      } else {
        setError("That passphrase did not work.");
      }
      setLoading(false);
    }, 350);
  };

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at 80% 0, rgba(99,102,241,.16), transparent 28%), radial-gradient(circle at 10% 70%, rgba(139,92,246,.16), transparent 30%), #0d0912",
        color: "#fbf5ff",
        fontFamily: "'DM Sans', sans-serif",
        paddingTop: 80,
      }}
    >
      <div style={{ width: "min(calc(100% - 32px), 1050px)", margin: "0 auto", padding: "80px 0 120px" }}>
        <div className="eyebrow" style={{ color: "#8b5cf6", fontSize: ".7rem", fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase" }}>
          A less public side of the site
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3.8rem, 10vw, 8rem)",
            lineHeight: ".88",
            letterSpacing: "-.07em",
            margin: "20px 0 24px",
            fontWeight: 800,
          }}
        >
          After
          <br />
          <span
            style={{
              color: "transparent",
              background: "linear-gradient(100deg, #6366f1, #8b5cf6, #3b82f6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Hours.
          </span>
        </h1>

        <p style={{ maxWidth: 720, color: "#b8aabf", fontSize: "1.15rem", margin: 0 }}>
          Thoughts, memories, obsessions, and pieces of life that do not belong in an executive portfolio.
        </p>

        {!unlocked ? (
          <section
            style={{
              marginTop: 50,
              padding: 26,
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 24,
              background: "rgba(24,17,31,.75)",
              backdropFilter: "blur(18px)",
            }}
          >
            <label style={{ display: "block", fontWeight: 800, marginBottom: 8 }}>
              Enter the corner
            </label>
            <form onSubmit={handleUnlock} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                type="password"
                autoComplete="off"
                placeholder="Passphrase"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: "14px 15px",
                  border: "1px solid rgba(255,255,255,.12)",
                  borderRadius: 13,
                  background: "#0e0a13",
                  color: "#fbf5ff",
                  font: "inherit",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "0 20px",
                  border: 0,
                  borderRadius: 13,
                  color: "#fff",
                  background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                  fontWeight: 800,
                  cursor: loading ? "default" : "pointer",
                  minHeight: 48,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                Unlock
              </button>
            </form>
            <div style={{ marginTop: 10, color: "#8f7f96", fontSize: ".72rem" }}>
              Demo passphrase: <strong>lando</strong>
            </div>
            <div style={{ color: "#ff9cba", fontSize: ".78rem", minHeight: 22, marginTop: 8 }} aria-live="polite">
              {error}
            </div>
          </section>
        ) : (
          <section style={{ marginTop: 60 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }} className="ah-grid">
              {cards.map((card, i) => (
                <article
                  key={i}
                  style={{
                    padding: 26,
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 22,
                    background: "rgba(24,17,31,.75)",
                    backdropFilter: "blur(12px)",
                    gridColumn: card.wide ? "1 / -1" : undefined,
                  }}
                >
                  <h2 style={{ margin: "0 0 10px", fontSize: "1.45rem", fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                    {card.title}
                  </h2>
                  {card.quote ? (
                    <p style={{ margin: 0, fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.55rem", lineHeight: 1.35, color: "#fff" }}>
                    {card.body}
                  </p>
                  ) : (
                    <p style={{ margin: 0, color: "#b8aabf", lineHeight: 1.6 }}>{card.body}</p>
                  )}
                </article>
              ))}
            </div>

            <p style={{ marginTop: 48, color: "#8f7f96", fontSize: ".75rem", lineHeight: 1.6 }}>
              <strong>Privacy note:</strong> this is a lightweight client-side gate for a static prototype, not secure authentication. Use hosting-level password protection or a real login before adding anything truly private.
            </p>

            <Link
              to="/"
              style={{
                display: "inline-flex",
                marginTop: 28,
                padding: "12px 16px",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 12,
                fontWeight: 800,
                color: "#fbf5ff",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ArrowLeft className="w-4 h-4" /> Return to main site
            </Link>
          </section>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .ah-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}