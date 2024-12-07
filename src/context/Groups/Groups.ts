import { IGroupsContext } from "@typesrc/context/Groups";
import { createContext, useContext } from "react";

export const GroupsContext = createContext<IGroupsContext>({
    groups: [],
    addGroup: () => { },
    removeGroup: () => { }
});

export const useGroupsContext = () => useContext(GroupsContext);