import { IFilesContext } from "@typesrc/context/Files";
import { createContext, useContext } from "react";

export const FilesContext = createContext<IFilesContext>({
    files: [],
    addFile: () => {},
    removeFile: () => {},
});

export const useFilesContext = () => useContext(FilesContext);