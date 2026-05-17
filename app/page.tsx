export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'linear-gradient(#03142e,#020814)',color:'white',padding:'40px',textAlign:'center'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1100,margin:'0 auto 80px'}}>
        <strong style={{fontSize:28,color:'#43b9ff'}}>WAVE SMP</strong>
        <div style={{display:'flex',gap:22}}>
          <a style={{color:'white'}} href="/">Home</a>
          <a style={{color:'white'}} href="/players">Players</a>
          <a style={{color:'white'}} href="/aanmelden">Aanmelden</a>
          <a style={{color:'white'}} href="/shop">Shop</a>
          <a style={{color:'white'}} href="https://discord.gg/v6qWFhDBvc">Discord</a>
        </div>
      </nav>
      <section style={{maxWidth:800,margin:'0 auto'}}>
        <h1 style={{fontSize:72,margin:'0 0 10px',color:'#35aaff'}}>Wave SMP</h1>
        <h2>Seizoen 2</h2>
        <p style={{fontSize:20,lineHeight:1.6}}>
          Wave SMP is een hardcore survival SMP waarbij je je moet aanmelden om mee te kunnen doen.
          Hierop zul je heel veel roleplay vinden maar ook gezelligheid.
        </p>
        <p style={{fontSize:18}}>De server duurt ongeveer 4 weken en heeft veel evenementen.</p>
        <div style={{display:'flex',gap:16,justifyContent:'center',marginTop:30}}>
          <a href="/aanmelden" style={{background:'#0878ff',color:'white',padding:'16px 28px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Aanmelden</a>
          <a href="https://discord.gg/v6qWFhDBvc" style={{border:'1px solid #0878ff',color:'white',padding:'16px 28px',borderRadius:10,textDecoration:'none',fontWeight:700}}>Join Discord</a>
        </div>
      </section>
    </main>
  );
}
