import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAuth from '../../libs/hooks/useAuth';
import { isLogged } from '../../libs/store';
import Footer from './Footer';
import Header from './Header';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1110px;
`;

const ChildBox = styled.main`
  display: block;
  width: 100%;
  margin-top: 208px;
  margin-bottom: 5rem;
  max-width: 1110px;
`;

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
  const { me, loading } = useAuth();

  useEffect(() => {
    if (me) {
      isLogged(true);
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Layout>
        <Header />

        <ChildBox>{children}</ChildBox>
      </Layout>

      <Footer />
    </Container>
  );
};

export default PageTemplate;
