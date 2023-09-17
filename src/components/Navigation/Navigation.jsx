import React from 'react';
import { LinkStd, NavContainer, NavList } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <LinkStd to="/">Home</LinkStd>
        <LinkStd to="/catalog">Catalogue</LinkStd>
        <LinkStd to="/favorites">Favorites</LinkStd>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
