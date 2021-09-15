import React from 'react';
import { gql, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { isLogged } from '../store';

const LOGOUT = gql`
  mutation Logout {
    Logout {
      ok
      error
    }
  }
`;

export default function useLogout() {
  const [Logout, { client }] = useMutation(LOGOUT);

  const onLogout = async () => {
    try {
      const response = await Logout();

      if (!response || !response.data) return;

      await client.clearStore();

      isLogged(false);

      document.location.href = '/';
    } catch (err) {
      toast.error(err);
    }
  };

  return { onLogout };
}
