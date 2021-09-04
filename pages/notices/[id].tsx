import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PageTemplate from '../../components/common/PageTemplate';
import ReadNotice from '../../components/notices/ReadNotice';
import { initApollo } from '../../libs/apollo';
import useReadNotice, { READ_NOTICE } from './hooks/useReadNotice';

interface Props {
  notice: NoticeType;
}

function ReadNoticePage({ notice }: Props) {
  const {
    notice: data,
    me,
    onRemove,
    onUpdate,
    loading,
    error,
  } = useReadNotice();
  const tags = notice?.tags.join();
  const description = notice.body
    .replace(/ /gi, '')
    .replace(/(<([^>]+)>)/gi, '')
    .substring(0, 50);

  if (loading) return <div>Loading...</div>;
  if (error) return null;

  return (
    <>
      <Head>
        <meta name="keywords" content={tags} />
        <meta name="description" content={description} />
      </Head>
      <PageTemplate>
        <ReadNotice
          notice={data}
          me={me}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </PageTemplate>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: { id?: string } = context.query;
  const apollo = initApollo();

  const response = await apollo.query({
    query: READ_NOTICE,
    variables: { id },
  });

  return {
    props: {
      notice: response.data?.ReadNotice.notice,
    },
  };
};

export default ReadNoticePage;
