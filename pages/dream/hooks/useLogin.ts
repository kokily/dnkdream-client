import React, { useCallback, useState } from 'react';
import { gql, useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { isLogged } from '../../../libs/store';

const LOGIN = gql`
  mutation Login($password: String!) {
    Login(password: $password) {
      ok
      error
      access_token
      refresh_token
    }
  }
`;

export default function useLogin() {
  const router = useRouter();
  const [Login, { client }] = useMutation(LOGIN);
  const [password, setPassword] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onLogin = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (password === '') {
      toast.error('비밀번호를 입력해주세요');
      return;
    }

    try {
      const response = await Login({
        variables: { password },
      });

      if (response.data.Login.error) {
        toast.error(response.data.Login.error);
        return;
      }

      if (!response || !response.data) return;

      await client.clearStore();

      isLogged(true);

      router.replace('/');
    } catch (err) {
      toast.error(err);
    }
  };

  const onKeyPress = (
    e: React.MouseEvent & React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      onLogin(e);
    }
  };

  return {
    password,
    onChange,
    onLogin,
    onKeyPress,
  };
}
