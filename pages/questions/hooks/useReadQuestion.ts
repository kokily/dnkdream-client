import {
  gql,
  useQuery,
  useMutation,
  useApolloClient,
} from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const READ_QUESTION = gql`
  query ReadQuestion($id: ID!) {
    ReadQuestion(id: $id) {
      ok
      error
      question {
        id
        title
        body
        name
        email
        phone
        isConfirm
        created_at
        updated_at
      }
    }
  }
`;

export const CONFIRM_QUESTION = gql`
  mutation ConfirmQuestion($id: ID!) {
    ConfirmQuestion(id: $id) {
      ok
      error
    }
  }
`;

export const REMOVE_QUESTION = gql`
  mutation RemoveQuestion($id: ID!) {
    RemoveQuestion(id: $id) {
      ok
      error
    }
  }
`;

export default function useReadQuestion() {
  const router = useRouter();
  const client = useApolloClient();
  const { id }: { id?: string } = router.query;
  const { data, loading, error } = useQuery<{
    ReadQuestion: { question: QuestionType | null };
  }>(READ_QUESTION, {
    variables: { id },
  });
  const [ConfirmQuestion] = useMutation(CONFIRM_QUESTION);
  const [RemoveQuestion] = useMutation(REMOVE_QUESTION);

  const onConfirm = async () => {
    try {
      const response = await ConfirmQuestion({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.back();
    } catch (err) {
      toast.error(err);
    }
  };

  const onRemove = async () => {
    try {
      const response = await RemoveQuestion({
        variables: { id },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      router.back();
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    question: data?.ReadQuestion.question || null,
    loading,
    error,
    onConfirm,
    onRemove,
  };
}
