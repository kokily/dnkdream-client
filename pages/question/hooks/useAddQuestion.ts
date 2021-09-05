import React, { useCallback, useReducer } from 'react';
import { gql, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { isLogged } from '../../../libs/store';

export const ADD_QUESTION = gql`
  mutation AddQuestion(
    $title: String!
    $body: String!
    $name: String!
    $email: String!
    $phone: String
  ) {
    AddQuestion(
      title: $title
      body: $body
      name: $name
      email: $email
      phone: $phone
    ) {
      ok
      error
    }
  }
`;

type StateProps = {
  title: string;
  body: string;
  name: string;
  email: string;
  phone?: string;
};

type ActionProps = {
  name: string;
  value: string;
};

const reducer = (state: StateProps, action: ActionProps) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useAddQuestion() {
  const router = useRouter();
  const [AddQuestion, { client }] = useMutation(ADD_QUESTION);
  const [state, dispatch] = useReducer(reducer, {
    title: '',
    body: '',
    name: '',
    email: '',
    phone: '',
  });
  const { title, body, name, email, phone } = state;

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  }, []);

  const onAddQuestion = async (e: React.MouseEvent) => {
    if ([title, body, name, email].includes('')) {
      toast.error('*표시 항목은 전부 입력해 주셔야 합니다.');
      return;
    }

    try {
      const response = await AddQuestion({
        variables: {
          title,
          body,
          name,
          email,
          phone,
        },
      });

      if (!response || !response.data) return;

      await client.resetStore();

      toast.success('질문 내용이 정상적으로 전송되었습니다.');

      router.push('/');
    } catch (err) {
      toast.error(err);
    }
  };

  const onListQuestions = () => {
    router.push('/questions');
  };

  return {
    title,
    body,
    name,
    email,
    phone,
    onChange,
    onAddQuestion,
    onListQuestions,
    me: isLogged(),
  };
}
