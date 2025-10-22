import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const passwordValid = (pwd) => {
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const longEnough = pwd.length >= 6;
  return { valid: hasUpper && hasLower && longEnough, hasUpper, hasLower, longEnough };
};

const Signup = () => {
  const { register, loginWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const { valid, hasUpper, hasLower, longEnough } = passwordValid(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setBusy(true);
    try {
      await register({ name, email, password, photoURL });
      toast.success('Account created');
      navigate('/')
    } catch (err) {
      toast.error(err?.message || 'Failed to register');
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      await loginWithGoogle();
      toast.success('Signed in with Google');
      navigate('/')
    } catch (err) {
      toast.error(err?.message || 'Google sign-in failed');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input type="url" className="input input-bordered w-full" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {touched && !valid && (
              <ul className="text-sm text-red-600 mt-2 list-disc list-inside">
                {!hasUpper && <li>Must include an uppercase letter</li>}
                {!hasLower && <li>Must include a lowercase letter</li>}
                {!longEnough && <li>Must be at least 6 characters</li>}
              </ul>
            )}
          </div>
          <button className="btn w-full bg-[#227540] text-white" disabled={busy || (touched && !valid)}>
            {busy ? 'Creating account...' : 'Register'}
          </button>
        </form>
        <div className="divider">Or</div>
        <button className="btn w-full" onClick={handleGoogle} disabled={busy}>Continue with Google</button>
        <p className="text-sm text-center mt-3">
          Already have an account? <Link to="/login" className="text-[#227540]">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
