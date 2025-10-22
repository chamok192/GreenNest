
import { Link, NavLink } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import Container from './Container'; 
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className='bg-black text-white'>
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul tabIndex={0} className="menu dropdown-content bg-green-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={'/'}>Home</NavLink> </li>
                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={'/plants'}>Plants</NavLink> </li>
                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={'/profile'}>My Profile</NavLink> </li>
                {!user && (
                  <>
                    <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={'/login'}>Login</NavLink> </li>
                    <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={'/signup'}>Register</NavLink> </li>
                  </>
                )}
              </ul>
            </div>
            <Link to={'/'} className="flex gap-2 items-center font-bold text-2xl "> <span className='bg-[#227540] rounded-lg p-2'><Leaf /></span><span className='hover:text-green-600'>GreenNest</span>  </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-semibold ${isActive ? 'text-green-700 border-b-2 border-green-500' : 'font-semibold text-[#2f8b51] hover:text-green-500'}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/plants"
                  className={({ isActive }) =>
                    ` font-semibold ${isActive ? 'text-green-700 border-b-2 border-green-500' : 'font-semibold text-[#2f8b51] hover:text-green-500'}`
                  }
                >
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `font-semibold ${isActive ? 'text-green-700 border-b-2 border-green-500' : 'font-semibold text-[#2f8b51] hover:text-green-500'}`
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="avatar" src={user.photoURL || 'https://i.pravatar.cc/40'} />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                  <li className="font-semibold px-2 py-1">{user.displayName || 'User'}</li>
                  <li><NavLink to="/profile">Profile</NavLink></li>
                  <li><button onClick={logout}>Logout</button></li>
                </ul>
              </div>
            ) : (
              <ul className="menu menu-horizontal gap-4">
                <li>
                  <Link to="/login" className="btn-neutral rounded-3xl  border-0 text-[#227540] font-bold  hover:text-green-600 hover:border-green-600">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="btn-neutral rounded-3xl border-0 bg-[#227540] text-[#93d852] font-bold  hover:text-green-400 hover:border-green-600">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;