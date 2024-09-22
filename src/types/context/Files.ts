import { ReactNode } from "react";

export interface IFile {
    id: number;
    name: string;
    size: number;
    format: 'jpg' | 'png' | 'pdf';
    link: string;
}

export interface IFilesContext {
    files: IFile[];
    addFile: (file: Omit<IFile, "id">) => void;
    removeFile: (id: number) => void;
}

export interface IFilesProviderProps {
    children: ReactNode;
}