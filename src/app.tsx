import Routes from "./pages/routes";
import '@fontsource/roboto';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from "./theme";


export default function App() {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </StyledEngineProvider>
    )

}