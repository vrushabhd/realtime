import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007BFF', // Vibrant blue
        },
        secondary: {
            main: '#28A745', // Green for success
        },
        background: {
            default: '#f0f8ff', // Light blue background
            paper: '#ffffff',  // White for cards/paper
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
