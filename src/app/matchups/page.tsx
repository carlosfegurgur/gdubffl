"use client";

import { useEffect, useState } from "react";

export default function Page() {
  //   const owners = loadOwners(); // allowed: using fs here
  //   const season = 2025;

  // Load your JSON the same way:
  //   const matchups = await import(`@/data/${season}-season.json`).then(r => r.default);
  const [matchups, setMatchups] = useState([]);

  useEffect(() => {
    fetch("/api/seasons")
      .then((res) => res.json())
      .then((data) => setMatchups(data));
  }, []);

  console.log('matchup: ', matchups);

  return (
    <main className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Matchups — {season}</h1> */}
      <h1>Matchups</h1>
      {/* <MatchupsClient owners={owners} matchups={matchups} /> */}
    </main>
  );
}
