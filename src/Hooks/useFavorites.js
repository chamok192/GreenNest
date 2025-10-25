import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';

const useFavorites = () => {
    const { currentUser } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (currentUser) {
            fetchFavorites();
        }
    }, [currentUser]);

    const fetchFavorites = async () => {
        if (!currentUser) return;

        try {
            const userRef = doc(db, 'users', currentUser.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                setFavorites(userSnap.data().favorites || []);
            }
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    };

    const addToFavorites = async (plantId) => {
        if (!currentUser) {
            toast.error('Please login to add favorites');
            return;
        }

        setLoading(true);
        try {
            const userRef = doc(db, 'users', currentUser.uid);
            await updateDoc(userRef, {
                favorites: arrayUnion(plantId)
            });

            setFavorites(prev => [...prev, plantId]);
            toast.success('Added to favorites!');
        } catch (error) {
            toast.error('Failed to add to favorites');
            console.error('Add favorite error:', error);
        } finally {
            setLoading(false);
        }
    };

    const removeFromFavorites = async (plantId) => {
        if (!currentUser) return;

        setLoading(true);
        try {
            const userRef = doc(db, 'users', currentUser.uid);
            await updateDoc(userRef, {
                favorites: arrayRemove(plantId)
            });

            setFavorites(prev => prev.filter(id => id !== plantId));
            toast.success('Removed from favorites');
        } catch (error) {
            toast.error('Failed to remove from favorites');
            console.error('Remove favorite error:', error);
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = (plantId) => {
        if (favorites.includes(plantId)) {
            removeFromFavorites(plantId);
        } else {
            addToFavorites(plantId);
        }
    };

    const isFavorite = (plantId) => {
        return favorites.includes(plantId);
    };

    return {
        favorites,
        loading,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite
    };
};

export default useFavorites;