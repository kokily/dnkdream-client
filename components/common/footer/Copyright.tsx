import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { media } from '../../../styles';

// Styles
const Container = styled.div`
  display: block;
  background: #1c2023;
`;

const CopyBox = styled.div`
  max-width: 1110px;
  width: 100%;
  padding: 0.5rem 15px;
  margin-left: auto;
  margin-right: auto;
  .pane {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    padding-top: 24px;
    padding-bottom: 24px;
    ${media.small} {
      display: block;
      text-align: center;
    }
  }
`;

const PanePart = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-start;
  align-items: center;

  ${media.small} {
    display: inline-block;
    flex: none !important;
    max-width: 100% !important;
    margin-bottom: 1.25rem;
  }

  &.logo {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }

  &.copy {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    p {
      font-size: 0.8rem;
      line-height: 26px;
      margin: 0;
      padding: 0;
      color: #555;
    }
  }
  &.link {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    justify-content: flex-end;
  }
  img {
    height: 32px;
  }
`;

const EtcLink = styled.nav`
  font-size: 12px;
  color: #777;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      position: relative;
      line-height: 12px;
      margin: 0;
      padding: 0 8px;
      margin-right: 1rem;
      svg {
        position: absolute;
        top: 0px;
        left: -6px;
      }
      a {
        transition: 0.12s all;
      }
      a:hover {
        color: white;
      }
    }
  }
`;

interface Props {}

const Copyright: React.FC<Props> = () => {
  return (
    <Container>
      <CopyBox>
        <div className="pane">
          <PanePart className="logo">
            <Link href="/">
              <a>Logo Image</a>
            </Link>
          </PanePart>
          <PanePart className="copy">
            <p>Copyright(c) 2021. All Right Reserved</p>
          </PanePart>
          <PanePart className="link">
            <EtcLink>
              <ul>
                <li>
                  <MdKeyboardArrowRight />
                  <Link href="/privacy">
                    <a>개인정보처리방침</a>
                  </Link>
                </li>
              </ul>
            </EtcLink>
          </PanePart>
        </div>
      </CopyBox>
    </Container>
  );
};

export default Copyright;
