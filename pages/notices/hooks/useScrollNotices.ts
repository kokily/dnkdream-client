import { useQuery, gql } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';
import useScroll from '../../../libs/hooks/useScroll';

export const LIST_NOTICES = gql`
  query ListNotices($title: String, $tag: String, $cursor: ID) {
    ListNotices(title: $title, tag: $tag, cursor: $cursor) {
      ok
      error
      notices {
        id
        title
        body
        thumbnail
        tags
        created_at
        updated_at
      }
    }
  }
`;

export default function useScrollNotices(title?: string, tag?: string) {
  const { data, loading, error, fetchMore } = useQuery<{
    ListNotices: { notices: NoticeType[] };
  }>(LIST_NOTICES, {
    variables: { title, tag },
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          title,
          tag,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListNotices.notices.length === 0) {
            setIsFinished(true);
          }

          return {
            ListNotices: {
              ...prev.ListNotices,
              notices: [
                ...prev.ListNotices.notices,
                ...fetchMoreResult.ListNotices.notices,
              ],
            },
          };
        },
      });
    },
    [title, tag, fetchMore]
  );

  const cursor =
    data?.ListNotices.notices[data.ListNotices.notices.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return {
    data,
    loading,
    error,
    isFinished,
  };
}
