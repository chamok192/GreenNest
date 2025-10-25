import usePlants from '../Hooks/usePlants';
import useFavorites from '../Hooks/useFavorites';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Spinner from './Spinner';

const TopPlants = ({ showAll = false }) => {
    const { plants, loading, error } = usePlants();
    const { toggleFavorite, isFavorite } = useFavorites();

    const topPlants = showAll ? plants : plants.slice(0, 4);


    if (loading) return <Spinner />;

    if (error) return (
        <div className="text-center py-8">
            <div className="text-lg text-red-600">Error: {error}</div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    {showAll ? 'All Plants' : 'Featured Plants'}
                </h2>
                <p className="text-lg text-gray-600">
                    {showAll ? 'Browse our complete collection of plants' : 'Discover our most popular and easy-care plants'}
                </p>
            </div>

            <div className={`grid gap-8 ${showAll ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {topPlants.map((plant, index) => (
                    <div key={plant.plantId || index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <button
                                onClick={() => toggleFavorite(plant.plantId)}
                                className="absolute top-3 right-3 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                            >
                                <Heart
                                    size={20}
                                    className={isFavorite(plant.plantId) ? 'text-red-500 fill-red-500' : 'text-gray-600'}
                                />
                            </button>
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