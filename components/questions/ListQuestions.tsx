import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { SelectType } from '../../pages/questions/hooks/useListQuestions';
import { media } from '../../styles';
import formatDate from '../../libs/utils';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  justify-content: center;
  ${media.large} {
    max-width: 760px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border-spacing: 2px;
  th,
  td {
    vertical-align: bottom;
    padding: 0.75em;
    border-top: 1px solid #dee2e6;
    border-color: rgba(0, 0, 0, 0.06);
  }
  tbody tr {
    transition: 0.12s;
    cursor: pointer;
    &:hover {
      background: #aee2d7;
    }
  }
`;

interface Props {
  questions: QuestionType[];
  title: string;
  name: string;
  email: string;
  confirm: boolean;
  selected: SelectType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleConfirm: (value: boolean) => void;
  onSelect: (value: SelectType) => void;
  onDetail: (id: string) => void;
}

const ListQuestions: React.FC<Props> = ({
  questions,
  title,
  name,
  email,
  confirm,
  selected,
  onChange,
  toggleConfirm,
  onSelect,
  onDetail,
}) => {
  return (
    <Container>
      <Contents>
        <Table>
          <thead>
            <tr>
              <th>작성일</th>
              <th>제 목</th>
              <th>작성자</th>
              <th>확인</th>
            </tr>
          </thead>
          <tbody>
            {questions && questions.length > 0 ? (
              questions.map((question) => (
                <tr key={question.id} onClick={() => onDetail(question.id)}>
                  <td style={{ textAlign: 'center' }}>
                    {formatDate(question.created_at.toString())}
                  </td>
                  <td style={{ textAlign: 'center' }}>{question.title}</td>
                  <td style={{ textAlign: 'center' }}>{question.name} 님</td>
                  {question.isConfirm ? (
                    <td style={{ textAlign: 'center' }}>확인</td>
                  ) : (
                    <td style={{ color: 'red', textAlign: 'center' }}>
                      미확인
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td style={{ textAlign: 'center' }} colSpan={4}>
                  아직 질문 글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Contents>
    </Container>
  );
};

export default ListQuestions;
