import { IUsersContext } from "@typesrc/context/Users";
import { createContext, useContext } from "react";

export const UsersContext = createContext<IUsersContext>({
    users: [],
    addUser: () => {},
    removeUser: () => {},
});

export const useUsersContext = () => useContext(UsersContext);