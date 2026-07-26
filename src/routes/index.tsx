import { createFileRoute } from "@tanstack/react-router";
import detective from "@/assets/detective.png";
import forestBg from "@/assets/forest-bg.jpg";
import treeEmblem from "@/assets/blackwood-tree.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackwood Company — A Gothic Detective Visual Novel" },
      {
        name: "description",
        content:
          "Enter the Blackwood Company. A gothic detective visual novel set in a mist-shrouded European town where every silence hides a name.",
      },
      { property: "og:title", content: "Blackwood Company — A Gothic Detective Visual Novel" },
      {
        property: "og:description",
        content:
          "A cinematic noir mystery. Step into the Blackwood Company and unravel the town's oldest secrets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-noir-950 text-ink">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bw-fade-in"
        style={{ backgroundImage: `url(${forestBg})` }}
        aria-hidden
      />
      {/* Vignette + darkening overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(9,9,9,0.55) 0%, rgba(9,9,9,0.9) 60%, #090909 100%)",
        }}
        aria-hidden
      />
      {/* Slow drifting fog */}
      <div
        className="pointer-events-none absolute inset-0 bw-fog mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 40% at 30% 80%, rgba(200,161,90,0.05), transparent 70%), radial-gradient(50% 35% at 70% 70%, rgba(255,255,255,0.04), transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bw-fog-alt mix-blend-screen"
        style={{
          background:
            "radial-gradient(45% 30% at 50% 90%, rgba(255,255,255,0.05), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />
      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
        aria-hidden
      />

      {/* Top bar — logo */}
      <header className="relative z-20 flex items-center justify-between px-8 py-8 md:px-14 md:py-10">
        <div className="flex items-center gap-4 bw-fade-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={treeEmblem}
            alt="Blackwood Company emblem"
            className="h-12 w-12 md:h-14 md:w-14 opacity-90"
            style={{ filter: "drop-shadow(0 0 12px rgba(200,161,90,0.15))" }}
          />
          <div className="leading-tight">
            <div
              className="text-[0.65rem] md:text-xs uppercase tracking-[0.35em]"
              style={{ color: "var(--gold)" }}
            >
              Est. MDCCCLXXXVII
            </div>
            <div
              className="font-serif-display text-lg md:text-xl tracking-wide"
              style={{ color: "var(--ink)" }}
            >
              Blackwood Company
            </div>
          </div>
        </div>

        <nav
          className="hidden md:flex items-center gap-10 text-[0.7rem] uppercase tracking-[0.35em] bw-fade-up"
          style={{ animationDelay: "0.25s", color: "var(--ink-dim)" }}
        >
          <a href="#chapters" className="hover:text-[var(--gold)] transition-colors">Chapters</a>
          <a href="#dossier" className="hover:text-[var(--gold)] transition-colors">Dossier</a>
          <a href="#agency" className="hover:text-[var(--gold)] transition-colors">The Agency</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1400px] grid-cols-1 items-end gap-10 px-8 pb-20 md:grid-cols-12 md:px-14 md:pb-24">
        {/* Character — left side */}
        <div className="relative md:col-span-5 flex md:justify-start justify-center">
          <div className="relative bw-char-float">
            <img
              src={detective}
              alt="A gothic detective of the Blackwood Company"
              className="h-[55vh] md:h-[75vh] w-auto max-w-none object-contain bw-fade-up"
              style={{
                animationDelay: "0.6s",
                animationDuration: "2s",
                filter:
                  "drop-shadow(0 40px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.6))",
              }}
            />
            {/* Info card near legs */}
            <div
              className="absolute left-1/2 md:left-[62%] bottom-2 -translate-x-1/2 md:translate-x-0 w-[240px] bw-fade-up"
              style={{ animationDelay: "1.4s" }}
            >
              <div
                className="border-l pl-4 py-2"
                style={{ borderColor: "var(--gold)" }}
              >
                <div
                  className="text-[0.6rem] uppercase tracking-[0.4em]"
                  style={{ color: "var(--gold)" }}
                >
                  Subject № 007
                </div>
                <div
                  className="font-serif-display text-xl mt-1"
                  style={{ color: "var(--ink)" }}
                >
                  Ashford E. Vale
                </div>
                <div
                  className="text-[0.65rem] uppercase tracking-[0.3em] mt-1"
                  style={{ color: "var(--ink-dim)" }}
                >
                  Lead Investigator
                </div>
                <div
                  className="text-[0.6rem] uppercase tracking-[0.3em] mt-3"
                  style={{ color: "var(--ink-dim)" }}
                >
                  Blackwood Company · Ravensmoor Branch
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text — center/right */}
        <div className="relative md:col-span-7 md:pl-8 lg:pl-16">
          <div
            className="text-[0.7rem] md:text-xs uppercase tracking-[0.5em] mb-6 bw-fade-up"
            style={{ animationDelay: "0.8s", color: "var(--gold)" }}
          >
            A Gothic Detective Visual Novel
          </div>

          <h1
            className="font-serif-display font-light leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] bw-fade-up"
            style={{ animationDelay: "1s", color: "var(--ink)" }}
          >
            The Silence
            <br />
            <span style={{ color: "var(--gold)" }} className="italic font-normal">
              of Ravensmoor
            </span>
          </h1>

          <p
            className="mt-10 max-w-md text-sm md:text-base leading-relaxed bw-fade-up"
            style={{ animationDelay: "1.3s", color: "var(--ink-dim)" }}
          >
            <span
              className="block mb-3 text-2xl md:text-3xl font-serif-display italic"
              style={{ color: "var(--ink)" }}
            >
              "Every town keeps a name it will not speak.
              <br />
              Ours has forgotten seven."
            </span>
            — from the private ledger of E. Blackwood, 1902.
          </p>

          <div className="mt-12 flex items-center gap-8 bw-fade-up" style={{ animationDelay: "1.6s" }}>
            <a
              href="#enter"
              className="group relative inline-flex items-center gap-4 border px-8 py-4 text-[0.7rem] uppercase tracking-[0.4em] transition-all duration-500"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(200,161,90,0.35), inset 0 0 20px rgba(200,161,90,0.1)";
                e.currentTarget.style.backgroundColor = "rgba(200,161,90,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span>Enter the Investigation</span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div
              className="hidden sm:block text-[0.6rem] uppercase tracking-[0.4em]"
              style={{ color: "var(--ink-dim)" }}
            >
              Chapter I
              <br />
              Autumn MMXXVI
            </div>
          </div>
        </div>
      </section>

      {/* Bottom rule */}
      <div
        className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-8 pb-10 md:px-14 text-[0.6rem] uppercase tracking-[0.4em] bw-fade-up"
        style={{ animationDelay: "2s", color: "var(--ink-dim)" }}
      >
        <span>Ravensmoor · Northern Provinces</span>
        <span className="hidden md:inline">Case File I / VII</span>
        <span>© Blackwood &amp; Co.</span>
      </div>
    </main>
  );
}
