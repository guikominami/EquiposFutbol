import { QueryClient } from '@tanstack/react-query';

//Precisa desse export para automaticamente refazer a busca de times favoritos após a atualização em createNewFavoriteTeam
export const queryClient = new QueryClient();

import type { TeamFull, FavoriteTeam, NewFavoriteTeam } from '../models/models';
import { requestData } from './requestApi';

export async function fetchTeams(
  searchTerm: string,
  searchType: string
): Promise<TeamFull[] | undefined> {
  const url = 'http://localhost:3000/api/teams/' + searchType;

  const response = requestData(url, searchTerm);
  const data = response;

  return data;
}

export async function fetchFavoriteTeams(
  searchTerm: string
): Promise<FavoriteTeam[] | undefined> {
  const url = 'http://localhost:3000/api/favoriteTeams/';

  const data = requestData(url, searchTerm);

  return data;
}

export async function fetchTeamNextEvents(
  searchTerm: number
): Promise<Event[] | undefined> {
  const url = 'http://localhost:3000/api/events/next/';

  const response = requestData(url, searchTerm.toString());
  const data = response;

  return data;
}

export async function fetchTeamAllEvents(
  searchTerm: number
): Promise<Event[] | undefined> {
  const url = 'http://localhost:3000/api/events/liveall/';

  const response = requestData(url, searchTerm.toString());
  const data = response;

  return data;
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
