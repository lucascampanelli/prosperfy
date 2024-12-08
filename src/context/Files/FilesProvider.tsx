import { IFile, IFilesProviderProps } from "@typesrc/context/Files";
import { useState } from "react";
import { FilesContext } from "./Files";

export default function FilesProvider({
    children
}: IFilesProviderProps) {

    const defaultFiles: IFile[] = [
        {
            id: 1,
            name: "Comprovante-pagamento.pdf",
            format: "pdf",
            size: 1024,
            link: "https://example.com/comprovante-pagamento.pdf",
            uploadedAt: new Date()
        },
        {
            id: 2,
            name: "Contrato-social.pdf",
            format: "pdf",
            size: 2048,
            link: "https://example.com/contrato-social.pdf",
            uploadedAt: new Date()
        },
        {
            id: 3,
            name: "Estudo-mercado.pdf",
            format: "pdf",
            size: 4096,
            link: "https://example.com/estudo-mercado.pdf",
            uploadedAt: new Date()
        },
        {
            id: 4,
            name: "Logo.png",
            format: "png",
            size: 512,
            link: "https://example.com/logo.png",
            uploadedAt: new Date()
        },
        {
            id: 5,
            name: "Planilha-orcamento.jpg",
            format: "jpg",
            size: 8192,
            link: "https://example.com/planilha-orcamento.xlsx",
            uploadedAt: new Date()
        }
    ]

    const [files, setFiles] = useState<IFile[]>(defaultFiles);

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