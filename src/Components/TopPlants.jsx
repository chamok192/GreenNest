import usePlants from '../Hooks/usePlants';
import { Link } from 'react-router-dom';

const TopPlants = () => {
    const { plants, loading, error } = usePlants();

    const topPlants = plants.slice(0, 9);

    console.log(topPlants);

    if (loading) return (
        <div className="text-center py-8">
            <div className="text-lg text-gray-600">Loading plants...</div>
        </div>
    );
    
    if (error) return (
        <div className="text-center py-8">
            <div className="text-lg text-red-600">Error: {error}</div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Plants</h2>
                <p className="text-lg text-gray-600">Discover our most popular and easy-care plants</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topPlants.map((plant, index) => (
                    <div key={plant.plantId || index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={plant.image} 
                                alt={plant.plantName}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {plant.plantName}
                            </h3>
                            <p className="text-gray-600 mb-3">
                                {plant.description?.substring(0, 100)}...
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-green-600">
                                    ${plant.price}
                                </span>
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {plant.careLevel} Care
                                </span>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">★</span>
                                    <span className="ml-1 text-gray-600">{plant.rating}</span>
                                </div>
                                <Link 
                                    to={`/plants/${plant.plantId}`}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPlants;