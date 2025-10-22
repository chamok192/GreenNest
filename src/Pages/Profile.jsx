import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [busy, setBusy] = useState(false);

  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await updateProfile(user, { displayName: name || null, photoURL: photoURL || null });
      toast.success('Profile updated');
    } catch (err) {
      toast.error(err?.message || 'Failed to update profile');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <img src={user.photoURL || 'https://i.pravatar.cc/100'} alt="avatar" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="font-semibold">{user.displayName || 'Anonymous'}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input className="input input-bordered w-full" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
        </div>
        <button className="btn bg-[#227540] text-white" disabled={busy}>{busy ? 'Saving...' : 'Update Profile'}</button>
      </form>
    </div>
  );
};

export default Profile;
