import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { login, loginWithGoogle, resetPassword, redirectPath, setRedirectPath } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(email, password);
      const to = redirectPath || location.state?.from || '/';
      toast.success('Logged in successfully');
      navigate(to, { replace: true });
      setRedirectPath('/');
    } catch (err) {
      toast.error(err?.message || 'Failed to login');
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      await loginWithGoogle();
      const to = redirectPath || location.state?.from || '/';
      toast.success('Signed in with Google');
      navigate(to, { replace: true });
      setRedirectPath('/');
    } catch (err) {
      toast.error(err?.message || 'Google sign-in failed');
    } finally {
      setBusy(false);
    }
  };

  const handleReset = async () => {
    if (!email) return toast.error('Enter your email first');
    try {
      await resetPassword(email);
      toast.success('Password reset email sent');
    } catch (err) {
      toast.error(err?.message || 'Failed to send reset email');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="button" className="text-sm text-[#227540] mt-1" onClick={handleReset}>Forgot Password?</button>
          </div>
          <button className="btn w-full bg-[#227540] text-white" disabled={busy}>
            {busy ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="divider">Or</div>
        <button className="btn w-full" onClick={handleGoogle} disabled={busy}>Continue with Google</button>
        <p className="text-sm text-center mt-3">
          New here? <Link to="/signup" className="text-[#227540]">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
