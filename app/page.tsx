import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "Form & Field",
    type: "BRAND SYSTEM · E-COMMERCE",
    image: "photo-1542838132-92c53300491e",
    className: "project-image-market",
  },
  {
    number: "02",
    name: "Still / Studio",
    type: "DIGITAL PRODUCT · ART DIRECTION",
    image: "photo-1494438639946-1ebd1d20bf85",
    className: "project-image-studio",
  },
  {
    number: "03",
    name: "Common Ground",
    type: "IDENTITY · COMMUNITY",
    image: "photo-1441986300917-64674bd600d8",
    className: "project-image-common",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INDEPENDENT DESIGNER & DEVELOPER{" "}
            <span className="eyebrow-year">— BASED IN PORTLAND, OR</span>
          </p>
          <h1>
            Making the
            <br />
            digital feel <span className="serif-italic">human.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I’m Alex Morgan, a multidisciplinary creative building thoughtful
              brands and useful digital experiences for a more considered world.
            </p>
            <Link className="text-link" href="/projects">
              Explore selected work <span>↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-photo"
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85"
            alt="Sunlit creative studio with a desk, chair, and plants"
            width={1500}
            height={1100}
            priority
            unoptimized
          />
          <span className="image-note">A slower kind of studio — 2025</span>
          <span className="hero-index">AM—01</span>
        </div>
        <a className="scroll-cue" href="#selected-work">
          <span>↓</span> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="work-section section-shell" id="selected-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW RECENT FAVORITES</p>
            <h2>
              Selected <span className="serif-italic">work</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span>↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              href="/projects"
              key={project.number}
            >
              <div className={`project-image ${project.className}`}>
                <Image
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1100&q=82`}
                  alt={`${project.name} project visual`}
                  width={1100}
                  height={780}
                  unoptimized
                />
                <span className="project-open">↗</span>
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-meta">
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="intro-band">
        <p className="eyebrow">GOOD WORK STARTS WITH GOOD QUESTIONS</p>
        <div className="intro-band-row">
          <h2>
            Curious by nature.
            <br />
            <span className="serif-italic">Intentional</span> by design.
          </h2>
          <Link
            className="round-link"
            href="/about"
            aria-label="Read more about Alex"
          >
            ↗
          </Link>
        </div>
      </section>
      <section className="home-contact section-shell">
        <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
        <div>
          <h2>
            Let’s make
            <br />
            <span className="serif-italic">something matter.</span>
          </h2>
          <Link className="button-link" href="/contact">
            Start a conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
