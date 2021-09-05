import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-animation-name: mask5Up;
  animation-name: mask5Up;
  animation-delay: 100ms;
  animation-duration: 1s;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0.5rem 0 0 0;
    color: #3036df;

    &.list {
      cursor: pointer;
      &:hover {
        color: #7377e6;
      }
    }
  }

  p {
    line-height: 26px;
    color: #575757;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  margin-left: -5px;
  margin-right: -5px;
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  padding-left: 5px;
  padding-right: 5px;

  label {
    display: inline-block;
    font-size: 0.95em;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #3a3a3a;

    span {
      color: red;
    }
  }

  &.separator {
    display: flex;
    justify-content: space-between;

    div {
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: auto;
  padding: 0.5rem;
  font-size: 1em;
  font-weight: 400;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.15s ease-in-out;
  -webkit-appearance: none;

  &:after {
    content: '.';
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  resize: vertical;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  font-size: 1em;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out;
  padding: 0.5rem;
  color: #495057;
`;

const Button = styled.button`
  padding: 0.5rem 0.5rem;
  color: #0088cc;
  background: white;
  border: 2px solid #0088cc;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    color: white;
    background: #0088cc;
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

const SendMail: React.FC<Props> = ({
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
      {me ? (
        <h2 className="list" onClick={onListQuestions}>
          질문 보내기
        </h2>
      ) : (
        <h2>질문 보내기</h2>
      )}

      <p>질문 내용을 관리자 이메일로 전송해드립니다.</p>

      <Form>
        <Row className="separator">
          <div>
            <label>
              이름<span>*</span>
            </label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label>
              이메일<span>*</span>
            </label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
        </Row>

        <Row>
          <label>전화번호</label>
          <Input
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            required
          />
        </Row>

        <Row>
          <label>
            제 목<span>*</span>
          </label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </Row>

        <Row>
          <label>
            본문 내용<span>*</span>
          </label>
          <TextArea
            rows={8}
            name="body"
            value={body}
            onChange={onChange}
            required
          />
        </Row>

        <Row>
          <Button onClick={onAddQuestion}>전송하기</Button>
        </Row>
      </Form>
    </Container>
  );
};

export default SendMail;
