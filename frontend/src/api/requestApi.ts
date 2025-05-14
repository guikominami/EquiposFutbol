//TIPAR UMA RESPOSTA do tipo json

export async function requestData(url: string, searchTerm?: string) {
  if (searchTerm) {
    url += searchTerm;
  }

  try {
    // const response = await fetch(url, { signal: signal });
    const response = await fetch(url);

    console.log(response);

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the user favorite teams.'
      );

      const message = await response.json();
      console.log(message);
      throw error;
    }

    const data = await response.json();

    if (data.errors) {
      const error = new Error(data.error);
      throw error;
    }

    return data.response;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
}
