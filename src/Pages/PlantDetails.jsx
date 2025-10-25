import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePlants from '../Hooks/usePlants';
import useStockManagement from '../Hooks/useStockManagement';
import { Star, ShoppingCart, Calendar, Mail, User, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import Spinner from '../Components/Spinner';
import PageLoader from '../Components/PageLoader';

const PlantDetails = () => {
    const { plantId } = useParams();
    const navigate = useNavigate();
    const { plants, loading, error } = usePlants();
    const { stockData, reduceStock } = useStockManagement();
    const [plant, setPlant] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if (plants.length > 0) {
            const foundPlant = plants.find(p => p.plantId === parseInt(plantId));
            setPlant(foundPlant);
        }
    }, [plants, plantId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email) {
            toast.error('Please fill in all fields');
            return;
        }

        const success = await reduceStock(plant.plantId, 1);
        if (success) {
            toast.success('Consultation booked successfully! We will contact you soon.');
            setFormData({
                name: '',
                email: ''
            });
        }
    };

    if (loading) {
        return <PageLoader message="Loading plant details..." />;
    }

    if (error || !plant) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Plant Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors duration-300"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Plant Image */}
                    <div className="space-y-6">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={plant.image}
                                alt={plant.plantName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Plant Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span className="font-semibold">{plant.rating}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Rating</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="flex items-center">
                                    <ShoppingCart className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="font-semibold">{stockData[plant.plantId] || plant.availableStock}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">In Stock</p>
                            </div>
                        </div>
                    </div>

                    {/* Plant Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {plant.plantName}
                            </h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {plant.category}
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {plant.careLevel} Care
                                </span>
                            </div>
                            <p className="text-3xl font-bold text-green-600 mb-6">
                                ${plant.price}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {plant.description}
                            </p>
                        </div>

                        {/* Provider Info */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Provider</h3>
                            <p className="text-gray-600">{plant.providerName}</p>
                        </div>

                        {/* Book Consultation Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <Calendar className="h-6 w-6 mr-2 text-green-600" />
                                Book Consultation
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Get personalized care advice from our plant experts
                            </p>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
                                >
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
