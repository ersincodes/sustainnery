import React from 'react';
import { useModal } from './ModalProvider';
import { Modal } from './ModalComponent';

export const ModalManager: React.FC = () => {
    const { isOpen, content, title, closeModal } = useModal();

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={closeModal} title={title || undefined}>
            {content}
        </Modal>
    );
};
