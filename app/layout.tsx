import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        {/* Background */}
        <div className="bg" />

        {/* Global Header */}
        <header>
          <div className="wrap">
            <div className="nav">
              <Link className="brand" href="/">
                <img src="/logo.png" alt="SynAccel logo" />
                <span className="name">SynAccel</span>
              </Link>

              <nav className="links">
                <Link href="/research">Research</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/publications">Publications</Link>
                <Link href="/about">About</Link>
              </nav>

              <div className="navCta">
                <a className="btn" href="https://github.com/SynAccel" target="_blank">
                  GitHub
                </a>
                <Link className="btn primary" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Global Footer */}
        <footer>
          <div className="wrap foot">
            <div>© {year} SynAccel. Independent research initiative.</div>
            <div className="footLinks">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/research">Research</Link>
              <a href="https://github.com/SynAccel" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

