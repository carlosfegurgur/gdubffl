"use client";
import styles from "./SidebarClient.module.css";
import { useState } from "react";
import { Owner } from "@/lib/types";
import { SelectComponent } from "../ui/Select/Select";

export default function SidebarClient({ owners }: { owners: Array<Owner> }) {
  console.log("owners", owners);
  const [selectedOwnerId, setSelectedOwnerId] = useState("");

  const selectedOwner = owners.find((owner) => owner.name === selectedOwnerId);

  return (
    <div className={styles.Container}>
      <aside className={styles.Aside}>
        <SelectComponent owners={owners} onChange={setSelectedOwnerId} />
      </aside>
      <main className={styles.Main}>
        {!selectedOwnerId && <p>Please select an owner...</p>}
        {selectedOwnerId && (
          <table className={styles.Table}>
            <tr>
                <th>Year</th>
                <th>Team Name</th>
            </tr>
            {selectedOwner?.teams.map((team) => (
              <tr key={team.id}>
                <td>{team.seasonYear}</td>
                <td>{team.team.name}</td>
              </tr>
            ))}
          </table>
        )}
      </main>
    </div>
  );
}
