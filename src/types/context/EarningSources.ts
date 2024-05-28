import { ReactNode } from "react";

export interface IEarningSourceCategory {
    id: number;
    name: string;
}

export interface IEarningSource {
    id: number;
    name: string;
    categories: IEarningSourceCategory[];
}

export interface IEarningSourcesContext {
    earningSources: IEarningSource[];
    addEarningSource: (earningSource: Omit<IEarningSource, "id">) => void;
    removeEarningSource: (id: number) => void;
}

export interface IEarningSourcesProviderProps {
    children: ReactNode;
}