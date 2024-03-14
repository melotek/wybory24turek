import { Noto_Sans } from 'next/font/google';
import { createTheme, ThemeOptions, Shadows } from '@mui/material/styles';

// create a temporary theme to get the default options
const defaultTheme = createTheme();

// get the default `shadows` object
// const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];

export const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: 'rgb(17, 24, 39)',
      secondary: 'rgb(235, 235, 235)',
    },
    primary: {
      main: 'rgb(206,2,2)',
    },
    secondary: {
      main: 'rgb(17, 24, 79)'
    }
  },
  typography: {
    fontFamily: notoSans.style.fontFamily,
  },
  // shadows: defaultShadows.map(() => 'none') as Shadows,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgb(17, 24, 39)'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {

          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff"
        },
      }
    }
  }
});

export default theme;