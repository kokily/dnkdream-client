import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../../styles';
import HeaderNavItem from './HeaderNavItem';
import { Menu } from './menu';

// Styles
const Container = styled.nav<Props>`
  display: flex;
  justify-content: center;
  width: 100%;

  ${media.medium} {
    max-height: 50vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 0px;
    padding-left: 0;
    margin-bottom: 0;
    transition: ease all 500ms showMenu;
    flex-wrap: wrap;
    display: none;
    animation-name: showMenu;
    animation-duration: 0.4s;
    ${(props) =>
      props.toggle &&
      css`
        display: flex;
      `};
  }
  @keyframes showMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 694.11px;
  list-style: none;
  ${media.medium} {
    padding: 0 15px;
    margin: 0;
    flex-direction: column;
  }
`;

interface Props {
  toggle?: boolean;
}

const HeaderNavList: React.FC<Props> = ({ toggle }) => {
  return (
    <Container toggle={toggle}>
      <UL className="menu">
        {Menu?.map((menu) => (
          <HeaderNavItem key={menu.id} menu={menu} />
        ))}
      </UL>
    </Container>
  );
};

export default HeaderNavList;
