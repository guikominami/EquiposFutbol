import { QueryClient } from '@tanstack/react-query';

//Precisa desse export para automaticamente refazer a busca de times favoritos após a atualização em createNewFavoriteTeam
export const queryClient = new QueryClient();

import type {
  TeamFull,
  FavoriteTeam,
  NewFavoriteTeam,
} from '../models/teamModels';

import type { EventsTeam } from '../models/eventsModels';

import { requestData } from './requestApi';

export function fetchTeams(
  signal: AbortSignal,
  searchTerm: string,
  searchType: string
): Promise<TeamFull[] | undefined> {
  const url = 'http://localhost:3000/api/teams/' + searchType;

  const response = requestData(url, signal, searchTerm);

  const data = response;

  return data;
}

export function fetchFavoriteTeams(
  signal: AbortSignal,
  searchTerm: string
): Promise<FavoriteTeam[] | undefined> {
  const url = 'http://localhost:3000/api/favoriteTeams/';

  const data = requestData(url, signal, searchTerm);

  return data;
}

export function fetchTeamNextEvents(
  signal: AbortSignal,
  searchTerm: number
): Promise<EventsTeam[] | undefined> {
  const url = 'http://localhost:3000/api/events/next/';

  const response = requestData(url, signal, searchTerm.toString());
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
    let error;
    if (response.status == 400) {
      error = new Error(
        'The user doesn´t exist in database.' + favoriteTeamData.userId
      );
    } else {
      error = new Error(
        'An error occurred while fetching the user favorite teams.'
      );
    }

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
