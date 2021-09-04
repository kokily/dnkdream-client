import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles';
import NoticeCard from './NoticeCard';

// Styles
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 100%;
    justify-content: center;
  }
`;

interface Props {
  notices: NoticeType[];
  onDetail: (id: string) => void;
}

const NoticesCardsList: React.FC<Props> = ({ notices, onDetail }) => {
  return (
    <Container>
      {notices && notices.length > 0 ? (
        <>
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} onDetail={onDetail} />
          ))}
        </>
      ) : (
        <div className="space">아직 작성된 공지사항이 없습니다.</div>
      )}
    </Container>
  );
};

export default NoticesCardsList;
