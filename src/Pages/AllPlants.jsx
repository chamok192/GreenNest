import React from 'react';
import TopPlants from '../Components/TopPlants';
import PageLoader from '../Components/PageLoader';
import usePlants from '../Hooks/usePlants';

const AllPlants = () => {
    const { loading } = usePlants();

    if (loading) {
        return <PageLoader message="Loading all plants..." />;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <TopPlants showAll={true} />
            </div>
        </div>
    );
};

export default AllPlants;
