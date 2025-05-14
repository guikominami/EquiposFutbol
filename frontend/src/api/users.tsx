import { type User } from '../models/teamModels';

export const createNewUser = async (newUser: User): Promise<User> => {
  console.log(newUser);

  const response = await fetch('http://localhost:3000/api/users ', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the new user.');
    error.message = await response.json();
    throw error;
  }

  const user: User = await response.json();

  return user;
};
