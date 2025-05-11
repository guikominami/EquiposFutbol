import type { TeamFull } from '../models/models';

export async function fetchTeams({ signal, searchTerm }): Promise<TeamFull[]> {
  let teams: TeamFull[] = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let url = 'http://localhost:7096/api/teams/';

  if (searchTerm) {
    url += 'country/' + searchTerm;
  }

  console.log(url);

  try {
    const response = await fetch(url, options);

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
