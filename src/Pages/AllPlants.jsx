import React from 'react';
import TopPlants from '../Components/TopPlants';

const AllPlants = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <TopPlants showAll={true} />
            </div>
        </div>
    );
};

export default AllPlants;
