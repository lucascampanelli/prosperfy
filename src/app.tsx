import Routes from "./pages/routes";
import '@fontsource/roboto';
import { Box, StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from "./theme";
import ToastsProvider from "@context/Toast/ToastsProvider";
import NavigationProvider from "@context/Navigation/NavigationProvider";

export default function App() {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <NavigationProvider>
                    <ToastsProvider>
                        <Box bgcolor="background.default">
                            <Routes />
                        </Box>
                    </ToastsProvider>
                </NavigationProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )

}