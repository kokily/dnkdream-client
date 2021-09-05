import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';

// Styles
const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 5px 5px 0 5px;
  flex: 0 0 25%;
  max-width: 25%;
  user-select: none;
  ${media.large} {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  ${media.medium} {
    flex: 1 1 50%;
    max-width: 47.5%;
  }
  ${media.small} {
    flex: none;
    max-width: 95%;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  border: 1px solid rgba(0, 0, 0, 0.06);
  word-wrap: break-word;
  background: white;
  border-radius: 0.25rem;

  img {
    cursor: pointer;
    transition: all 0.2s ease 0s;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    flex-shrink: 0;
    -ms-flex-shrink: 0;
    width: 100%;
    height: 200px;
    vertical-align: middle;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-style: none;
    &:hover {
      filter: grayscale(80%);
      -webkit-filter: grayscale(80%);
    }
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem 0.5rem 0 0.5rem;

  h4 {
    font-size: 23px;
    font-weight: 600;
    color: #463884;
    line-height: 27px;
    padding-top: 0.25rem;
    margin: 0 0 14px 0;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      border-top: 3px solid rgb(34, 139, 230);
      width: 100px;
      margin: -20px auto 5px;
    }
    &:hover {
      color: #9930b9;
    }
  }

  p {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 20px;
    word-break: keep-all;
    font-size: 16px;
    color: #616161;
    line-height: 1.3;
    margin-bottom: 1rem;

    &.tag {
      font-size: 0.9rem;
      font-weight: bold;
      overflow: hidden;
      span {
        margin-right: 0.5rem;
        color: #1251fb;
        opacity: 0.6;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

interface Props {
  notice: NoticeType;
  onDetail: (id: string) => void;
  onTag: (tag: string) => void;
}

const NoticeCard: React.FC<Props> = ({ notice, onDetail, onTag }) => {
  return (
    <Container>
      <Layout>
        {notice.thumbnail && (
          <img
            src={notice.thumbnail}
            alt={notice.title}
            onClick={() => onDetail(notice.id)}
          />
        )}

        <Content>
          <h4>{notice.title}</h4>
          <p>{new Date(notice.created_at).toLocaleDateString()} 작성</p>
          <p className="tag">
            {notice.tags.slice(0, 3).map((tag) => (
              <span key={tag} onClick={() => onTag(tag)}>
                #{tag}
              </span>
            ))}
          </p>
        </Content>
      </Layout>
    </Container>
  );
};

export default NoticeCard;
