import type { Country } from '../models/models';

export async function fetchCountries(): Promise<Country[]> {
  let countries: Country[] = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      'http://localhost:7096/api/countries',
      options
    );

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the languages.'
      );
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();

    console.log('api', data);

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;

    countries = data;
  } catch (error) {
    console.log(error);
  }

  return countries;
}
