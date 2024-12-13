import FileTableRow from "@components/Files/FileTableRow";
import { useFilesContext } from "@context/Files/Files";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Files() {

    const { files } = useFilesContext();

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead className="hidden lg:table-header-group">
                        <TableRow>
                            <TableCell className="w-0"></TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Transação</TableCell>
                            <TableCell>Data de upload</TableCell>
                            <TableCell className="w-0"></TableCell>
                            <TableCell className="w-0"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.map((file) => (
                            <FileTableRow
                                key={file.id}
                                file={file}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}