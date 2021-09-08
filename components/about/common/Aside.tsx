import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-animation-name: mask5Up;
  animation-name: mask5Up;
  animation-delay: 100ms;
  animation-duration: 1s;

  img {
    width: 100%;
  }
`;

interface Props {}

const Aside: React.FC<Props> = ({}) => {
  return (
    <Container>
      <img src="/images/shiva.jpg" alt="" />
    </Container>
  );
};

export default Aside;
