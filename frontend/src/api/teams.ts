import type { TeamFull } from '../models/models';

export async function fetchTeams(): Promise<TeamFull[]> {
  let teams: TeamFull[] = [];

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

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;
    teams = data;

    console.log('teams', teams);
  } catch (error) {
    console.log(error);
  }

  return teams;
}
