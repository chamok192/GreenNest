import React from 'react';
import Hero from '../Components/Hero';
import TopPlants from '../Components/TopPlants';
import PlantCareTips from '../Components/PlantCareTips';
import GreenExperts from '../Components/GreenExperts';
import PlantOfTheWeek from '../Components/PlantOfTheWeek';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />
            
            {/* Top Plants Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <TopPlants />
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