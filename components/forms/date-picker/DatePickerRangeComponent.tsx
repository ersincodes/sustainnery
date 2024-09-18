import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { CalendarIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface DateRangePickerProps {
    onChange: (dates: Date[]) => void;
    value: Date[];
}

const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({ onChange, value }) => {
    const handleReset = () => {
        onChange([]);
    };

    return (
        <div className="relative flex items-center">
            <div className="relative flex-grow">
                <Flatpickr
                    options={{
                        mode: 'range',
                        dateFormat: 'Y-m-d',
                        onChange: (selectedDates) => {
                            onChange(selectedDates);
                        },
                    }}
                    className="form-input w-full pl-8 pr-8"
                    placeholder="Select date range..."
                    value={value}
                />
                <CalendarIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
            {value.length > 0 && (
                <button onClick={handleReset} className="ml-2 rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" title="Reset date range">
                    <XCircleIcon className="h-5 w-5 text-gray-500" />
                </button>
            )}
        </div>
    );
};

export default DateRangePickerComponent;
