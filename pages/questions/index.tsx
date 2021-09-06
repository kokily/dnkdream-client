import PageTemplate from '../../components/common/PageTemplate';
import ListQuestions from '../../components/questions/ListQuestions';
import useAuth from '../../libs/hooks/useAuth';
import useListQuestions from './hooks/useListQuestions';

function ListQuestionsPage() {
  useAuth();
  const questions = useListQuestions();

  if (questions.loading) return <div>Loading...</div>;
  if (questions.error) return null;

  return (
    <PageTemplate>
      <ListQuestions
        questions={questions.questions}
        title={questions.title}
        name={questions.name}
        email={questions.email}
        confirm={questions.confirm}
        selected={questions.selected}
        onChange={questions.onChange}
        toggleConfirm={questions.toggleConfirm}
        onSelect={questions.onSelect}
        onDetail={questions.onDetail}
      />
    </PageTemplate>
  );
}

export default ListQuestionsPage;
