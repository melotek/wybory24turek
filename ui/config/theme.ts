import { Noto_Sans } from "next/font/google";
import { createTheme, TypeText } from "@mui/material/styles";
import {
  ButtonProps,
  ButtonBaseProps,
  responsiveFontSizes,
} from "@mui/material";
import { Theme } from "@mui/material";
import { ThemeContext } from "@emotion/react";

// create a temporary theme to get the default options
const defaultTheme = createTheme();

// get the default `shadows` object
// const defaultShadows: ThemeOptions['shadows'] = [...defaultTheme.shadows];
type MyCustomTextColor = {
  darker: string;
} & TypeText;
type ThemeProps = {
  ownerState: any;
  theme: Theme;
};
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}

export const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const staticTheme = createTheme({
  palette: {
    text: {
      primary: "rgb(91,105,129)",
      secondary: "rgb(235, 235, 235)",
      darker: "rgb(34,45,102)",
    } as MyCustomTextColor,
    primary: {
      main: "rgb(34,45,102)",
    },
    secondary: {
      main: "rgb(202,31,64)",
    },
  },
  typography: {
    fontFamily: notoSans.style.fontFamily,
  },
  // shadows: defaultShadows.map(() => 'none') as Shadows,
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(17, 24, 39)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(255,255,255)",
        },
      },
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "rgb(17, 24, 39)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#fff",
          boxShadow: "0px 2px 14px 0 rgba(211,216,224,.65)",
          borderBottom: "1px solid rgba(0,0,0,.12)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "rgb(17, 24, 39)",
        },
      },
    },
    MuiPaper: {},

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(202,31,64)",
          color: "rgb(255,255,255)",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
  },
});
const responsiveTheme = createTheme(staticTheme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: "auto",
          boxSizing: "border-box",
          [staticTheme.breakpoints.up("md")]: {
            paddingLeft: staticTheme.spacing(8),
            paddingRight: staticTheme.spacing(8),
          },
          [staticTheme.breakpoints.down("md")]: {
            margin: 0,

            paddingLeft: staticTheme.spacing(3),
            paddingRight: staticTheme.spacing(3),
          },
        },
      },
    },
  },
});
const theme = responsiveFontSizes(responsiveTheme);
export default theme;
