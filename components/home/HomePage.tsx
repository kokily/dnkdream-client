import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 100%;
  max-width: 1110px;

  img {
    width: 100%;
  }
`;

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <Container>
      <Layout>
        <img src="/images/main.png" alt="PC, DID Repair, Coding, Buyer" />
      </Layout>
    </Container>
  );
};

export default HomePage;
