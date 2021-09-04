import { useRouter } from 'next/router';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { isLogged } from '../../../libs/store';

export const READ_NOTICE = gql`
  query ReadNotce($id: ID!) {
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

export const REMOVE_NOTICE = gql`
  mutation RemoveNotice($id: ID!) {
    RemoveNotice(id: $id) {
      ok
      error
    }
  }
`;

export default function useReadNotice() {
  const router = useRouter();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{
    ReadNotice: { notice: NoticeType | null };
  }>(READ_NOTICE, {
    variables: { id },
  });
  const [RemoveNotice, { client }] = useMutation(REMOVE_NOTICE);

  const onRemove = async () => {
    try {
      const response = await RemoveNotice({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.back();
    } catch (err) {
      toast.error(err);
    }
  };

  const onUpdate = () => {
    router.push(`/notices/edit/${id}`);
  };

  return {
    notice: data?.ReadNotice.notice || null,
    me: isLogged(),
    onRemove,
    onUpdate,
    loading,
    error,
  };
}
