import React from 'react';

const Spinner = ({ size = 12, color = 'border-green-600' }) => {
    const sizeClass = `h-${size} w-${size}`;
    return (
        <div className="flex items-center justify-center py-8">
            <div className={`animate-spin rounded-full ${sizeClass} border-4 border-gray-200 border-t-4 ${color}`}></div>
        </div>
    );
};

export default Spinner;


