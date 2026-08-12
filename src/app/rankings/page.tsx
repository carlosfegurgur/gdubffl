import React from "react";
import PowerRankingsTable from "@/components/PowerRankingsTable";
import { loadOwners } from "@/lib/data-loader.server";

async function fetchRankings(season = 2025) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/power-rankings?season=${season}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Page() {
  const season = 2025;
  const data = await fetchRankings(season);
  const owners = await loadOwners(); // server-side
  const ownerMap = new Map(owners.map(o => [o.id, o]));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows = data.rankings.map((r: any) => ({ ...r, teamName: ownerMap.get(r.ownerId)?.teamName }));
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">League Power Rankings — {season}</h1>
      <PowerRankingsTable rows={rows} />
      <p className="mt-4 text-sm text-slate-600">Formula: avgPF × 0.45 + inverted PA × 0.25 + win% × 0.15</p>
    </main>
  );
}
