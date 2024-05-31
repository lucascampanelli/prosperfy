import { PaletteOptions, createTheme } from "@mui/material";

const lightPalette: PaletteOptions = {
    mode: 'light',
    primary: {
        main: '#0033ff',
        light: '#5c80ff',
        dark: '#132aa8',
        contrastText: '#d8e0ff',
    },
    secondary: {
        main: '#000000',
        contrastText: '#d8e0ff',
    },
    background: {
        default: '#f4f4ff',
        paper: '#eaebef',
    },
    text: {
        primary: '#1c2750',
        secondary: '#5e6475',
        disabled: '#999ba8',
    },
    divider: '#babfc7',
    error: {
        main: '#ff0003',
    },
    warning: {
        main: '#ed8a02',
    },
    success: {
        main: '#0ba812',
    },
}

const darkPalette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#0033ff',
        light: '#5c80ff',
        dark: '#132aa8',
        contrastText: '#d8e0ff',
    },
    secondary: {
        main: '#000000',
        contrastText: '#d8e0ff',
    },
    background: {
        default: '#0a0a0f',
        paper: '#000008',
    },
    text: {
        primary: '#e6ebff',
        secondary: '#a5abc2',
        disabled: '#a5abc2',
    },
    divider: '#313142',
    error: {
        main: '#ff0003',
    },
    warning: {
        main: '#ed8a02',
    },
    success: {
        main: '#0ba812',
    },
}

const theme = createTheme({
    palette: lightPalette,
    shape: {
        borderRadius: 8,
    },
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 800,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                },
                containedPrimary: ({ theme, ownerState: { disabled } }) => ({
                    background: disabled ?
                        theme.palette.primary.main
                        :
                        `radial-gradient(circle, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    backgroundPosition: '0%',
                    backgroundSize: '200%',
                    transition: 'all 0.3s',
                    '&:hover': {
                        backgroundPosition: '70%',
                    }
                }),
                containedSecondary: ({ theme, ownerState: { disabled } }) => ({
                    background: disabled ?
                        theme.palette.secondary.main
                        :
                        `radial-gradient(circle, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
                    backgroundPosition: '0%',
                    backgroundSize: '200%',
                    transition: 'all 0.3s',
                    '&:hover': {
                        backgroundPosition: '70%',
                    }
                }),
            }
        }
    },
});

export default theme;