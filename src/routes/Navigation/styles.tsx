import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  width: 100vw;
  border-bottom: 1px solid ${({ theme }) => theme.palette.greyscale.lightGrey};
  display: flex;
  justify-content: flex-start;
`;

export const LinkContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const LogoLink = styled(Link)`
  ${({ theme }) => theme.typography.heading4}
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.palette.linkHover};
  }
`;
