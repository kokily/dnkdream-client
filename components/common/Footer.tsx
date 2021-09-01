import React from 'react';
import styled from 'styled-components';
import Copyright from './footer/Copyright';

// Styles
const Container = styled.footer`
  display: block;
  background: #212529;
  color: #fff;
  width: 100%;
  border-top: 4px solid #212529;
  font-size: 0.9rem;
  padding: 0;
  clear: both;
  position: relative;
`;

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Copyright />
    </Container>
  );
};

export default Footer;
