import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import Info from './common/Info';
import SendMail from './common/SendMail';

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

interface Props {
  title: string;
  body: string;
  name: string;
  email: string;
  phone?: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onAddQuestion: (e: React.MouseEvent) => void;
  onListQuestions: () => void;
  me: boolean;
}

const AddQuestion: React.FC<Props> = ({
  title,
  body,
  name,
  email,
  phone,
  onChange,
  onAddQuestion,
  onListQuestions,
  me,
}) => {
  return (
    <Container>
      <Layout>
        <SendMail
          title={title}
          body={body}
          name={name}
          email={email}
          phone={phone}
          onChange={onChange}
          onAddQuestion={onAddQuestion}
          onListQuestions={onListQuestions}
          me={me}
        />
        <Info />
      </Layout>
    </Container>
  );
};

export default AddQuestion;
