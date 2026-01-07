import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SynAccel",
  description: "Independent applied R&D in AI security, cloud automation, and autonomous systems."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="ios-smooth">
        {/* Global background */}
        <div className="bg" />

        {/* Global Header */}
        <header className="safe-area-top">
          <div className="wrap">
            <div className="nav">
              <Link className="brand" href="/">
                <img src="/logo.png" alt="SynAccel logo" />
                <span className="name">SynAccel</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="links desktop-only" aria-label="Primary">
                <Link href="/research">Research</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/publications">Publications</Link>
                <Link href="/about">About</Link>
              </nav>

              {/* Desktop CTA */}
              <div className="navCta desktop-only">
                <a
                  className="btn"
                  href="https://github.com/SynAccel"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <Link className="btn primary" href="/contact">
                  Contact
                </Link>
              </div>

              {/* Mobile Menu */}
              <details className="mobile-only mobileMenu">
                <summary aria-label="Open menu">☰</summary>
                <div className="mobilePanel">
                  <Link href="/research">Research</Link>
                  <Link href="/projects">Projects</Link>
                  <Link href="/publications">Publications</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                  <a
                    href="https://github.com/SynAccel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="safe-area-bottom min-h-[100dvh]">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="safe-area-bottom">
          <div className="wrap foot">
            <div>© {year} SynAccel. Independent research initiative.</div>
            <div className="footLinks">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/research">Research</Link>
              <a
                href="https://github.com/SynAccel"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
