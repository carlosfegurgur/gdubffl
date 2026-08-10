export type Team = {
  id: number;
  name: string;
};

export type TeamOwner = {
  id: number;
  seasonYear: number;
  team: Team;
};

export type Owner = {
  id: number;
  name: string;
  teams: TeamOwner[];
};
