import React, {
  createContext,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
  useState,
} from 'react';

export type SidebarType = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarType>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export const SidebarContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ctxValue = {
    sidebarOpen: sidebarOpen,
    setSidebarOpen,
  };

  return (
    <SidebarContext.Provider value={ctxValue}>
      {children}
    </SidebarContext.Provider>
  );
};
