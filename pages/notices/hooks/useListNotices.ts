import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import useScrollNotices from './useScrollNotices';

export default function useListNotices() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const { data, loading, error } = useScrollNotices(title, tag);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const onSearch = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === '') {
      setTitle('');
    } else {
      setTitle(search);
    }
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent
  ) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onDetail = (id: string) => {
    router.push(`/notices/${id}`);
  };

  const onTag = (tag: string) => {
    setTag(tag);
  };

  return {
    notices: data?.ListNotices.notices || [],
    search,
    onChange,
    onSearch,
    onKeyPress,
    onDetail,
    onTag,
    tag,
    loading,
    error,
  };
}
