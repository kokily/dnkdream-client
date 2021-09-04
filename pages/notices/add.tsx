import AddNotice from '../../components/notices/AddNotice';
import useAuth from '../../libs/hooks/useAuth';
import useAddNotice from './hooks/useAddNotice';

function AddNoticePage() {
  useAuth();
  const notice = useAddNotice({ edit: false });

  if (notice.loading) return null;

  return (
    <AddNotice
      edit={false}
      title={notice.title}
      body={notice.body}
      thumbnail={notice.thumbnail}
      tags={notice.tags}
      onChangeTitle={notice.onChangeTitle}
      onChangeBody={notice.onChangeBody}
      onChangeTags={notice.onChangeTags}
      onBack={notice.onBack}
      onThumbnail={notice.onThumbnail}
      onAddNotice={notice.onAddNotice}
    />
  );
}

export default AddNoticePage;
