import React from 'react';
import Spinner from './Spinner';

const SpinnerTest = () => {
    return (
        <div className="p-8 space-y-8">
            <h2 className="text-2xl font-bold mb-4">Spinner Test Component</h2>
            
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Different Sizes:</h3>
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <Spinner size={8} />
                        <p className="text-sm mt-2">Size 8</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={12} />
                        <p className="text-sm mt-2">Size 12 (default)</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={16} />
                        <p className="text-sm mt-2">Size 16</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={20} />
                        <p className="text-sm mt-2">Size 20</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Different Colors:</h3>
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <Spinner size={12} color="border-green-600" />
                        <p className="text-sm mt-2">Green (default)</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={12} color="border-blue-600" />
                        <p className="text-sm mt-2">Blue</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={12} color="border-red-600" />
                        <p className="text-sm mt-2">Red</p>
                    </div>
                    <div className="text-center">
                        <Spinner size={12} color="border-purple-600" />
                        <p className="text-sm mt-2">Purple</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpinnerTest;
