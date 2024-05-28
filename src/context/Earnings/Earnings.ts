import { IEarningsContext } from "@typesrc/context/Earnings";
import { createContext, useContext } from "react";

export const EarningsContext = createContext<IEarningsContext>({
    earnings: [],
    addEarning: () => { },
    removeEarning: () => { }
});

export const useEarningsContext = () => useContext(EarningsContext);