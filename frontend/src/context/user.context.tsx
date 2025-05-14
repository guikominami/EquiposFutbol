import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useState,
} from 'react';

import { Auth } from '../models/teamModels';

export type UserCredencials = {
  userCredentials: Auth;
  setUserCredentials: Dispatch<SetStateAction<boolean>>;
};

export const UserCredentialContext = createContext<UserCredencials>({
  userCredentials: {},
  setUserCredentials: () => {},
});

export const UserCredentialContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<Auth>({});

  const ctxValue = {
    userCredentials: userCredentials,
    setUserCredentials,
  };

  return (
    <UserCredentialContext.Provider value={ctxValue}>
      {children}
    </UserCredentialContext.Provider>
  );
};
