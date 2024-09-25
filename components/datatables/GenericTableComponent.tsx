'use client';

import React from 'react';
import AddForm from '@/components/forms/AddFormComponent';
import { Modal } from '@/components/modals/ModalComponent';
import TabComponent from '@/components/tabs/TabComponent';
import { useModal } from '@/hooks/useModal';
import { TabData } from '@/types/management-types';

interface GenericTableProps {
    moduleName: string;
    data: TabData[];
}

export default function GenericTableComponent({ moduleName, data }: GenericTableProps) {
    const { modalConfig, openModal, closeModal } = useModal();

    const handleRowClick = (rowData: any) => {
        openModal(
            <div>
                <h2 className="mb-4 text-xl font-bold">{`${moduleName} Data Details`}</h2>
                <pre>{JSON.stringify(rowData, null, 2)}</pre>
            </div>,
            `${moduleName} Data Details`
        );
    };

    const handleAddClick = (tabData: TabData) => {
        openModal(
            <AddForm
                columns={tabData.columns}
                addFormFields={tabData.addFormFields}
                onSubmit={(formData) => {
                    console.log('Form submitted:', formData);
                    closeModal();
                }}
                onCancel={closeModal}
            />,
            `Add New ${tabData.title} Entry`
        );
    };

    return (
        <>
            <TabComponent tabsData={data} onRowClick={handleRowClick} onAddClick={handleAddClick} />
            {modalConfig && (
                <Modal isOpen={!!modalConfig} onClose={closeModal} title={modalConfig.title}>
                    {modalConfig.content}
                </Modal>
            )}
        </>
    );
}
