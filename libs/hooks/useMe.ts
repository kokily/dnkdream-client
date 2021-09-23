import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { isLogged } from '../store';
import { ME } from './useAuth';

export default function useMe() {
  const { data, loading } = useQuery<{ Me: { me: string | null } }>(ME);

  useEffect(() => {
    if (!loading && !data.Me.me) {
      isLogged(false);
    } else {
      isLogged(true);
    }
  }, [data, loading]);
}
