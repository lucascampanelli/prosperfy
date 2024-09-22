import { ReactNode } from "react";
import { IAccount } from "./Accounts";

export interface IUser {
    id: number;
    name: string;
    accounts: IAccount[];
}

export interface IUsersContext {
    users: IUser[];
    addUser: (user: Omit<IUser, "id">) => void;
    removeUser: (id: number) => void;
}

export interface IUsersProviderProps {
    children: ReactNode;
}