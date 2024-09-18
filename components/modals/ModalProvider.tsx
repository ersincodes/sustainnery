import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    isOpen: boolean;
    content: ReactNode | null;
    title: string | null;
    openModal: (content: ReactNode, title?: string) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);
    const [title, setTitle] = useState<string | null>(null);

    const openModal = (modalContent: ReactNode, modalTitle?: string) => {
        setContent(modalContent);
        setTitle(modalTitle || null);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
        setTitle(null);
    };

    return <ModalContext.Provider value={{ isOpen, content, title, openModal, closeModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
