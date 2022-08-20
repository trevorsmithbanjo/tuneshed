import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      heading1: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      heading2: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      heading3: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      heading4: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      heading5: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      heading6: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      subtitle1: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      subtitle2: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      body1: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      body2: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      button: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      caption: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
      };
      overline: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
        textTransform: string;
      };
      semiBold: string;
      bold: string;
    };
    spacing: (num: number) => string;
    palette: {
      greyscale: {
        black: string;
        standardWhite: string;
        secondaryWhite: string;
      };
    };
  }
}
