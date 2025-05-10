import type { FavoriteTeam } from '../models/models';

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

    console.log('api', data);

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;

    favoriteTeams = data;
  } catch (error) {
    console.log(error);
  }

  return favoriteTeams;
}
