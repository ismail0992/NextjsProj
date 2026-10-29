import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Independent Designer & Developer",
  description:
    "Alex Morgan is an independent designer and developer creating thoughtful brands and useful digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <footer className="site-footer page-shell">
          <Link className="wordmark" href="/">
            alex<span>morgan</span>
            <i>®</i>
          </Link>
          <p>Independent by choice. Collaborative by nature.</p>
          <div>
            <span>© 2025</span>
            <a href="mailto:hello@alexmorgan.design">EMAIL ↗</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LINKEDIN ↗
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
