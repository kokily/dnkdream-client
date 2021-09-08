import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Button from '../common/Button';
import RemoveModal from '../common/RemoveModal';
import Info from './read/Info';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: center;
  margin-bottom: 1.5rem;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }

  button {
    margin-right: 0.5rem;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  background: #f7f7f7;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;
  pre {
    font-size: 0.9rem;
    line-height: 1.6;
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
`;

interface Props {
  question: QuestionType;
  onConfirm: () => void;
  onRemove: () => void;
  onBack: () => void;
}

const ReadQuestion: React.FC<Props> = ({
  question,
  onConfirm,
  onRemove,
  onBack,
}) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onSubmit = () => {
    setModal(false);
    onRemove();
  };

  const onCancel = () => {
    setModal(false);
  };

  return (
    <Container>
      <FlexBox>
        <Info question={question} />
      </FlexBox>

      <FlexBox>
        <Body>
          <pre>{question.body}</pre>
        </Body>
      </FlexBox>

      <FlexBox>
        <Button submit onClick={onConfirm}>
          확인하기
        </Button>
        <Button remove onClick={onRemoveClick}>
          삭제하기
        </Button>
        <Button back onClick={onBack}>
          목록으로
        </Button>
      </FlexBox>

      <RemoveModal visible={modal} onConfirm={onSubmit} onCancel={onCancel} />
    </Container>
  );
};

export default ReadQuestion;
