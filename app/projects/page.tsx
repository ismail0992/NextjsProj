import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects — Alex Morgan",
  description:
    "Selected brand, digital product, and web design projects by Alex Morgan.",
};
const projects = [
  {
    n: "01",
    name: "Form & Field",
    detail: "A more thoughtful kind of grocery store.",
    category: "BRAND SYSTEM · E-COMMERCE · 2025",
    img: "photo-1542838132-92c53300491e",
    color: "project-image-market",
  },
  {
    n: "02",
    name: "Still / Studio",
    detail: "Space to make space.",
    category: "DIGITAL PRODUCT · ART DIRECTION · 2024",
    img: "photo-1494438639946-1ebd1d20bf85",
    color: "project-image-studio",
  },
  {
    n: "03",
    name: "Common Ground",
    detail: "A neighborhood that grows together.",
    category: "IDENTITY · COMMUNITY · 2024",
    img: "photo-1441986300917-64674bd600d8",
    color: "project-image-common",
  },
  {
    n: "04",
    name: "Sunday Objects",
    detail: "Everyday things, made to keep.",
    category: "STRATEGY · IDENTITY · 2023",
    img: "photo-1490312278390-ab64016e0aa9",
    color: "project-image-sunday",
  },
];

export default function ProjectsPage() {
  return (
    <main className="inner-page page-shell">
      <div className="page-kicker">
        <span>SELECTED PROJECTS</span>
        <span>02 / 03</span>
      </div>
      <div className="projects-intro">
          <p className="eyebrow">A FEW GOOD COLLABORATIONS</p>
        <h1>
          Work with
          <br />
          <span className="serif-italic">a point of view.</span>
        </h1>
        <p>
          Every project starts by listening. These are a few outcomes shaped by
          curiosity, clear thinking, and generous collaboration.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((p) => (
          <Link href="/contact" className="project-row" key={p.n}>
            <div className={`project-image ${p.color}`}>
              <Image
                src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=1200&q=82`}
                alt={`${p.name} project`}
                width={1200}
                height={800}
                unoptimized
              />
              <span className="project-number">{p.n}</span>
              <span className="project-open">↗</span>
            </div>
            <div className="project-row-meta">
              <div>
                <span className="eyebrow">{p.category}</span>
                <h2>{p.name}</h2>
                <p>{p.detail}</p>
              </div>
              <span className="project-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="projects-cta">
        <p>Have a project in mind?</p>
        <Link className="text-link" href="/contact">
          Let’s talk about it <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
