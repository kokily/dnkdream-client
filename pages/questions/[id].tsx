import PageTemplate from '../../components/common/PageTemplate';
import ReadQuestion from '../../components/questions/ReadQuestion';
import useAuth from '../../libs/hooks/useAuth';
import useReadQuestion from './hooks/useReadQuestion';

function ReadQuestionPage() {
  useAuth();
  const question = useReadQuestion();

  if (question.loading) return <div>Loading</div>;
  if (question.error) return null;

  return (
    <PageTemplate>
      <ReadQuestion
        question={question.question}
        onConfirm={question.onConfirm}
        onRemove={question.onRemove}
        onBack={question.onBack}
      />
    </PageTemplate>
  );
}

export default ReadQuestionPage;
