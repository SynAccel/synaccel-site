"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <header>
      <div className="wrap">
        <div className="nav" ref={menuRef}>
          <Link className="brand" href="/">
            <img src="/logo.png" alt="SynAccel logo" />
            <span className="name">SynAccel</span>
          </Link>

          {/* Desktop links */}
          <nav className="links" aria-label="Primary">
            <Link href="/research">Research</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="navCta">
            <a className="btn" href="https://github.com/SynAccel" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link className="btn primary" href="/contact">
              Contact
            </Link>
          </div>

          {/* Mobile */}
          <button
            className="menuBtn"
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          {open && (
            <div className="menu" role="menu" aria-label="Mobile">
              <Link role="menuitem" href="/research" onClick={() => setOpen(false)}>
                Research
              </Link>
              <Link role="menuitem" href="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
              <Link role="menuitem" href="/publications" onClick={() => setOpen(false)}>
                Publications
              </Link>
              <Link role="menuitem" href="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <div className="row">
                <a
                  href="https://github.com/SynAccel"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  GitHub
                </a>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
