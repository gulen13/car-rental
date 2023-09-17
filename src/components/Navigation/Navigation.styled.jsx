import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStd = styled(NavLink)`
  font-size: x-large;

  &.active {
    color: #4e7dea;
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-top: 30px;
`;

export const NavContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;
