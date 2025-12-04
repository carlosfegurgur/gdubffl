import { DropdownMenu } from "radix-ui";

export default async function Page() {
  const teams = [
    "team1",
    "team2",
    "team3",
    "team4",
    "team5",
    "team6",
    "team7",
    "team8",
    "team9",
    "team10",
    "team11",
  ];
  return (
    <main>
      <h1>Teams</h1>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <p>Select Team...</p>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label />
            {teams.map((team, i) => (
              <DropdownMenu.Item key={i}>{team}</DropdownMenu.Item>
            ))}

            <DropdownMenu.Group>
              <DropdownMenu.Item />
            </DropdownMenu.Group>

            <DropdownMenu.CheckboxItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger />
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent />
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </main>
  );
}
