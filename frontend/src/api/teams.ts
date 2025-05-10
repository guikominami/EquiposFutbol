import type { Team } from '../models/models';

export async function fetchTeams(): Promise<Team[]> {
  let teams: Team[] = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch('http://localhost:7096/api/teams', options);

    if (!response.ok) {
      const error = new Error('An error occurred while fetching the teams.');
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();

    console.log('api', data);

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;

    teams = data;
  } catch (error) {
    console.log(error);
  }

  return teams;
}
