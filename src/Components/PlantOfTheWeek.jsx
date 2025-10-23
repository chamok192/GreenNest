import React from 'react';
import { Star, Calendar, Heart, ShoppingCart } from 'lucide-react';

const PlantOfTheWeek = () => {
    const plantOfTheWeek = {
        plantId: 6,
        plantName: "Monstera Deliciosa",
        category: "Statement",
        price: 35,
        rating: 4.8,
        availableStock: 5,
        careLevel: "Moderate",
        description: "Monstera Deliciosa, often called the Swiss Cheese Plant, is a dramatic tropical plant with large, heart-shaped leaves featuring natural splits and holes, creating a bold, jungle-like aesthetic. It thrives in bright, indirect light but can tolerate moderate light, requiring watering when the top inch of soil dries out.",
        image: "https://images.unsplash.com/photo-1653404809389-f370ea4310dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=390",
        providerName: "Tropical Trends",
        specialOffer: "20% OFF",
        originalPrice: 44
    };

    return (
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
                        <Calendar className="h-5 w-5 text-white mr-2" />
                        <span className="text-white font-semibold">Plant of the Week</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Plant</h2>
                    <p className="text-green-100 max-w-2xl mx-auto">
                        Discover this week's special plant with exclusive care tips and limited-time offer
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={plantOfTheWeek.image}
                                alt={plantOfTheWeek.plantName}
                                className="w-full h-96 lg:h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {plantOfTheWeek.specialOffer}
                            </div>
                            <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2">
                                <Heart className="h-6 w-6 text-red-500" />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                    {plantOfTheWeek.plantName}
                                </h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {plantOfTheWeek.category}
                                    </span>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {plantOfTheWeek.careLevel} Care
                                    </span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                                    <span className="text-gray-700 font-semibold">{plantOfTheWeek.rating}</span>
                                    <span className="text-gray-500 ml-2">({plantOfTheWeek.availableStock} in stock)</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {plantOfTheWeek.description}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <strong>Provider:</strong> {plantOfTheWeek.providerName}
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-3xl font-bold text-green-600">
                                        ${plantOfTheWeek.price}
                                    </div>
                                    <div className="text-lg text-gray-500 line-through">
                                        ${plantOfTheWeek.originalPrice}
                                    </div>
                                </div>
                                <p className="text-sm text-green-600 font-semibold">
                                    Save ${plantOfTheWeek.originalPrice - plantOfTheWeek.price} this week only!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Add to Cart - Special Price
                                </button>
                                <button className="w-full border-2 border-green-600 text-green-600 py-4 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
                                    View Details
                                </button>
                            </div>

                            {/* Special Features */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-4">This Week's Special Features:</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Free Care Guide
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Expert Consultation
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Free Delivery
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        30-Day Guarantee
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantOfTheWeek;
