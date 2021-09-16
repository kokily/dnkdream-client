import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../../../styles';
import Logo from '../logo.svg';
import { isLogged } from '../../../libs/store';
import TopButtons from './TopButtons';
import useLogout from '../../../libs/hooks/useLogout';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  border-bottom: 0.4px solid #dfdfdf;
  transition: 0.2s all;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    justify-content: center;
  }
`;

interface Props {}

const Top: React.FC<Props> = ({}) => {
  const { onLogout, onList } = useLogout();

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      {isLogged() && <TopButtons onLogout={onLogout} onList={onList} />}
    </Container>
  );
};

export default Top;
