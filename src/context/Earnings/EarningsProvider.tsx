import { IEarning, IEarningsProviderProps } from "@typesrc/context/Earnings";
import { useState } from "react";
import { EarningsContext } from "./Earnings";

export default function EarningsProvider({
    children
}: IEarningsProviderProps) {

    const [earnings, setEarnings] = useState<IEarning[]>([]);

    return (
        <EarningsContext.Provider
            value={{
                earnings,
                addEarning: () => { },
                removeEarning: () => { }
            }}
        >
            {children}
        </EarningsContext.Provider>
    )
}