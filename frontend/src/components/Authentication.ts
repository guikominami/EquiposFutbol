export async function authenticate(email: string, password: string) {
  const authData = {
    email: email,
    password: password,
  };

  console.log(authData);

  const response = await fetch('http://localhost:7096/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 402 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return response;
  }

  console.log(response);

  return response;
}
