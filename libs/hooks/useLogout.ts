import React from 'react';
import { gql, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { isLogged } from '../store';
import { useRouter } from 'next/router';

const LOGOUT = gql`
  mutation Logout {
    Logout {
      ok
      error
    }
  }
`;

export default function useLogout() {
  const router = useRouter();
  const [Logout, { client }] = useMutation(LOGOUT);

  const onLogout = async () => {
    try {
      const response = await Logout();

      if (!response || !response.data) return;

      isLogged(false);
      await client.clearStore();

      document.location.href = '/';
    } catch (err) {
      toast.error(err);
    }
  };

  const onList = () => {
    router.push('/questions');
  };

  return { onLogout, onList };
}
