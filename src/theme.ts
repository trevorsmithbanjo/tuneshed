import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  typography: {
    heading1: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '96px',
      fontWeight: '300',
      letterSpacing: '-1.5px',
    },
    heading2: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '68px',
      fontWeight: '300',
      letterSpacing: '-0.5px',
    },
    heading3: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '48px',
      fontWeight: '400',
      letterSpacing: '0px',
    },
    heading4: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '34px',
      fontWeight: '400',
      letterSpacing: '0.25px',
    },
    heading5: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '24px',
      fontWeight: '400',
      letterSpacing: '0px',
    },
    heading6: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '0.1px',
    },
    body1: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '16px',
      fontWeight: '400',
      letterSpacing: '0.5px',
    },
    body2: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '0.25px',
    },
    button: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '12px',
      fontWeight: '400',
      letterSpacing: '0.4px',
    },
    overline: {
      fontFamily: `'Inter', sans-sarif`,
      fontSize: '10px',
      fontWeight: '400',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    semiBold: '600',
    bold: '700',
  },
  spacing: (num: number) => `${num * 8}px`,
  palette: {
    greyscale: {
      black: '#202124',
      standardWhite: '#ffffff',
      secondaryWhite: '#F7F7FF',
    },
  },
};
