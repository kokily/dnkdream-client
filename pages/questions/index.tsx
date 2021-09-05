import { GetServerSideProps } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import { initApollo } from '../../libs/apollo';
import useAuth from '../../libs/hooks/useAuth';
import useListQuestions from './hooks/useListQuestions';
import { LIST_QUESTIONS } from './hooks/useListScrollQuestions';

interface Props {
  metaBody: string[];
}

function ListQuestionsPage({ metaBody }: Props) {
  useAuth();
  const questions = useListQuestions();

  return <PageTemplate>ListQue</PageTemplate>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apollo = initApollo();

  const questions = await apollo.query<{
    ListQuestions: { questions: QuestionType[] };
  }>({
    query: LIST_QUESTIONS,
  });

  const metaBody = questions?.data.ListQuestions.questions.map((question) => {
    return question.body
      .replace(/ /gi, '')
      .replace(/(<([^>]+)>)/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      metaBody,
    },
  };
};

export default ListQuestionsPage;
