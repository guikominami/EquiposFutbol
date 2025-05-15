import type { UserCredencials } from '../models/userModels';

export const authenticate = async (
  email: string,
  password: string
): Promise<UserCredencials> => {
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
    console.log(error);
    throw error;
  }

  const resData: UserCredencials = await response.json();
  const userToken: UserCredencials = {
    token: resData.token,
    userId: resData.userId,
    userName: resData.userName,
  };

  return userToken;
};
