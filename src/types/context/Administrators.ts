import { ReactNode } from "react";
import { IUser } from "./Users";

export interface IAdministrator {
    id: number;
    users: IUser[];
}

export interface IAdministratorsContext {
    administrators: IAdministrator[];
    addAdministrator: (administrator: Omit<IAdministrator, "id">) => void;
    removeAdministrator: (id: number) => void;
}

export interface IAdministratorsProviderProps {
    children: ReactNode;
}