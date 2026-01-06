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
        headers: {
          Accept: "application/json",
        },
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
    <>
      <style>{`
        :root{
          --bg:#070A12;
          --text:#EAF0FF;
          --muted:rgba(234,240,255,.7);
          --border:rgba(234,240,255,.12);
          --accent:#6EA8FF;
          --font:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        }

        *{box-sizing:border-box}
        html,body{height:100%}
        body{
          margin:0;
          font-family:var(--font);
          background:var(--bg);
          color:var(--text);
        }

        .wrap{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:32px 18px;
        }

        .card{
          width:100%;
          max-width:520px;
          border:1px solid var(--border);
          border-radius:18px;
          background:rgba(255,255,255,.03);
          padding:36px 28px 30px;
        }

        h1{
          margin:0 0 10px;
          font-size:2.25rem;
          letter-spacing:-0.5px;
        }

        .lede{
          margin:0 0 26px;
          color:var(--muted);
          font-size:15px;
          line-height:1.7;
        }

        form{
          display:grid;
          gap:14px;
        }

        label{
          display:grid;
          gap:6px;
          font-size:13px;
          color:rgba(234,240,255,.75);
        }

        input,textarea{
          width:100%;
          background:rgba(0,0,0,.35);
          border:1px solid rgba(234,240,255,.15);
          border-radius:12px;
          padding:10px 12px;
          color:var(--text);
          font-size:14px;
          outline:none;
        }

        textarea{
          min-height:120px;
          resize:vertical;
        }

        input:focus,textarea:focus{
          border-color:rgba(110,168,255,.4);
        }

        button{
          margin-top:6px;
          align-self:flex-start;
          padding:10px 18px;
          border-radius:999px;
          border:1px solid rgba(234,240,255,.2);
          background:rgba(110,168,255,.18);
          color:var(--text);
          font-size:14px;
          cursor:pointer;
          transition:opacity .15s ease;
        }

        button:disabled{
          opacity:.6;
          cursor:default;
        }

        .status{
          margin-top:12px;
          font-size:14px;
        }

        .success{color:#8BFFE8}
        .error{color:#FF8B8B}
      `}</style>

      <div className="wrap">
        <div className="card">
          <h1>Contact</h1>
          <p className="lede">
            For collaboration, research inquiries, or general contact.
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                required
                placeholder="Your message"
              />
            </label>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>

            {status === "success" && (
              <div className="status success">
                Message sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="status error">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
