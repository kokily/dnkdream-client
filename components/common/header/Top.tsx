import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from '../../../styles';

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
  return (
    <Container>
      <Link href="/">
        <a>Logo</a>
      </Link>

      <div>Search</div>
    </Container>
  );
};

export default Top;
