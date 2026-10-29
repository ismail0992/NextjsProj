import Link from "next/link";

export const metadata = {
  title: "Contact — Alex Morgan",
  description:
    "Get in touch with Alex Morgan about your next design or development project.",
};

export default function ContactPage() {
  return (
    <main className="inner-page page-shell contact-page">
      <div className="page-kicker">
        <span>CONTACT</span>
        <span>03 / 03</span>
      </div>
      <section className="contact-content">
        <p className="eyebrow">
          <span className="status-dot" /> OPEN FOR SELECT PROJECTS
        </p>
        <h1>
          Have a good
          <br />
          feeling about
          <br />
          <span className="serif-italic">something?</span>
        </h1>
        <p className="contact-lede">
          Tell me what you’re thinking. A rough idea, a clear brief, a
          half-written email — all good places to start.
        </p>
        <a className="email-link" href="mailto:hello@alexmorgan.design">
          hello@alexmorgan.design <span>↗</span>
        </a>
        <div className="contact-details">
          <div>
            <span className="eyebrow">ELSEWHERE</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>
          <div>
            <span className="eyebrow">CURRENTLY</span>
            <p>
              Portland, Oregon
              <br />
              Pacific Time (UTC−8)
            </p>
          </div>
        </div>
      </section>
      <div className="contact-side-note">
        GOOD THINGS TAKE A LITTLE
        <br />
        CONVERSATION FIRST.
      </div>
    </main>
  );
}
