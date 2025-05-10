export type Country = {
  name: string;
  code: string;
  flag: string;
};

export type Team = {
  _id: string;
  name: string;
};

export type FavoriteTeam = {
  _id: string;
  name: string;
  teamId: string;
  userId: string;
};

export type FavoriteTeamInsert = {
  name: string;
  teamId: string;
  userId: string;
};
