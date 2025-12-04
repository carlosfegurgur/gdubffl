import React from "react";

type Row = {
  ownerId: string;
  teamName?: string;
  score: number;
  avgPointsFor: number;
  avgPointsAgainst: number;
  benchEfficiency?: number;
  winPct: number;
  rank?: number;
};

export default function PowerRankingsTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left">
            <th className="p-2">#</th>
            <th className="p-2">Team</th>
            <th className="p-2">Score</th>
            <th className="p-2">Avg PF</th>
            <th className="p-2">Avg PA</th>
            <th className="p-2">Bench</th>
            <th className="p-2">Win %</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.ownerId} className="border-t hover:bg-slate-50">
              <td className="p-2">{r.rank ?? "-"}</td>
              <td className="p-2">{r.teamName ?? r.ownerId}</td>
              <td className="p-2 font-medium">{r.score}</td>
              <td className="p-2">{r.avgPointsFor}</td>
              <td className="p-2">{r.avgPointsAgainst}</td>
              <td className="p-2">{r.benchEfficiency ?? "-"}</td>
              <td className="p-2">{Math.round((r.winPct ?? 0) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
