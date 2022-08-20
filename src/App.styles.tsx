import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.typography.heading1}
`;

export const Box = styled.div`
  ${({ theme }) => {
    return `
      margin: ${theme.spacing(4)} auto;
      padding: ${theme.spacing(3)};
      display: flex;
      justify-content: center;
    `;
  }}
`;

export const BodyText = styled.p`
  ${({ theme }) => theme.typography.body1}
`;
