export type Country = {
  name: string;
  code: string;
  flag: string;
};

export type TeamFull = {
  team: Team;
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
};

export type Team = {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: true;
  logo: string;
};

export type FavoriteTeam = {
  _id: string;
  name: string;
  teamId: number;
  userId: string;
};

export type NewFavoriteTeam = {
  name: string;
  teamId: number;
  userId: string;
};

export type Event = {
  name: string;
};
