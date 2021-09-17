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
  grid-template-rows: repeat(4, 450px);

  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
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
        <div className="item item1">
          <img src="/images/pcb.png" alt="DID, PC 수리" />
        </div>
        <div className="item item2">
          <img src="/images/coding.png" alt="Coding" />
        </div>
        <div className="item item3">
          <img src="/images/repair.png" alt="PC Repair" />
        </div>
        <div className="item item4">
          <img src="/images/truck.png" alt="Buyer, Purchasing agent" />
        </div>
        <div className="item item5">
          <img
            src="/images/big-logo.png"
            alt="D&K Dream, Programming, PC Repair"
          />
        </div>
      </GridLayout>
    </Container>
  );
};

export default HomePage;
