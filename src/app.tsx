import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { Box } from '@mui/material';
import Routes from "./pages/routes";
import ContextProviders from '@context/ContextProviders';

export default function App() {

    return (
        <ContextProviders>
            <Box bgcolor="background.default">
                <Routes />
            </Box>
        </ContextProviders>
    )
}