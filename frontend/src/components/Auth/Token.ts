import type { TokenLogin } from '../../models/userModels';

export const getToken = () => {
  const tokenString: string | null = sessionStorage.getItem('token');
  if (tokenString != null) {
    const userToken: TokenLogin = JSON.parse(tokenString);
    return userToken?.token;
  }
};

export const saveToken = (userToken: string) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};
