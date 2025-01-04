import { DownloadOutlined, FileCopyOutlined, MoreVert } from "@mui/icons-material";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { IFileTableRowProps } from "@typesrc/components/Files/FileTableRow";
import moment from "moment";
import { formatFileSize } from "util/files";

export default function FileTableRow({
    file
}: IFileTableRowProps) {

    return (
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
    );
}