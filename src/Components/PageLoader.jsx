import React from 'react';
import Spinner from './Spinner';

const PageLoader = ({ message = "Loading..." }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <Spinner size={12} color="border-green-600" />
                <p className="text-gray-600 mt-4 text-lg">{message}</p>
            </div>
        </div>
    );
};

export default PageLoader;

