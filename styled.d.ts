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
    };
  }
}
