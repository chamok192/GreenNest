import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import toast from 'react-hot-toast';

const useStockManagement = () => {
    const [stockData, setStockData] = useState({});
    const [loading, setLoading] = useState(false);

    const updateStock = async (plantId, newStock) => {
        setLoading(true);
        try {
            const stockRef = doc(db, 'stock', plantId.toString());
            await setDoc(stockRef, {
                plantId: plantId,
                availableStock: newStock,
                lastUpdated: new Date()
            }, { merge: true });
            
            setStockData(prev => ({
                ...prev,
                [plantId]: newStock
            }));
            
            toast.success('Stock updated successfully!');
        } catch (error) {
            toast.error('Failed to update stock');
            console.error('Stock update error:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStock = async (plantId) => {
        try {
            const stockRef = doc(db, 'stock', plantId.toString());
            const stockSnap = await getDoc(stockRef);
            
            if (stockSnap.exists()) {
                return stockSnap.data().availableStock;
            }
            return null;
        } catch (error) {
            console.error('Error fetching stock:', error);
            return null;
        }
    };

    const reduceStock = async (plantId, quantity = 1) => {
        const currentStock = stockData[plantId] || await getStock(plantId);
        if (currentStock && currentStock >= quantity) {
            const newStock = currentStock - quantity;
            await updateStock(plantId, newStock);
            return true;
        } else {
            toast.error('Insufficient stock available');
            return false;
        }
    };

    return {
        stockData,
        loading,
        updateStock,
        getStock,
        reduceStock
    };
};

export default useStockManagement;

