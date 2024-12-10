import { useFilesContext } from "@context/Files/Files";
import { DownloadOutlined, FileCopyOutlined, MoreVert } from "@mui/icons-material";
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
                            <TableCell>Transação</TableCell>
                            <TableCell>Data de upload</TableCell>
                            <TableCell className="w-0"></TableCell>
                            <TableCell className="w-0"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.map((file) => (
                            <TableRow
                                key={file.id}
                                hover
                            >
                                <TableCell>
                                    <FileCopyOutlined />
                                </TableCell>
                                <TableCell className="flex flex-col">
                                    <Typography className="font-medium">
                                        {file.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {formatFileSize(file.size)}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    Pagamento2024
                                </TableCell>
                                <TableCell>
                                    <Typography variant="body2">
                                        {moment(file.uploadedAt).format("DD [de] MMMM [de] YYYY")}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                    {moment(file.uploadedAt).format("hh:mm")}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <DownloadOutlined />
                                    </IconButton>
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