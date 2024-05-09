import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    primary: '#3089ff',
    secondary: '#7055e9',
    onColor: '##ffffff',
    surface: {
      s0: '#edf1f6',
      s1: '#ffffff',
      s2: 'gray',
    },
    onSurface: {
      nLv1: '#1c1f22',
      nLv2: 'darkgray',
      nLv3: 'gray',
    }
  },
  spacings: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  breakpoints: {
    sm: "400px",
    md: "700px",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  }
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
