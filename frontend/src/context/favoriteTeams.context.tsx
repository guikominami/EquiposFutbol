import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useState,
} from 'react';

export type FavoriteTeamsData = {
  qtdFavoriteTeams: number;
  setQtdFavoriteTeams: Dispatch<SetStateAction<number>>;
};

export const FavoriteTeamsDataContext = createContext<FavoriteTeamsData>({
  qtdFavoriteTeams: 0,
  setQtdFavoriteTeams: () => {},
});

export const FavoriteTeamsContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [qtdFavoriteTeams, setQtdFavoriteTeams] = useState<number>(0);

  const ctxValue = {
    qtdFavoriteTeams: qtdFavoriteTeams,
    setQtdFavoriteTeams,
  };

  return (
    <FavoriteTeamsDataContext.Provider value={ctxValue}>
      {children}
    </FavoriteTeamsDataContext.Provider>
  );
};
