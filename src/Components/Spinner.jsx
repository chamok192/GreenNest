import React from 'react';

const Spinner = ({ size = 12, color = 'border-green-600' }) => {
   
    const getSizeClass = (size) => {
        switch (size) {
            case 8: return 'h-8 w-8';
            case 10: return 'h-10 w-10';
            case 12: return 'h-12 w-12';
            case 16: return 'h-16 w-16';
            case 20: return 'h-20 w-20';
            default: return 'h-12 w-12';
        }
    };
    
    return (
        <div className="flex items-center justify-center py-8">
            <div className={`animate-spin rounded-full ${getSizeClass(size)} border-4 border-gray-200 ${color}`}></div>
        </div>
    );
};

export default Spinner;


