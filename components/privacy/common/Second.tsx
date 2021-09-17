import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  padding-left: 2.3rem;
  margin-top: 0.5rem;
  color: #666666;
`;

interface Props {
  children: React.ReactNode;
}

const Second: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Second;
