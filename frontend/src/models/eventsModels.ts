export type EventsTeam = {
  fixture: Fixture;
  league: League;
  teams: TeamsPlay;
};

export type Fixture = {
  date: string;
  id: number;
  timestamp: number;
  timeZone: string;
  venue: City;
};

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

export type Venue = {
  venue: City;
};

export type City = {
  city: string;
  id: number;
  name: string;
};
