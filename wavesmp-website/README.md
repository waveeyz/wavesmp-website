# Wave SMP website

## Wat zit erin
- Homepagina in blauwe Minecraft/wave stijl
- Aanmeldpagina
- Players pagina
- Teams placeholders
- Shop coming soon
- Discord pagina
- Admin panel via `/admin`
- Aanmeldingen accepteren/afwijzen
- Optionele automatische whitelist via RCON

## Supabase database tabel
Maak in Supabase SQL editor deze tabel:

```sql
create table applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  minecraft_name text not null,
  discord_name text not null,
  age text,
  motivation text,
  roleplay_experience text,
  status text default 'pending',
  alive boolean default true,
  side text default 'Nog onbekend'
);
```

## Lokaal starten
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Online zetten
Makkelijkste: upload deze map naar GitHub en importeer hem in Vercel. Zet daarna je domein wavesmp.nl in Vercel.

## Automatische whitelist
Zet RCON aan in je Minecraft `server.properties`:
```properties
enable-rcon=true
rcon.port=25575
rcon.password=maak-een-sterk-wachtwoord
white-list=true
```
Vul daarna `RCON_HOST`, `RCON_PORT` en `RCON_PASSWORD` in bij Vercel Environment Variables.
