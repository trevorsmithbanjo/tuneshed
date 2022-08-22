import styled from 'styled-components';

export const HomeContainer = styled.div`
  ${({ theme }) => {
    return `
      margin: ${theme.spacing(4)};
      text-align: center;
    `;
  }}
`;

export const HomeHeading = styled.h1`
  ${({ theme }) => theme.typography.heading3}
`;
