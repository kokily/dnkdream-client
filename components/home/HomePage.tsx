import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 33.3333%);
  grid-template-rows: repeat(4, 250px);

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item1 {
    grid-column: 1 / 4;
    background: #5cbad1;
    color: white;
  }

  .item2 {
    grid-row: 2 / 4;
    background: #2fdd95;
    color: white;
  }

  .item3,
  .item4 {
    grid-column: 2 / span 2;
  }

  .item3 {
    background: #df8723;
    color: white;
  }

  .item4 {
    background: #a035d1;
    color: white;
  }

  .item5 {
    grid-column: 1 / span 3;
    background: #ad3755;
    color: white;
  }
`;

interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <GridLayout>
        <div className="item item1">괜히 PBC 기판 이미지 넣고...</div>
        <div className="item item2">Java, react 등 코딩 내용</div>
        <div className="item item3">컴퓨터, DID 수리 등 내용</div>
        <div className="item item4">인터넷 구매대행, 소모품 등 내용</div>
        <div className="item item5">D&K Dream 로고</div>
      </GridLayout>
    </Container>
  );
};

export default HomePage;
