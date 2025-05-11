import { type User } from '../models/models';

export async function createNewUser(newUser: User) {
  console.log(newUser);

  const response = await fetch('http://localhost:7096/api/users ', {
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

  const { user } = await response.json();

  return user;
}
