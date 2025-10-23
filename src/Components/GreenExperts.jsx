import React from 'react';
import { Award, Users, Star, MessageCircle } from 'lucide-react';

const GreenExperts = () => {
    const experts = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialization: "Tropical Plants Specialist",
            experience: "15+ years",
            image: "https://plus.unsplash.com/premium_photo-1681506205588-329a1f681c7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
            rating: 4.9,
            description: "Expert in tropical plant care with extensive knowledge in humidity management and propagation techniques.",
            achievements: ["PhD in Botany", "Certified Plant Pathologist", "500+ Successful Consultations"]
        },
        {
            id: 2,
            name: "Michael Chen",
            specialization: "Succulent & Cactus Expert",
            experience: "12+ years",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=80",
            rating: 4.8,
            description: "Specializes in drought-resistant plants and desert gardening techniques for indoor environments.",
            achievements: ["Master Gardener", "Succulent Society Member", "300+ Plant Rescues"]
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            specialization: "Air Purifying Plants",
            experience: "10+ years",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=80",
            rating: 4.9,
            description: "Focuses on plants that improve indoor air quality and create healthier living spaces.",
            achievements: ["Environmental Science Degree", "NASA Clean Air Study Expert", "400+ Air Quality Tests"]
        },
        {
            id: 4,
            name: "David Thompson",
            specialization: "Rare & Exotic Plants",
            experience: "18+ years",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=80",
            rating: 5.0,
            description: "Expert in rare plant species, propagation, and creating optimal growing conditions for exotic plants.",
            achievements: ["Botanical Garden Curator", "International Plant Collector", "600+ Rare Species Grown"]
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Green Experts</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our certified plant specialists are here to help you succeed with your indoor garden
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experts.map((expert) => (
                        <div key={expert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                    <span className="text-sm font-semibold">{expert.rating}</span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{expert.name}</h3>
                                <p className="text-green-600 font-semibold mb-2">{expert.specialization}</p>
                                <p className="text-sm text-gray-500 mb-4">{expert.experience} experience</p>
                                
                                <p className="text-gray-600 text-sm mb-4">{expert.description}</p>
                                
                                <div className="space-y-2 mb-6">
                                    {expert.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-center text-xs text-gray-600">
                                            <Award className="h-3 w-3 text-green-500 mr-2" />
                                            {achievement}
                                        </div>
                                    ))}
                                </div>
                                
                                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Experts?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center">
                                <Users className="h-8 w-8 text-green-600 mr-3" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Certified Professionals</h4>
                                    <p className="text-sm text-gray-600">All experts are certified plant specialists</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Star className="h-8 w-8 text-green-600 mr-3" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                                    <p className="text-sm text-gray-600">Thousands of successful consultations</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Personalized Care</h4>
                                    <p className="text-sm text-gray-600">Tailored advice for your specific needs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenExperts;
