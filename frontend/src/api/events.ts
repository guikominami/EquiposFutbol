import type { Event } from '../models/models';

export const fetchEvents = async ({
  signal,
  searchTerm,
}): Promise<Event[] | undefined> => {
  try {
    const url = 'http://localhost:3000/api/events/' + searchTerm;

    console.log(url);

    const response = await fetch(url, {
      signal: signal,
    });

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the countries.'
      );
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();
    console.log('api', data);

    //Alterar essa linha quando for para o EXTERNO
    //countries = data.response;

    return data;
  } catch (error) {
    console.log(error);
  }
};
