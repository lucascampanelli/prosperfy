import { IEarningSourcesContext } from "@typesrc/context/EarningSources";
import { createContext, useContext } from "react";

export const EarningSourcesContext = createContext<IEarningSourcesContext>({
    earningSources: [],
    addEarningSource: () => { },
    removeEarningSource: () => { }
});

export const useEarningSourcesContext = () => useContext(EarningSourcesContext);