import Routes from "./pages/routes";
import '@fontsource/roboto';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from "./theme";
import ToastsProvider from "@context/ToastsProvider";


export default function App() {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ToastsProvider>
                    <Routes />
                </ToastsProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )

}