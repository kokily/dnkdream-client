import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ListNotices from '../../components/notices/ListNotices';
import { initApollo } from '../../libs/apollo';
import useMe from '../../libs/hooks/useMe';
import { isLogged } from '../../libs/store';
import useListNotices from './hooks/useListNotices';
import { LIST_NOTICES } from './hooks/useScrollNotices';

interface Props {
  metaBody: string[];
  metaTags: string[];
}

function NoticesPage({ metaBody, metaTags }: Props) {
  useMe();
  const notices = useListNotices();

  return (
    <>
      <Head>
        <link rel="canonical" href="https://dnkdream.com/notices" />
        {metaBody && <meta name="description" content={metaBody.join()} />}
        {metaTags && <meta name="keywords" content={metaTags.join()} />}
      </Head>
      <PageTemplate>
        <ListNotices
          notices={notices.notices}
          search={notices.search}
          onChange={notices.onChange}
          onSearch={notices.onSearch}
          onKeyPress={notices.onKeyPress}
          onDetail={notices.onDetail}
          onTag={notices.onTag}
          me={isLogged()}
          tag={notices.tag}
        />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initApollo();

  const notices = await apollo.query<{
    ListNotices: { notices: NoticeType[] };
  }>({
    query: LIST_NOTICES,
  });

  const metaBody = notices?.data.ListNotices.notices.map((notice) => {
    return notice.body
      .replace(/ /gi, '')
      .replace(/(<([^>]+)>)/gi, '')
      .substring(0, 50);
  });

  const metaTags = notices?.data.ListNotices.notices.map((notice) => {
    return notice.tags.join();
  });

  return {
    props: {
      metaBody,
      metaTags,
    },
  };
};

export default NoticesPage;
