import React, { createContext, useEffect, useMemo, useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState('/');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return cred.user;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      return cred.user;
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ name, email, password, photoURL }) => {
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name || photoURL) {
        await updateProfile(cred.user, { displayName: name || null, photoURL: photoURL || null });
      }
      return cred.user;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = useMemo(
    () => ({ user, loading, login, loginWithGoogle, register, resetPassword, logout, redirectPath, setRedirectPath }),
    [user, loading, redirectPath]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
