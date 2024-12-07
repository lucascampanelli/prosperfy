import { IGroup, IGroupsProviderProps } from "@typesrc/context/Groups";
import { useState } from "react";
import { GroupsContext } from "./Groups";

export default function GroupsProvider({
    children
}: IGroupsProviderProps) {

    const [groups, setGroups] = useState<IGroup[]>([]);

    return (
        <GroupsContext.Provider
            value={{
                groups: groups,
                addGroup: () => { },
                removeGroup: () => { }
            }}
        >
            {children}
        </GroupsContext.Provider>
    )
}