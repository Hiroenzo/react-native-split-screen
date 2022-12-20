import React from 'react';
import { isTablet } from 'react-native-device-info';

const TabletContext = React.createContext<any>(undefined);

export const TabletContextProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const state = React.useState(isTablet);
  return (
    <TabletContext.Provider value={state}>{children}</TabletContext.Provider>
  );
};

export const useIsTablet = () => React.useContext(TabletContext);
