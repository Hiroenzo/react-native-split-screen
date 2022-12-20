import React, {Dispatch, SetStateAction} from "react";
import {isTablet} from "react-native-device-info";

const TabletContext = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>] | any>(undefined)

export const TabletContextProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    const state = React.useState(isTablet)
    return <TabletContext.Provider value={state}>{children}</TabletContext.Provider>
}

export const useIsTablet = () => React.useContext(TabletContext)
