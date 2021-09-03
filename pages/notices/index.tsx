import PageTemplate from '../../components/common/PageTemplate';
import useListNotices from './hooks/useListNotices';

function NoticesPage() {
  const notices = useListNotices();

  if (notices.loading) return <div>Loading...</div>;
  if (notices.error) return null;

  // Todos...
  return <PageTemplate>NoticesPage</PageTemplate>;
}

export default NoticesPage;
