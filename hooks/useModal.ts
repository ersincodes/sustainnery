import { useState, useCallback, ReactNode } from 'react';

interface ModalConfig {
    content: ReactNode;
    title?: string;
}

export const useModal = () => {
    const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

    const openModal = useCallback((content: ReactNode, title?: string) => {
        setModalConfig({ content, title });
    }, []);

    const closeModal = useCallback(() => {
        setModalConfig(null);
    }, []);

    return { modalConfig, openModal, closeModal };
};
