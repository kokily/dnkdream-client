import PageTemplate from '../components/common/PageTemplate';
import HomePage from '../components/home/HomePage';
import useLogout from '../libs/hooks/useLogout';

function IndexPage() {
  const { onLogout } = useLogout();

  return (
    <PageTemplate>
      <HomePage />
    </PageTemplate>
  );
}

export default IndexPage;
