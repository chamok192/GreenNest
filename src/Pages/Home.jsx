import React from 'react';
import Hero from '../Components/Hero';
import TopPlants from '../Components/TopPlants';
import PlantCareTips from '../Components/PlantCareTips';
import GreenExperts from '../Components/GreenExperts';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';
import PageLoader from '../Components/PageLoader';
import usePlants from '../Hooks/usePlants';

const Home = () => {
    const { loading } = usePlants();

    if (loading) {
        return <PageLoader message="Loading GreenNest..." />;
    }

    return (
        <div>
            {/* Hero Section */}
            <Hero />
            
            {/* Top Plants Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <TopPlants showAll={false} />
                </div>
            </div>

            {/* Plant Care Tips Section */}
            <PlantCareTips />

            {/* Plant of the Week Section */}
            <PlantOfTheWeek />

            {/* Meet Our Green Experts Section */}
            <GreenExperts />
        </div>
    );
};

export default Home;