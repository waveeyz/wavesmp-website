export const metadata = {
  title: 'Wave SMP',
  description: 'Hardcore survival SMP'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{margin:0, fontFamily:'Arial, sans-serif', background:'#020b18'}}>{children}</body>
    </html>
  );
}
