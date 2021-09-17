import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 0;
  padding-left: 3.5rem;
  margin-top: 0.5rem;
  color: #959595;
  a,
  span {
    margin-left: 0.5rem;
    color: #0748c0;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Third: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Third;
