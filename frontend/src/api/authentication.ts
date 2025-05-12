import type { Token } from '../models/models';

export const authenticate = async (
  email: string,
  password: string
): Promise<Token> => {
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

  if (response.status === 402 || response.status === 401) {
    console.log(response);
  }

  if (!response.ok) {
    console.log(response);
  }

  const token: Token = await response.json();

  return token;
};

// export const authenticate = async (email: string, password: string) => {
//   const authData = {
//     email: email,
//     password: password,
//   };

//   console.log(authData);

//   const response = await fetch('http://localhost:3000/api/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(authData),
//   });

//   if (response.status === 402 || response.status === 401) {
//     return response;
//   }

//   if (!response.ok) {
//     return response;
//   }

//   console.log(response);

//   return response;
// };
