export const mockData: EventsTeam[] = [
  {
    fixture: {
      date: '2020-07-30T18:00:00.00',
      id: 1,
      timestamp: 123123,
      timeZone: 'string',
      venue: {
        city: 'string',
        id: 1,
        name: 'string',
      },
    },
    league: {
      league: 'string',
      country: 'string',
      flag: 'string',
      id: 'string',
      logo: 'string',
      name: 'string',
      round: 'string',
      season: 'string',
      standings: true,
    },
    teams: {
      away: {
        id: 1,
        logo: 'string',
        name: 'Barcelona',
        winner: 'string',
      },
      home: {
        id: 1,
        logo: 'string',
        name: 'asa de arapiraca',
        winner: 'string',
      },
    },
  },
  {
    fixture: {
      date: '2020-07-30T18:00:00.00',
      id: 1,
      timestamp: 123123,
      timeZone: 'string',
      venue: {
        city: 'string',
        id: 1,
        name: 'string',
      },
    },
    league: {
      league: 'string',
      country: 'string',
      flag: 'string',
      id: 'string',
      logo: 'string',
      name: 'string',
      round: 'string',
      season: 'string',
      standings: true,
    },
    teams: {
      away: {
        id: 1,
        logo: 'string',
        name: 'Juventude',
        winner: 'string',
      },
      home: {
        id: 1,
        logo: 'string',
        name: 'Barcelona',
        winner: 'string',
      },
    },
  },
];

export type FavoriteTeamEventDetails = {
  leagueName: string;
  homeTeam: string;
  awayTeam: string;
  local: string;
};

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
