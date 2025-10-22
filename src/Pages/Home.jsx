import React from 'react';
import Hero from '../Components/Hero';
import TopPlants from '../Components/TopPlants';

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
        </div>
    );
};

export default Home;