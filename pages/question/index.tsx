import PageTemplate from '../../components/common/PageTemplate';
import AddQuestion from '../../components/questions/AddQuestion';
import useAddQuestion from './hooks/useAddQuestion';

function QuestionPage() {
  const question = useAddQuestion();

  return (
    <PageTemplate>
      <AddQuestion
        title={question.title}
        body={question.body}
        name={question.name}
        email={question.email}
        phone={question.phone}
        onChange={question.onChange}
        onAddQuestion={question.onAddQuestion}
      />
    </PageTemplate>
  );
}

export default QuestionPage;
