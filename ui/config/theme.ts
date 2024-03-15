import { Noto_Sans } from 'next/font/google';
import { createTheme, TypeText } from '@mui/material/styles';
import { ButtonProps, ButtonBaseProps } from '@mui/material';

// create a temporary theme to get the default options
const defaultTheme = createTheme();

// get the default `shadows` object
// const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];
type MyCustomTextColor = {
  darker: string;
} & TypeText

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
 }



export const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: 'rgb(91,105,129)',
      secondary: 'rgb(235, 235, 235)',
      darker: "rgb(34,45,102)"
    } as MyCustomTextColor,
    primary: {
      main: 'rgb(34,45,102)',
    },
    secondary: {
      main: 'rgb(202,31,64)'
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
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'rgb(17, 24, 39)',
      
        }
      
    },
    },
    MuiButton: {
      
      styleOverrides: {
        root: {
          contained: {
            large: {
              borderRadius: 100
            }
          }
        }
     }
    }
  }
});

export default theme;