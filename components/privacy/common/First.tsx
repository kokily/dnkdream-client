import React from 'react';
import styled from 'styled-components';
import { BiRightArrow } from 'react-icons/bi';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0;
  padding-left: 2.4rem;
  margin-top: 0.7rem;
  color: #777;
  position: relative;
  svg {
    position: absolute;
    left: 1.2rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const First: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <BiRightArrow color="#0b91df" />
      {children}
    </Container>
  );
};

export default First;
