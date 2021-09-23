import { useCallback, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import useScroll from '../../../libs/hooks/useScroll';

export const LIST_QUESTIONS = gql`
  query ListQuestions(
    $title: String
    $confirm: Boolean
    $name: String
    $email: String
    $cursor: ID
  ) {
    ListQuestions(
      title: $title
      confirm: $confirm
      name: $name
      email: $email
      cursor: $cursor
    ) {
      ok
      error
      questions {
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

export default function useListScrollQuestions(
  title?: string,
  confirm?: boolean,
  name?: string,
  email?: string
) {
  const { data, loading, error, fetchMore } = useQuery<{
    ListQuestions: { questions: QuestionType[] };
  }>(LIST_QUESTIONS, {
    variables: { title, confirm, name, email },
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          title,
          confirm,
          name,
          email,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListQuestions.questions.length === 0) {
            setIsFinished(true);
          }

          return {
            ListQuestions: {
              ...prev.ListQuestions,
              questions: [
                ...prev.ListQuestions.questions,
                ...fetchMoreResult.ListQuestions.questions,
              ],
            },
          };
        },
      });
    },
    [title, confirm, name, email, fetchMore]
  );

  const cursor =
    data?.ListQuestions.questions[data.ListQuestions.questions.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return { data, loading, error, isFinished };
}
