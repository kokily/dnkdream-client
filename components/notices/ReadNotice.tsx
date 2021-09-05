import React, { useState } from 'react';
import styled from 'styled-components';
import formatDate from '../../libs/utils';
import { media } from '../../styles';
import Markdown from '../common/Markdown';
import ReadButton from './common/ReadButton';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 950px;
  border-bottom: 0.2rem outset #37d8b3;
  margin-top: 2rem;
  margin-bottom: 10rem;

  ${media.medium} {
    margin-bottom: 1.5rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  h1 {
    font-size: 3rem;
  }
`;

const TagsBox = styled.div`
  .tag {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    color: #0d15e4;
    margin-right: 0.6rem;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      color: #6085d0;
    }

    ${media.medium} {
      font-size: 1.1rem;
    }
  }
`;

const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    max-width: 650px;
    height: auto;
    filter: sepia(40%);
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SliceBar = styled.div`
  height: 1.8px;
  background: linear-gradient(to right, #34a4ea, #66d5bb);
`;

const ContentsBox = styled.div`
  font-size: 1.2rem;
`;

interface Props {
  notice: NoticeType;
  me: boolean;
  onRemove: () => void;
  onUpdate: () => void;
}

const ReadNotice: React.FC<Props> = ({ notice, me, onRemove, onUpdate }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <Container>
      <TitleBox>
        <h1>{notice.title}</h1>
        <p>
          {formatDate(notice.created_at.toString())} 작성
          {notice.updated_at !== notice.created_at && (
            <span>({formatDate(notice.updated_at.toString())} 수정)</span>
          )}
        </p>

        <TagsBox>
          {notice.tags.map((tag) => (
            <div key={tag} className="tag">
              #{tag}
            </div>
          ))}
        </TagsBox>

        <ThumbnailBox>
          {notice.thumbnail && (
            <img src={notice.thumbnail} alt={notice.title} />
          )}
        </ThumbnailBox>
      </TitleBox>

      <SliceBar />

      <ContentsBox>
        <Markdown markdown={notice.body} />
      </ContentsBox>

      {me && (
        <ReadButton
          modal={modal}
          onRemoveClick={onRemoveClick}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onUpdate={onUpdate}
        />
      )}
    </Container>
  );
};

export default ReadNotice;
