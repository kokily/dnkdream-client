import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import { isLogged } from '../store';

export const ME = gql`
  query Me {
    Me {
      ok
      error
      me
    }
  }
`;

export default function useAuth() {
  const router = useRouter();
  const { data, loading } = useQuery<{ Me: { me: string } }>(ME);

  useEffect(() => {
    if (!loading && !data.Me.me) {
      isLogged(false);
      router.replace('/');
    }
  }, [loading, data, router]);
}
