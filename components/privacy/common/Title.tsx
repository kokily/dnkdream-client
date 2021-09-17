import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.h3`
  font-size: 1.2rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
`;

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
