import { IUser, IUsersProviderProps } from "@typesrc/context/Users";
import { useState } from "react";
import { UsersContext } from "./Users";

export default function UsersProvider({
    children
}: IUsersProviderProps) {

    const [users, setUsers] = useState<IUser[]>([]);

    return (
        <UsersContext.Provider
            value={{
                users,
                addUser: () => { },
                removeUser: () => { }
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}