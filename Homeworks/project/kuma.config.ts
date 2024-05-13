import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    primary: 'var(--primary-default)',
    surface: {
      s0: 'var(--surface.s0)',
      s1: 'var(--surface.s1)',
    },
    onSurface: {
      nLv1: 'var(--on-surface-nLv1)',
      nLv2: 'var(--on-surface-nLv2)',
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
  },
  components: {
    Button: {
      defaultProps: {
        variant: "primary",
        padding: '4px',
        fontWeight: 600,
        _hover: {
          opacity: 0.9,
        },
      },
      variants: {
        primary: {
          bg: "var(--primary-default)",
          color: "var(--on-surface-nLv1)",
        },
        secondary: {
          bg: "var(--on-surface-nLv1)",
          color: "var(--primary-default)",
        },
      },
    },
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
