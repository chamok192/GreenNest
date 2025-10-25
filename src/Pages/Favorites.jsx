import React from 'react';
import useFavorites from '../Hooks/useFavorites';
import usePlants from '../Hooks/usePlants';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLoader from '../Components/PageLoader';
import Spinner from '../Components/Spinner';

const Favorites = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const { plants, loading } = usePlants();

    if (loading) {
        return <PageLoader message="Loading your favorites..." />;
    }

    const favoritePlants = plants.filter(plant => favorites.includes(plant.plantId));

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Favorites</h1>
                    <p className="text-lg text-gray-600">
                        Plants you've saved for later
                    </p>
                </div>

                {favoritePlants.length === 0 ? (
                    <div className="text-center py-16">
                        <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
                        <p className="text-gray-500 mb-6">Start adding plants to your favorites!</p>
                        <Link
                            to="/plants"
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                        >
                            Browse Plants
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {favoritePlants.map((plant) => (
                            <div key={plant.plantId} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
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
                                            className="text-red-500 fill-red-500"
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
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-2xl font-bold text-green-600">
                                            ${plant.price}
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {plant.careLevel} Care
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                            <span className="text-gray-600">{plant.rating}</span>
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
                )}
            </div>
        </div>
    );
};

export default Favorites;