import "./globals.css";
import SiteHeader from "./components/SiteHeader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
