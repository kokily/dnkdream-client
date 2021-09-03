import { useQuery, gql } from '@apollo/react-hooks';

const ME = gql`
  query Me {
    Me {
      ok
      error
      me
    }
  }
`;

export default function useAuth() {
  const { data, loading, error } = useQuery<{ Me: { me: string } }>(ME);

  return {
    me: data?.Me.me || null,
    loading,
    error,
  };
}
