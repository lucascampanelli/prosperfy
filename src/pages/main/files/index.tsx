import { useFilesContext } from "@context/Files/Files";
import { FileCopyOutlined, MoreVert } from "@mui/icons-material";
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import moment from "moment";
import { formatFileSize } from "util/files";

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
                            <TableCell>Tamanho</TableCell>
                            <TableCell className="w-0"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.map((file) => (
                            <TableRow key={file.id}>
                                <TableCell>
                                    <FileCopyOutlined />
                                </TableCell>
                                <TableCell className="flex flex-col">
                                    <Typography className="font-medium">
                                        {file.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {moment(file.uploadedAt).format("Do MMMM YYYY")}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {formatFileSize(file.size)}
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}