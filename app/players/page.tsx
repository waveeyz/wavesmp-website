export default function PlayersPage() {
  return <div dangerouslySetInnerHTML={{ __html: "<section id=\"players\" class=\"page active\">\n      <div class=\"admin-wrap\">\n        <h1>PLAYERS</h1>\n        <p>Geaccepteerde spelers komen hier automatisch te staan.</p>\n        <div id=\"playersGrid\" class=\"player-grid\"></div>\n      </div>\n    </section>" }} />;
}
