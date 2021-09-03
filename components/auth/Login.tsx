import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #a0dae9, #8863ff);
`;

const Layout = styled.div`
  padding: 70px 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);

  h2 {
    color: #0a18d3;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1em;
    margin-bottom: 40px;
    padding-left: 10px;
    border-left: 5px solid #0a18d3;
  }
`;

const Box = styled.div`
  position: relative;
  width: 300px;
  height: 46px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: transparent;
    color: #111;
    font-size: 16px;
    font-weight: 300;
    border: 1px solid #5189f0;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }

  span {
    position: absolute;
    top: 1px;
    left: 1px;
    padding: 10px;
    display: inline-block;
    font-size: 16px;
    font-weight: 300;
    color: #111;
    transition: 0.5s;
    pointer-events: none;
  }

  input:focus ~ span,
  input:valid ~ span {
    transform: translateX(-10px) translateY(-32px);
    font-size: 12px;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  border-radius: 6px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  transition: 0.2s all;
  border: 1px solid #5189f0;
  background: white;
  color: #5189f0;

  &:hover {
    background: #5189f0;
    color: white;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(3px);
  }

  & + & {
    margin-left: 1rem;
  }
`;

interface Props {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: React.MouseEvent) => void;
  onKeyPress: (
    e: React.MouseEvent & React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const Login: React.FC<Props> = ({
  password,
  onChange,
  onLogin,
  onKeyPress,
}) => {
  return (
    <Container>
      <Layout>
        <h2>관리자 로그인</h2>

        <Box>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onKeyPress={onKeyPress}
            required
          />
          <span>비밀번호</span>
        </Box>
        <Box>
          <Button onClick={onLogin}>로그인</Button>
        </Box>
      </Layout>
    </Container>
  );
};

export default Login;
