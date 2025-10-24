import React, { useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';
import { User, Mail, Camera, Save, LogOut } from 'lucide-react';


const MyProfile = () => {
    const { currentUser, updateUserProfile, logout, authLoading } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        displayName: currentUser?.displayName || '',
        photoURL: currentUser?.photoURL || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        
        try {
            await updateUserProfile(formData.displayName, formData.photoURL);
            setIsEditing(false);
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setFormData({
            displayName: currentUser?.displayName || '',
            photoURL: currentUser?.photoURL || ''
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData({
            displayName: currentUser?.displayName || '',
            photoURL: currentUser?.photoURL || ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-12">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img
                                        src={currentUser?.photoURL || 'https://via.placeholder.com/100x100?text=U'}
                                        alt="Profile"
                                        className="h-24 w-24 rounded-full border-4 border-white shadow-lg object-cover"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                                        <User className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h1 className="text-3xl font-bold text-white">
                                        {currentUser?.displayName || 'User'}
                                    </h1>
                                    <p className="text-green-100 mt-1">
                                        {currentUser?.email}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="flex items-center px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-opacity-30 transition-colors duration-300"
                            >
                                <LogOut className="h-5 w-5 mr-2" />
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Profile Form */}
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                            {!isEditing && (
                                <button
                                    onClick={handleEdit}
                                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                                >
                                    <User className="h-5 w-5 mr-2" />
                                    Update Profile
                                </button>
                            )}
                        </div>

                        <form onSubmit={handleSave} className="space-y-6">
                            {/* Display Name */}
                            <div>
                                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="displayName"
                                        name="displayName"
                                        value={formData.displayName}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                        className={`block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                                            !isEditing ? 'bg-gray-50 text-gray-500' : 'bg-white'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                            {/* Email (Read-only) */}
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
                                        value={currentUser?.email || ''}
                                        disabled
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                        placeholder="Email address"
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                    Email cannot be changed
                                </p>
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-2">
                                    Photo URL
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Camera className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="url"
                                        id="photoURL"
                                        name="photoURL"
                                        value={formData.photoURL}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                        className={`block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                                            !isEditing ? 'bg-gray-50 text-gray-500' : 'bg-white'
                                        }`}
                                        placeholder="Enter photo URL"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            {isEditing && (
                                <div className="flex items-center gap-4 pt-6">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Saving...
                                            </>
                                        ) : (
                                            <>
                                                <Save className="h-5 w-5 mr-2" />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </form>

                        {/* Account Stats */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">Member</div>
                                    <div className="text-sm text-gray-600 mt-1">Account Type</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">Active</div>
                                    <div className="text-sm text-gray-600 mt-1">Status</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">GreenNest</div>
                                    <div className="text-sm text-gray-600 mt-1">Platform</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
