import type { Metadata } from "next";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";

export const metadata: Metadata = {
  title: "Wave SMP",
  description: "Wave SMP website",
};

function Header() {
  return <div dangerouslySetInnerHTML={{ __html: "<header class=\"topbar\">\n    <div class=\"brand mini-logo\">WAVE<br><span>SMP</span></div>\n    <nav>\n      <a class=\"nav\" data-active=\"home\" href=\"/\">HOME</a>\n      <a class=\"nav\" data-active=\"players\" href=\"/players\">PLAYERS</a>\n      <a class=\"nav\" data-active=\"teams\" href=\"/teams\">TEAMS</a>\n      <a class=\"nav\" data-active=\"aanmelden\" href=\"/aanmelden\">AANMELDEN</a>\n      <a class=\"nav\" data-active=\"shop\" href=\"/shop\">SHOP</a>\n    </nav>\n    <a class=\"discord\" href=\"https://discord.gg/v6qWFhDBvc\" target=\"_blank\"><span>\u25cf\u25cf</span> DISCORD</a>\n  </header>" }} />;
}

function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: "<footer>\n    <div class=\"brand mini-logo\">WAVE<br><span>SMP</span></div>\n    <div>SNEL NAAR<br><small>Home \u00b7 Aanmelden \u00b7 Teams \u00b7 Discord</small></div>\n    <div>DISCORD<br><small>discord.gg/v6qWFhDBvc</small></div>\n  <a href=\"/admin\" class=\"admin-secret\">Admin</a></footer>" }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}
