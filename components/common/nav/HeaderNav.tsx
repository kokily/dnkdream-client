import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import useHamburgerToggle from '../../../hooks/useHamburgerToggle';
import useMedia from '../../../hooks/useMedia';
import { media } from '../../../styles';
import HeaderNavList from './HeaderNavList';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.medium} {
    width: 100%;
  }
  .wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding: 15px;
    height: 60px;
    transition: 0.2s all;
    width: 100%;
    max-width: 694.11px;
    svg {
      padding: 5px;
      border-radius: 3px;
      cursor: pointer;
      &.off {
        background: #6799ff;
        color: white;
      }
      &.on {
        background: white;
        color: #6799ff;
        border: 1px solid #6799ff;
      }
    }
  }
`;

interface Props {}

const HeaderNav: React.FC<Props> = () => {
  const isSmall = useMedia(`(max-width: 992px)`);
  const { toggle, onToggle } = useHamburgerToggle();

  return (
    <Container>
      {isSmall ? (
        <HamburgerWrapper>
          <div className="wrapper">
            {toggle ? (
              <IoMdClose className="on" size={30} onClick={onToggle} />
            ) : (
              <GiHamburgerMenu className="off" size={30} onClick={onToggle} />
            )}
          </div>
          <HeaderNavList toggle={toggle} />
        </HamburgerWrapper>
      ) : (
        <HeaderNavList />
      )}
    </Container>
  );
};

export default HeaderNav;
