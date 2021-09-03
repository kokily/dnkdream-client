import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
} from '@apollo/client';
import { useMemo } from 'react';
import { HttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';
import merge from 'deepmerge';
import fetch from 'isomorphic-unfetch';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        // console.table({ graphQLErrors, networkError });
      }),
      new HttpLink({
        uri: `${
          process.env.NODE_ENV === 'production'
            ? 'https://api.dnkdream.com'
            : 'http://localhost:4000'
        }/graphql`,
        credentials: 'include',
        fetch,
      }),
    ]),
    cache: new InMemoryCache(),
  });
}

export function initApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existCache = _apolloClient.extract();
    const data = merge(initialState, existCache);

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initApollo(state), [state]);

  return store;
}
