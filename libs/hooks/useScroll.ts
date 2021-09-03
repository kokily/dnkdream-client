import { useCallback, useEffect, useRef } from 'react';

type CursorType = string | number | null;

interface Props {
  cursor?: string | null;
  onLoadMore?: (cursor: string) => any;
}

const getScrollTop = () => {
  if (!document.body) return 0;

  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;

  return scrollTop;
};

const getScrollBottom = () => {
  if (!document.body) return 0;

  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();

  return scrollHeight - innerHeight - scrollTop;
};

export default function useScroll({ cursor, onLoadMore }: Props) {
  const last = useRef<CursorType>(null);

  const preventBottomStick = useCallback(() => {
    if (getScrollBottom() === 0) {
      window.scrollTo(0, getScrollTop() - 1);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (!cursor || !onLoadMore) return;
    if (cursor === last.current) return;

    last.current = cursor;

    await onLoadMore(cursor);

    preventBottomStick();
  }, [cursor, onLoadMore, preventBottomStick]);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();

    if (scrollBottom < window.screen.height) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
