import { createFileRoute } from "@tanstack/react-router";
import detectiveAsset from "@/assets/detective.png";
import treeBg from "@/assets/tree.png";
import treeEmblem from "@/assets/blackwood-tree.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Hawthorne Accident — A Blackwood Company Case File" },
      {
        name: "description",
        content:
          "A gothic detective visual novel. Some accidents leave a body. This one left a client list. Enter the Blackwood Company.",
      },
      { property: "og:title", content: "The Hawthorne Accident — A Blackwood Company Case File" },
      {
        property: "og:description",
        content:
          "A gothic detective visual novel. Some accidents leave a body. This one left a client list.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div
      className="relative w-full overflow-hidden md:h-screen md:overflow-hidden"
      style={{ background: "var(--bg-black)", minHeight: "100vh" }}
    >
      {/* Background layer */}
      <div
        aria-hidden
        className="absolute bw-drift"
        style={{
          inset: "-3% -3% -3% -3%",
          backgroundImage: `url(${treeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Subtle right-side gradient for text legibility only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(7,7,10,0.72) 0%, rgba(7,7,10,0.35) 30%, rgba(7,7,10,0) 55%)",
        }}
      />


      {/* Brandmark — top right */}
      <div
        className="absolute z-10 flex items-center gap-3 bw-fade-up"
        style={{ top: "5vh", right: "5vw", animationDelay: "0.2s" }}
      >
        <div
          className="leading-[1.5] text-right"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            color: "var(--text-dim)",
          }}
        >
          BLACKWOOD COMPANY
          <strong
            className="block font-semibold"
            style={{ color: "var(--gold-bright)", fontSize: "0.82rem" }}
          >
            Discreet Investigations
          </strong>
        </div>
        <img
          src={treeEmblem}
          alt="Blackwood Company emblem"
          className="h-[42px] w-[42px] opacity-95"
        />
      </div>


      {/* Detective — left */}
      <div
        className="relative md:absolute z-[4] flex items-end justify-center bw-char-up"
        style={{
          left: "3vw",
          bottom: 0,
          height: "96vh",
          width: "34vw",
          minWidth: "25vw",
          animationDelay: "0.5s",
        }}
      >
        <img
          src={detectiveAsset}
          alt="The detective"
          className="h-auto w-full max-h-full"
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
            filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.65))",
          }}
        />
      </div>

      {/* Case tag — near detective legs */}
      <div
        className="absolute z-[6] bw-fade-up"
        style={{
          left: "calc(3vw + 2rem)",
          bottom: "8vh",
          width: "15.5rem",
          background: "var(--panel)",
          border: "1px solid var(--hairline)",
          padding: "1.1rem 1.3rem 1.2rem 1.3rem",
          backdropFilter: "blur(2px)",
          animationDelay: "1.6s",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Subject
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            color: "var(--text-primary)",
            letterSpacing: "0.03em",
            marginBottom: "0.15rem",
          }}
        >
          Detective Blackwood
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "0.86rem",
            color: "var(--text-dim)",
          }}
        >
          Investigator, hired by the executor
        </div>

      </div>

      {/* Content — right */}
      <div
        className="absolute z-[5] text-right"
        style={{
          right: "6vw",
          top: "50%",
          transform: "translateY(-50%)",
          maxWidth: "40vw",
        }}
      >
        <p
          className="relative bw-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.78rem",
            letterSpacing: "0.32em",
            color: "var(--gold)",
            textTransform: "uppercase",
            margin: "0 0 1.1rem 0",
            paddingRight: "2.4rem",
            animationDelay: "0.9s",
          }}
        >
          Case Nº 1 · A Visual Novel Mystery
          <span
            aria-hidden
            className="absolute"
            style={{
              right: 0,
              top: "50%",
              width: "1.8rem",
              height: "1px",
              background: "var(--gold)",
              transform: "translateY(-50%)",
            }}
          />
        </p>
        <h1
          className="bw-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 5.5vw, 4.1rem)",
            lineHeight: 1.02,
            letterSpacing: "0.01em",
            color: "var(--text-primary)",
            margin: "0 0 1.1rem 0",
            textShadow:
              "0 0 40px rgba(201,162,103,0.28), 0 4px 24px rgba(0,0,0,0.6)",
            animationDelay: "1.1s",
          }}
        >
          The Hawthorne
          <br />
          Accident
        </h1>
        <p
          className="bw-fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.98rem",
            letterSpacing: "0.14em",
            color: "var(--gold-bright)",
            textTransform: "uppercase",
            margin: "0 0 1.6rem 0",
            animationDelay: "1.3s",
          }}
        >
          A Blackwood Company Case File
        </p>
        <p
          className="ml-auto bw-fade-up"
          style={{
            fontFamily: "var(--font-body)",
            fontStyle: "italic",
            fontSize: "1.28rem",
            color: "var(--text-dim)",
            lineHeight: 1.5,
            margin: "0 0 2.4rem auto",
            maxWidth: "30vw",
            animationDelay: "1.5s",
          }}
        >
          Some accidents leave a body. This one left a client list.
        </p>
        <div
          className="flex items-center justify-end gap-6 bw-fade-up"
          style={{ marginBottom: "2.4rem", animationDelay: "1.75s" }}
        >
          <a
            href="#play"
            className="inline-block cursor-pointer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.92rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--bg-black)",
              background:
                "linear-gradient(180deg, var(--gold-bright), var(--gold))",
              border: "none",
              padding: "1rem 2.4rem",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(201,162,103,0.25)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 36px rgba(201,162,103,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(201,162,103,0.25)";
            }}
          >
            Download &amp; Play
          </a>
        </div>
        <p
          className="bw-fade-up"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--text-dim)",
            letterSpacing: "0.02em",
            animationDelay: "1.95s",
          }}
        >
          <span>Free</span>
          <span style={{ margin: "0 0.6rem", color: "var(--gold)" }}>·</span>
          <span>~45–60 min</span>
          <span style={{ margin: "0 0.6rem", color: "var(--gold)" }}>·</span>
          <span>Windows · Mac · Web</span>
        </p>
      </div>

      {/* Case number — bottom right */}
      <div
        className="absolute z-[5] bw-fade-up"
        style={{
          right: "6vw",
          bottom: "5vh",
          fontFamily: "var(--font-display)",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
          animationDelay: "2.1s",
        }}
      >
        Status: <strong style={{ color: "var(--gold)" }}>Open</strong>
      </div>
    </div>
  );
}
