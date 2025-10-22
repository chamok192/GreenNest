
import { Link, NavLink } from 'react-router-dom';
import { Leaf, Menu } from 'lucide-react';
import Container from './Container'; 
const Navbar = () => {


    return (
        <nav className='bg-black text-white'>
            <Container>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-base dropdown-content bg-green-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={"/"}>Home</NavLink> </li>
                                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={"/Plants"}>Plants</NavLink> </li>
                                <li> <NavLink className="font-semibold text-[#227540] active:bg-green-300" to={"/myProfile"}>My Profile</NavLink> </li>
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
                        <ul className="menu menu-horizontal gap-4">
                            <li>
                                <a href="/account/signin" className="btn-neutral rounded-3xl  border-0 text-[#227540] font-bold  hover:text-green-600 hover:border-green-600">Login</a>
                            </li>
                            <li>
                                <a href="/account/signup" className="btn-neutral rounded-3xl border-0 bg-[#227540] text-[#93d852] font-bold  hover:text-green-400 hover:border-green-600">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;