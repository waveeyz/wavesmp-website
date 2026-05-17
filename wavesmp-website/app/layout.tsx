import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'Wave SMP', description: 'Hardcore survival SMP seizoen 2' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="nl"><body><nav className="nav"><Link href="/" className="brand">WAVE<br/>SMP</Link><div className="links"><Link href="/players">PLAYERS</Link><Link href="/teams">TEAMS</Link><Link href="/aanmelden">AANMELDEN</Link><Link href="/shop">SHOP</Link><Link href="/discord">DISCORD</Link></div><a className="btn secondary" href="https://discord.gg/v6qWFhDBvc">Discord</a></nav>{children}</body></html>}
