import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header page-shell">
      <Link className="wordmark" href="/" aria-label="Alex Morgan home">
        alex<span>morgan</span><i>®</i>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact <span>↗</span></Link>
      </nav>
    </header>
  );
}
