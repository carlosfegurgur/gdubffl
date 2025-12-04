import { loadOwners } from "@/lib/data-loader.server";
import MatchupsClient from "./MatchupsClient";

export default async function Page() {
  const owners = loadOwners(); // allowed: using fs here
  const season = 2025;

  // Load your JSON the same way:
  const matchups = await import(`@/data/${season}-season.json`).then(r => r.default);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Matchups — {season}</h1>
      <MatchupsClient owners={owners} matchups={matchups} />
    </main>
  );
}
