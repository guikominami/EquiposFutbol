export type Country = {
  name: string;
  code: string;
  flag: string;
};

export type Team = {
  _id: number;
  name: string;
};

export type FavoriteTeam = {
  _id: number;
  name: string;
  countryId: number;
  teamId: number;
  userId: string;
};
