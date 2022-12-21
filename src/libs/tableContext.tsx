import React from 'react';

const TabletContext = React.createContext<any>(false);

type providerProps = {
  isTablet: boolean;
  children: React.ReactNode | React.ReactNode[];
};

export const TabletContextProvider = ({
  isTablet = false,
  children,
}: providerProps) => {
  const state = React.useState(isTablet);
  return (
    <TabletContext.Provider value={state}>{children}</TabletContext.Provider>
  );
};

export const useIsTablet = () => React.useContext(TabletContext);
