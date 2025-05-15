export async function requestData(
  url: string,
  signal: AbortSignal,
  searchTerm?: string
) {
  if (searchTerm) {
    url += searchTerm;
  }

  try {
    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
      let error;
      if (response.status == 400) {
        error = new Error('The user doesn´t exist in database.');
      } else {
        error = new Error(
          'An error occurred while fetching the user favorite teams.'
        );
      }

      throw error;
    }

    const data = await response.json();

    if (data.lenght > 0 && data.errors.length > 0) {
      const error = new Error(data.errors);
      throw error;
    }

    return data.response;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
}
