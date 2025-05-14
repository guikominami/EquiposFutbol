export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserCredencials = {
  token: string;
  userId: string;
  userName: string;
};

export type TokenLogin = {
  token: string;
};
