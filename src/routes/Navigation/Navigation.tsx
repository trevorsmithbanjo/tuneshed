import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, LinkContainer, LogoLink } from './styles';

const Navigation = () => {
  return (
    <>
      <Navbar>
        <LinkContainer>
          <LogoLink to="/">tuneshed</LogoLink>
        </LinkContainer>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
