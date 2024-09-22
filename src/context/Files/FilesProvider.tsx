import { IFile, IFilesProviderProps } from "@typesrc/context/Files";
import { useState } from "react";
import { FilesContext } from "./Files";

export default function FilesProvider({
    children
}: IFilesProviderProps) {

    const [files, setFiles] = useState<IFile[]>([]);

    return (
        <FilesContext.Provider
            value={{
                files,
                addFile: () => { },
                removeFile: () => { }
            }}
        >
            {children}
        </FilesContext.Provider>
    )
}