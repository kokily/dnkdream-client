import React from 'react';
import Modal from './Modal';

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const RemoveModal: React.FC<Props> = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      title="삭제하기"
      content="정말 삭제하시나요?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default RemoveModal;
