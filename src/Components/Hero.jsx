import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ArrowRight } from 'lucide-react';
import usePlants from '../Hooks/usePlants';
import PageLoader from './PageLoader';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
    const { plants, loading, error } = usePlants();
    
    // Get more plants for hero slides (first 6 plants)
    const heroPlants = plants.slice(0, 6);

    if (loading) return <PageLoader message="Loading beautiful plants..." />;

    if (error) return (
        <div className="h-screen bg-green-800 flex items-center justify-center">
            <div className="text-center">
                <div className="text-white text-xl mb-4">Error loading plants</div>
                <button 
                    onClick={() => window.location.reload()} 
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Try Again
                </button>
            </div>
        </div>
    );

    return (
        <div className="h-screen bg-green-800">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {heroPlants.map((plant) => (
                    <SwiperSlide key={plant.plantId}>
                        <div className="h-screen bg-green-800 flex flex-col lg:flex-row">
                            {/* Left Content Area */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0">
                                <div className="text-left">
                                    {/* Welcome Text */}
                                    <p className="text-green-300 text-xs md:text-sm font-medium mb-3 md:mb-4 tracking-wider">
                                        — WELCOME TO GREENNEST
                                    </p>
                                    
                                    {/* Dynamic Main Title based on plant */}
                                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
                                        {plant.category === 'Air Purifier' && 'Clean Air, Healthy Life'}
                                        {plant.category === 'Trailing' && 'Beautiful Trailing Plants'}
                                        {plant.category === 'Flowering' && 'Blooming Beauty'}
                                        {plant.category === 'Low Light' && 'Perfect for Low Light'}
                                        {plant.category === 'Statement' && 'Make a Statement'}
                                        {plant.category === 'Succulent' && 'Easy Care Succulents'}
                                        {plant.category === 'Foliage' && 'Lush Green Foliage'}
                                        {plant.category === 'Fern' && 'Elegant Ferns'}
                                        {!['Air Purifier', 'Trailing', 'Flowering', 'Low Light', 'Statement', 'Succulent', 'Foliage', 'Fern'].includes(plant.category) && 'Expert Care for Every Plant'}
                                    </h1>
                                    
                                    {/* Dynamic Description based on plant */}
                                    <p className="text-white text-base md:text-lg mb-6 md:mb-8 opacity-90">
                                        {plant.description?.substring(0, 120)}...
                                    </p>
                                    
                                    {/* Plant specific info */}
                                    <div className="mb-6 md:mb-8">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {plant.careLevel} Care
                                            </span>
                                            <span className="text-green-300 text-sm">
                                                ★ {plant.rating} Rating
                                            </span>
                                        </div>
                                        <p className="text-green-300 text-sm">
                                            Only ${plant.price} • {plant.availableStock} in stock
                                        </p>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-300 text-sm md:text-base">
                                            Shop {plant.plantName}
                                            <ArrowRight size={18} />
                                        </button>
                                        
                                        <button className="border-2 border-white text-white p-3 md:p-4 rounded-lg hover:bg-white hover:text-green-800 transition-colors duration-300">
                                            <Heart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Image Area */}
                            <div className="w-full lg:w-1/2 relative h-80 md:h-96 lg:h-screen">
                                <div className="h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
                                    <div className="relative w-full h-full">
                                        <img 
                                            src={plant.image} 
                                            alt={plant.plantName}
                                            className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
                                        />
                                        {/* Plant info overlay */}
                                        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white bg-opacity-90 rounded-lg p-2 md:p-3">
                                            <h3 className="font-bold text-gray-800 text-sm md:text-base">{plant.plantName}</h3>
                                            <p className="text-xs md:text-sm text-gray-600">{plant.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;