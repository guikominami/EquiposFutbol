//TIPAR UMA RESPOSTA do tipo json

export async function requestData(url: string, searchTerm?: string) {
  if (searchTerm) {
    url += searchTerm;
  }

  try {
    // const response = await fetch(url, { signal: signal });
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error(
        'An error occurred while fetching the user favorite teams.'
      );
      error.message = await response.json();
      throw error;
    }

    const data = await response.json();
    console.log(data);

    return data.response;
  } catch (error) {
    console.error('Error fetching data', error);
  }
}
