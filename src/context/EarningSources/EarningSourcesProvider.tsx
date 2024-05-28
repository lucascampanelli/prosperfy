import { IEarningSource, IEarningSourcesProviderProps } from "@typesrc/context/EarningSources";
import { useState } from "react";
import { EarningSourcesContext } from "./EarningSources";

export default function EarningSourcesProvider({
    children
}: IEarningSourcesProviderProps) {

    const [earningSources, setEarningSources] = useState<IEarningSource[]>([]);

    return (
        <EarningSourcesContext.Provider
            value={{
                earningSources,
                addEarningSource: () => { },
                removeEarningSource: () => { }
            }}
        >
            {children}
        </EarningSourcesContext.Provider>
    )
}