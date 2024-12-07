import { ReactNode } from "react";
import { IUser } from "./Users";

export interface IGroup {
    id: number;
    users: IUser[];
}

export interface IGroupsContext {
    groups: IGroup[];
    addGroup: (group: Omit<IGroup, "id">) => void;
    removeGroup: (id: number) => void;
}

export interface IGroupsProviderProps {
    children: ReactNode;
}