import type { Auth } from '../models/teamModels';

export const authenticate = async (
  email: string,
  password: string
): Promise<Auth> => {
  const authData = {
    email: email,
    password: password,
  };

  const response = await fetch('http://localhost:3000/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (!response.ok) {
    const error = new Error(
      'An error occurred while fetching the user favorite teams.'
    );
    error.message = await response.json();
    throw error;
  }

  const resData: Auth = await response.json();
  const userToken: Auth = {
    token: resData.token,
    userId: resData.userId,
    userName: resData.userName,
  };

  return userToken;
};
