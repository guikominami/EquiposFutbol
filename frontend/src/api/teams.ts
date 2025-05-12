import { QueryClient } from '@tanstack/react-query';

import type { TeamFull, FavoriteTeam, NewFavoriteTeam } from '../models/models';

export const queryClient = new QueryClient();

export async function fetchTeams({
  signal,
  searchTerm,
}): Promise<TeamFull[] | undefined> {
  let teams: TeamFull[] = [];

  let url = 'http://localhost:3000/api/teams';

  if (searchTerm) {
    url += '/' + searchTerm;
    //novo teste
    // url += '/' + '?country=';
    // url += +searchTerm;
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

    if (data.errors.length > 0) {
      const error = new Error('Não foi possível encontrar times neste país.');
      console.log(data.errors);
      throw error;
    }

    teams = data.response;

    return teams;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFavoriteTeams(userId: string) {
  let favoriteTeams: FavoriteTeam[] = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:3000/api/favoriteTeams/' + userId,
      options
    );

    console.log(response);

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the user favorite teams.'
      );
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();

    favoriteTeams = data;
  } catch (error) {
    console.log(error);
  }

  return favoriteTeams;
}

export async function createNewFavoriteTeam(favoriteTeamData: NewFavoriteTeam) {
  const response = await fetch('http://localhost:3000/api/favoriteTeams ', {
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
    'http://localhost:3000/api/favoriteTeams/' + favoriteTeamId,
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
