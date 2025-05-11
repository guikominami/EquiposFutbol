import { QueryClient } from '@tanstack/react-query';

import type { TeamFull, FavoriteTeam, NewFavoriteTeam } from '../models/models';

export const queryClient = new QueryClient();

export async function fetchTeams({ signal, searchTerm }): Promise<TeamFull[]> {
  let teams: TeamFull[] = [];

  let url = 'http://localhost:7096/api/teams';

  if (searchTerm) {
    url += '/' + searchTerm;
  }

  console.log(url);

  try {
    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the teams.');
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();
    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;
    teams = data.response;

    console.log('teams', teams);
  } catch (error) {
    console.log(error);
  }

  return teams;
}

export async function fetchFavoriteTeams(
  userId: string
): Promise<FavoriteTeam[]> {
  let favoriteTeams: FavoriteTeam[] = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:7096/api/favoriteTeams/' + userId,
      options
    );

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the user favorite teams.'
      );
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;

    favoriteTeams = data;
  } catch (error) {
    console.log(error);
  }

  return favoriteTeams;
}

export async function createNewFavoriteTeam(favoriteTeamData: NewFavoriteTeam) {
  const response = await fetch('http://localhost:7096/api/favoriteTeams ', {
    method: 'POST',
    body: JSON.stringify(favoriteTeamData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.message = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function removeFavoriteTeam(favoriteTeamId: string) {
  const response = await fetch(
    'http://localhost:7096/api/favoriteTeams/' + favoriteTeamId,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.message = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}
