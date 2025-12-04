import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartScoreDiff({ data }: { data: { week: number; diff: number }[] }) {
  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="diff" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
