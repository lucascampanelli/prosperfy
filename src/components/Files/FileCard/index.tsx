import { RequestPageOutlined } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { IFileCardProps } from "@typesrc/components/Files/FileCard";

export default function FileCard({
    file
}: IFileCardProps) {

    return (
        <Card
            variant="outlined"
        >
            <CardActionArea>
                <CardMedia
                    component={Box}
                    className="flex justify-center items-center"
                    sx={{
                        paddingY: (theme) => theme.spacing(2)
                    }}
                    bgcolor="background.default"
                >
                    <RequestPageOutlined
                        sx={{
                            fontSize: 40
                        }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography>
                        {file.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}