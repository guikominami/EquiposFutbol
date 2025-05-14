import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useState,
} from 'react';

import type { UserCredencials } from '../models/userModels';

export type UserData = {
  userCredentials: UserCredencials;
  setUserCredentials: Dispatch<SetStateAction<UserCredencials>>;
};

export const UserDataContext = createContext<UserData>({
  userCredentials: { token: '', userId: '', userName: '' },
  setUserCredentials: () => {},
});

export const UserDataContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<UserCredencials>({
    token: '',
    userId: '',
    userName: '',
  });

  const ctxValue = {
    userCredentials: userCredentials,
    setUserCredentials,
  };

  return (
    <UserDataContext.Provider value={ctxValue}>
      {children}
    </UserDataContext.Provider>
  );
};
