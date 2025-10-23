import React from 'react';
import { Droplets, Sun, Zap, Shield } from 'lucide-react';

const PlantCareTips = () => {
    const tips = [
        {
            id: 1,
            icon: Droplets,
            title: "Watering",
            description: "Water your plants when the top inch of soil feels dry. Overwatering is the most common cause of plant death.",
            tips: [
                "Check soil moisture with your finger",
                "Water thoroughly until it drains from the bottom",
                "Use room temperature water",
                "Water less frequently in winter"
            ]
        },
        {
            id: 2,
            icon: Sun,
            title: "Sunlight",
            description: "Most indoor plants prefer bright, indirect light. Avoid direct sunlight which can burn leaves.",
            tips: [
                "Place plants near east or west-facing windows",
                "Rotate plants weekly for even growth",
                "Use sheer curtains to filter harsh light",
                "Consider grow lights for low-light areas"
            ]
        },
        {
            id: 3,
            icon: Zap,
            title: "Fertilizing",
            description: "Feed your plants during growing season (spring and summer) with balanced fertilizer.",
            tips: [
                "Use liquid fertilizer every 2-4 weeks",
                "Dilute fertilizer to half strength",
                "Stop fertilizing in fall and winter",
                "Choose fertilizer based on plant type"
            ]
        },
        {
            id: 4,
            icon: Shield,
            title: "Pest Control",
            description: "Prevent pests by keeping plants clean and checking regularly for signs of infestation.",
            tips: [
                "Wipe leaves with damp cloth weekly",
                "Isolate new plants for 2 weeks",
                "Use neem oil for natural pest control",
                "Remove dead leaves promptly"
            ]
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Plant Care Tips</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Essential care tips to keep your plants healthy and thriving
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip) => {
                        const IconComponent = tip.icon;
                        return (
                            <div key={tip.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                                        <IconComponent className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                                </div>
                                
                                <p className="text-gray-600 mb-4">{tip.description}</p>
                                
                                <ul className="space-y-2">
                                    {tip.tips.map((tipItem, index) => (
                                        <li key={index} className="flex items-start text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">•</span>
                                            {tipItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlantCareTips;
