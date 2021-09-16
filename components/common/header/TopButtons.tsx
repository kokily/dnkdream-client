import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

// Styles
const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  margin-right: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  background: white;
  box-shadow: 2px 2px 4px 0px gray;
  transition: 0.12s;

  &.list {
    color: #00c2a8;
    border: 2px solid #00c2a8;
    &:hover {
      background: #00c2a8;
      color: white;
    }
    &:active {
      background: #00c2a8;
      color: white;
      transform: translateY(2px);
      box-shadow: none;
    }
  }

  &.logout {
    color: red;
    border: 2px solid red;
    &:hover {
      background: red;
      color: white;
    }
    &:active {
      background: red;
      color: white;
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`;

interface Props {
  onLogout: () => void;
  onList: () => void;
}

const TopButtons: React.FC<Props> = ({ onLogout, onList }) => {
  return (
    <Container>
      <Button className="list" onClick={onList}>
        질문확인
      </Button>
      <Button className="logout" onClick={onLogout}>
        로그아웃
      </Button>
    </Container>
  );
};

export default TopButtons;
