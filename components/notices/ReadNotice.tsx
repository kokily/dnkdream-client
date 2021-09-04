import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import ReadButton from './common/ReadButton';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1110px;

  img {
    width: 100%;
    max-width: 450px;
    margin-bottom: 1.2rem;
  }
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

interface Props {
  notice: NoticeType;
  me: boolean;
  onRemove: () => void;
  onUpdate: () => void;
}

const ReadNotice: React.FC<Props> = ({ notice, me, onRemove, onUpdate }) => {
  return (
    <Container>
      <ThumbnailBox>
        {notice.thumbnail && <img src={notice.thumbnail} alt={notice.title} />}
      </ThumbnailBox>
    </Container>
  );
};

export default ReadNotice;
