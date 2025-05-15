import { useContext } from 'react';
import { UserDataContext } from '../../context/user.context';

export const GetUserCredentials = () => {
  const { userCredentials } = useContext(UserDataContext);

  const userId = userCredentials.userId;
  const userName = userCredentials.userName;

  if (userId == null) {
    console.log('Não foi possível encontrar o id ou nome do usuário.');
  }

  return { userId, userName };
};
