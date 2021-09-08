import React from 'react';
import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { media } from '../../../styles';

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
`;

const Contents = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 4rem;

  ${media.medium} {
    margin-top: 4rem;
  }

  h2 {
    color: #3036df;
    margin: 0.5rem 0 0 0;
    line-height: 27px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    padding-right: 0;
  }

  li {
    position: relative;
    padding-top: 5px;
    padding-left: 34px;
    margin-bottom: 13px;
    line-height: 26px;
    vertical-align: middle;

    svg {
      position: absolute;
      width: 25px;
      height: 25px;
      left: 0;
      text-align: center;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      padding: 4px;
      font-size: 0.8em;
      color: #0089cc;
    }
  }
`;

interface Props {}

const Info: React.FC<Props> = () => {
  return (
    <Container>
      <Contents>
        <h2>D&K Dreams 은...</h2>

        <ul>
          <li>
            <IoLocationOutline />
            <strong>주소: </strong>
            (추후기술)
          </li>

          <li>
            <FaPhone />
            <strong>전화: </strong>
            (추후기술)
          </li>

          <li>
            <MdEmail />
            <strong>이메일: </strong>
            hkkokily5@gmail.com
          </li>
        </ul>
      </Contents>

      <Contents>
        <h2>
          Business <strong>Hours</strong>
        </h2>

        <ul>
          <li>
            <BiTimeFive />
            월요일 ~ 금요일: 09:00~18:00
          </li>

          <li>
            <BiTimeFive />
            토/일/공휴: 휴무
          </li>
        </ul>
      </Contents>
    </Container>
  );
};

export default Info;
