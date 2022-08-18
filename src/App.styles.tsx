import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.typography.heading1}
`;
