import React, { useState } from 'react';
import { Column } from '@/types/management-types';

interface AddFormProps {
    columns: Column[];
    addFormFields?: string[];
    onSubmit: (formData: Record<string, string | number>) => void;
    onCancel: () => void;
}

const AddForm: React.FC<AddFormProps> = ({ columns, addFormFields, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Convert numeric strings to numbers
        const processedFormData = Object.entries(formData).reduce((acc, [key, value]) => {
            acc[key] = isNaN(Number(value)) ? value : Number(value);
            return acc;
        }, {} as Record<string, string | number>);
        onSubmit(processedFormData);
    };

    const fieldsToRender = addFormFields || columns.map((col) => col.accessor).filter((field) => field !== 'id');

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {fieldsToRender.map((field) => {
                const column = columns.find((col) => col.accessor === field);
                if (!column) return null;
                return (
                    <div key={field}>
                        <label htmlFor={field} className="mb-5 block text-sm font-medium text-gray-700">
                            {column.title}
                        </label>
                        <input
                            type="text"
                            name={field}
                            id={field}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                );
            })}
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onCancel} className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400">
                    Cancel
                </button>
                <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default AddForm;
