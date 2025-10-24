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
        <div className="relative h-screen bg-green-800 overflow-hidden">
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
                className="h-full w-full"
            >
                {heroPlants.map((plant) => (
                    <SwiperSlide key={plant.plantId}>
                        <div className="h-screen bg-green-800 flex flex-col lg:flex-row relative">
                            {/* Left Content Area */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-0 z-10">
                                <div className="text-left">
                                    
                                    <p className="text-green-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4 tracking-wider">
                                        — WELCOME TO GREENNEST
                                    </p>
                                    
                                    
                                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
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
                                    
                                
                                    <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90">
                                        {plant.description?.substring(0, 100)}...
                                    </p>
                                    
                                   
                                    <div className="mb-4 sm:mb-6 md:mb-8">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit">
                                                {plant.careLevel} Care
                                            </span>
                                            <span className="text-green-300 text-xs sm:text-sm">
                                                ★ {plant.rating} Rating
                                            </span>
                                        </div>
                                        <p className="text-green-300 text-xs sm:text-sm">
                                            Only ${plant.price} • {plant.availableStock} in stock
                                        </p>
                                    </div>
                                    
                                    
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-300 text-xs sm:text-sm md:text-base w-full sm:w-auto justify-center">
                                            Shop {plant.plantName}
                                            <ArrowRight size={16} className="sm:w-4 sm:h-4" />
                                        </button>
                                        
                                        <button className="border-2 border-white text-white p-2 sm:p-3 md:p-4 rounded-lg hover:bg-white hover:text-green-800 transition-colors duration-300 w-full sm:w-auto flex justify-center">
                                            <Heart size={16} className="sm:w-4 sm:h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-6 md:p-8">
                                
                                <div className="w-full  lg:aspect-auto lg:h-full flex items-center justify-center">
                                    <div className="relative  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                                        <img 
                                            src={plant.image} 
                                            alt={plant.plantName}
                                            className="w-full h-full object-contain rounded-2xl md:rounded-3xl shadow-2xl"
                                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                                        />
                                        
                                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 bg-white bg-opacity-90 rounded-lg p-2 sm:p-3">
                                            <h3 className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{plant.plantName}</h3>
                                            <p className="text-xs sm:text-sm text-gray-600">{plant.category}</p>
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