import {
  useApolloClient,
  gql,
  useQuery,
  useMutation,
} from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { devServer, isProd, prodServer } from '../../../libs/constants';

const READ_NOTICE = gql`
  query ReadNotice($id: ID!) {
    ReadNotice(id: $id) {
      ok
      error
      notice {
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

const ADD_NOTICE = gql`
  mutation AddNotice(
    $title: String!
    $body: String!
    $thumbnail: String
    $tags: [String]!
  ) {
    AddNotice(title: $title, body: $body, thumbnail: $thumbnail, tags: $tags) {
      ok
      error
    }
  }
`;

const UPDATE_NOTICE = gql`
  mutation UpdateNotice(
    $id: ID!
    $title: String
    $body: String
    $thumbnail: String
    $tags: [String]
  ) {
    UpdateNotice(
      id: $id
      title: $title
      body: $body
      thumbnail: $thumbnail
      tags: $tags
    ) {
      ok
      error
    }
  }
`;

export default function useAddNotice({ edit }: { edit?: boolean }) {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading } = useQuery<{
    ReadNotice: { notice: NoticeType | null };
  }>(READ_NOTICE, {
    variables: { id },
  });
  const [AddNotice] = useMutation(ADD_NOTICE);
  const [UpdateNotice] = useMutation(UPDATE_NOTICE);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const onChangeBody = useCallback((text: string) => {
    setBody(text);
  }, []);

  const onChangeTags = useCallback((nextTags: string[]) => {
    setTags(nextTags);
  }, []);

  const onBack = () => {
    router.back();
  };

  const onThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const formData = new FormData();

      formData.append('file', file);

      const response = await fetch(
        `${isProd ? prodServer : devServer}/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response) {
        toast.error('업로드 에러 발생!');
        return;
      }

      const data = await response.json();

      setThumbnail(`https://image.dnkdream.com/${data.key}`);
    };

    upload.click();
  };

  const onAddNotice = async (e: React.MouseEvent) => {
    e.preventDefault();

    if ([title, body, tags].includes('')) {
      toast.error('빈 내용 없이 입력해주세요');
      return;
    }

    let overlapTags =
      tags === [] ? [] : [...new Set(tags.map((tag) => tag.trim()))];

    try {
      if (!edit) {
        // Add Notice
        const response = await AddNotice({
          variables: {
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push('/notices');
      } else {
        // Update Notice
        const response = await UpdateNotice({
          variables: {
            id,
            title,
            body,
            thumbnail,
            tags: overlapTags,
          },
        });

        if (!response || !response.data) return;

        await client.clearStore();
        router.push(`/stories/${id}`);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    if (data?.ReadNotice.notice) {
      setTitle(data.ReadNotice.notice.title);
      setBody(data.ReadNotice.notice.body);
      setThumbnail(data.ReadNotice.notice.thumbnail);
      setTags(data.ReadNotice.notice.tags);
    }
  }, [edit, data]);

  return {
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onThumbnail,
    onBack,
    onAddNotice,
    loading,
  };
}
