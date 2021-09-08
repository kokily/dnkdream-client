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

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5rem 0 0 0;
    color: #2daabb;

    &.list {
      cursor: pointer;
      &:hover {
        color: #7377e6;
      }
    }
  }

  p {
    line-height: 26px;
    color: #575757;
    margin-bottom: 1.5rem;
  }
`;

interface Props {}

const Content: React.FC<Props> = ({}) => {
  return (
    <Container>
      <h2>대표자 소개</h2>
      <p>쏼라 쏼라</p>
    </Container>
  );
};

export default Content;
