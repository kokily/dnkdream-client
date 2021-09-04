import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { media } from '../../styles';
import useMedia from '../../libs/hooks/useMedia';
import Search from '../common/Search';
import NoticesCardsList from './list/NoticesCardsList';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  ${media.large} {
    max-width: 760px;
  }
`;

const Button = styled.a`
  height: 40px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  background: white;
  color: #db3603;
  border: 2px solid #db3603;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: #db3603;
    color: white;
  }
`;

const SearchBox = styled.div<{ small: boolean; me: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${(props) =>
    props.small &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    !props.me &&
    css`
      justify-content: flex-end;
    `}
`;

interface Props {
  notices: NoticeType[];
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => void;
  onDetail: (id: string) => void;
  onTag: (tag: string) => void;
  me: boolean;
}

const ListNotices: React.FC<Props> = ({
  notices,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onDetail,
  onTag,
  me,
}) => {
  const isSmall = useMedia('(max-width: 768px)');

  return (
    <Container>
      <Contents>
        <SearchBox small={isSmall} me={me}>
          {!isSmall && me && (
            <Link href="/notices/add">
              <Button>작 성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            search={search}
            onChange={onChange}
            onSearch={onSearch}
            onKeyPress={onKeyPress}
          />
        </SearchBox>

        <NoticesCardsList notices={notices} onDetail={onDetail} />
      </Contents>
    </Container>
  );
};

export default ListNotices;
