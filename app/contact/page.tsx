"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeeoyqpj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="wrap">
      <style>{`
        main{ padding: 34px 0 60px; }

        .card{
          margin: 26px auto 0;
          width: 100%;
          max-width: 560px;
          border: 1px solid var(--border);
          border-radius: calc(var(--radius) + 6px);
          background: linear-gradient(to bottom, rgba(255,255,255,.05), rgba(255,255,255,.02));
          box-shadow: var(--shadow);
          overflow:hidden;
          position: relative;
        }
        .card::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(700px 300px at 20% 20%, rgba(110,168,255,.14), transparent 55%),
            radial-gradient(700px 320px at 85% 70%, rgba(139,255,232,.08), transparent 60%);
          opacity:.85;
          pointer-events:none;
        }

        .inner{
          position: relative;
          z-index: 1;
          padding: 34px 26px 28px;
        }

        h1{
          margin: 0 0 10px;
          font-size: clamp(32px, 4vw, 46px);
          letter-spacing: -0.6px;
          line-height: 1.05;
        }
        .lede{
          margin: 0 0 22px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }

        form{ display:grid; gap: 14px; }

        label{
          display:grid;
          gap: 6px;
          font-size: 13px;
          color: rgba(234,240,255,.75);
        }

        input, textarea{
          width: 100%;
          background: rgba(0,0,0,.22);
          border: 1px solid rgba(234,240,255,.15);
          border-radius: 14px;
          padding: 11px 12px;
          color: var(--text);
          font-size: 14px;
          outline: none;
        }
        textarea{ min-height: 140px; resize: vertical; }

        input:focus, textarea:focus{
          border-color: rgba(110,168,255,.40);
          box-shadow: 0 0 0 3px rgba(110,168,255,.12);
        }

        .actions{
          margin-top: 6px;
          display:flex;
          align-items:center;
          gap: 12px;
          flex-wrap: wrap;
        }

        button{
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(110,168,255,.40);
          background: linear-gradient(90deg, rgba(110,168,255,.18), rgba(139,255,232,.10));
          color: var(--text);
          font-size: 14px;
          cursor: pointer;
          transition: transform .12s ease, opacity .12s ease, border-color .12s ease;
        }
        button:hover{ transform: translateY(-1px); border-color: rgba(110,168,255,.55); }
        button:disabled{ opacity:.6; cursor: default; transform: none; }

        .status{
          font-size: 14px;
          color: var(--muted);
        }
        .success{ color: rgba(139,255,232,.95); }
        .error{ color: rgba(255,139,139,.95); }
      `}</style>

      <section className="card">
        <div className="inner">
          <h1>Contact</h1>
          <p className="lede">For collaboration, research inquiries, or general contact.</p>

          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" name="email" required placeholder="you@example.com" />
            </label>

            <label>
              Message
              <textarea name="message" required placeholder="Your message" />
            </label>

            <div className="actions">
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>

              {status === "success" && <div className="status success">Message sent successfully.</div>}
              {status === "error" && <div className="status error">Something went wrong. Please try again.</div>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

