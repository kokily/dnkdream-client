import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';

// Styles
const Container = styled.section`
  margin: 0 0 35px 0;
  width: 100%;
  text-align: center;
  .content {
    display: inline-block;
    background: #43c4cf;
    width: 100%;
    padding: 65px 0;
    ${media.large} {
      max-width: 760px;
    }
    ${media.small} {
      max-width: 100%;
    }
    h1 {
      font-size: 32px;
      font-weight: 600;
      font-style: normal;
      font-family: 'Poppins', Arial, sans-serif;
      color: #ffffff;
      text-align: center;
    }
  }
`;

interface Props {
  title: string;
}

const TitleHeader: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <div className="content">
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

export default TitleHeader;
