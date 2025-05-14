// export type Fixture = {
//   date: Date
//   timestamp: Time
// }

export type League = {
  league: string;
  country: string;
  flag: string;
  id: string;
  logo: string;
  name: string;
  round: string;
  season: string;
  standings: boolean;
};

export type TeamsPlay = {
  away: TeamPlay;
  home: TeamPlay;
};

export type TeamPlay = {
  id: number;
  logo: string;
  name: string;
  winner: string;
};
