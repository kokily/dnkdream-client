import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Aside from './common/Aside';
import Content from './common/Content';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;

  ${media.large} {
    max-width: 760px;
  }

  ${media.medium} {
    display: block;
    width: 100%;
  }
`;

interface Props {}

const About: React.FC<Props> = ({}) => {
  return (
    <Container>
      <Layout>
        <Aside />
        <Content />
      </Layout>
    </Container>
  );
};

export default About;
