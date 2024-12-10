import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { Box } from '@mui/material';
import Routes from "./pages/routes";
import ContextProviders from '@context/ContextProviders';
import moment from 'moment';
import 'moment/dist/locale/pt-br';

export default function App() {

    moment.locale('pt-br');

    return (
        <ContextProviders>
            <Box bgcolor="background.default">
                <Routes />
            </Box>
        </ContextProviders>
    )
}