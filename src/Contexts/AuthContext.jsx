import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    updateProfile,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authLoading, setAuthLoading] = useState(false);

    // Sign up function
    const signup = async (email, password, displayName, photoURL) => {
        setAuthLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, {
                displayName: displayName,
                photoURL: photoURL || null
            });
            
            await setDoc(doc(db, 'users', result.user.uid), {
                displayName: displayName,
                email: email,
                photoURL: photoURL || null,
                createdAt: new Date(),
                lastLogin: new Date()
            });
            
            toast.success('Account created successfully!');
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setAuthLoading(false);
        }
    };

    // Login function
    const login = async (email, password) => {
        setAuthLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            
            await setDoc(doc(db, 'users', result.user.uid), {
                lastLogin: new Date()
            }, { merge: true });
            
            toast.success('Welcome back!');
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setAuthLoading(false);
        }
    };

    // Google login function
    const googleLogin = async () => {
        setAuthLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            
            await setDoc(doc(db, 'users', result.user.uid), {
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                lastLogin: new Date()
            }, { merge: true });
            
            toast.success('Welcome!');
            return result;
        } catch (error) {
            toast.error(error.message);
            throw error;
        } finally {
            setAuthLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    // Forgot password function
    const forgotPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent!');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    // Update profile function
    const updateUserProfile = async (displayName, photoURL) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: photoURL
            });
            toast.success('Profile updated successfully!');
        } catch (error) {
            toast.error(error.message);
            throw error;
        }
    };

    // Password validation function
    const validatePassword = (password) => {
        const errors = [];
        
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long');
        }
        
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter');
        }
        
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain at least one lowercase letter');
        }
        
        return errors;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loading,
        authLoading,
        signup,
        login,
        logout,
        googleLogin,
        forgotPassword,
        updateUserProfile,
        validatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
