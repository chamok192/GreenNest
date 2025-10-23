import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#227540] text-white py-12">
            <Container>
                <div className="footer sm:footer-horizontal p-10">
                    <div>
                        <Link className='flex items-center gap-2 font-bold text-2xl' to={"/"}> 
                            <Leaf/>GreenNest
                        </Link>
                        <p className="mt-4 text-green-100 max-w-xs">
                            Your trusted partner for beautiful indoor plants and expert care guidance.
                        </p>
                        <div className="mt-7 flex space-x-5">
                            {/* Instagram */}
                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>

                            {/* Facebook */}
                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </Link>

                            {/* Pinterest */}
                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg className="w-6 h-6"  xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><title>Pinterest-logo SVG Icon</title><path fill="currentColor" d="M224 112c0 22.57-7.9 43.2-22.23 58.11C188.39 184 170.25 192 152 192c-17.88 0-29.82-5.86-37.43-12l-10.78 45.82A8 8 0 0 1 96 232a8.24 8.24 0 0 1-1.84-.21a8 8 0 0 1-6-9.62l32-136a8 8 0 0 1 15.58 3.66l-16.9 71.8C122 166 131.3 176 152 176c27.53 0 56-23.94 56-64a72 72 0 1 0-134.37 36a8 8 0 0 1-13.85 8A88 88 0 1 1 224 112" /></svg>
                                
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        <h6 className="text-white text-xl font-semibold">Quick Links</h6>
                        <Link to={"/about"} className="link link-hover">About Us</Link>
                        <Link to={"/contact"} className="link link-hover">Contact</Link>
                        <Link to={"/privacy"} className="link link-hover">Privacy Policy</Link>
                        <Link to={"/terms"} className="link link-hover">Terms of Service</Link>
                    </div>
                    
                    <div>
                        <h6 className="text-white text-xl font-semibold">Services</h6>
                        <Link to={"/plants"} className="link link-hover">Plant Care</Link>
                        <Link to={"/consultation"} className="link link-hover">Consultation</Link>
                        <Link to={"/delivery"} className="link link-hover">Delivery</Link>
                        <Link to={"/support"} className="link link-hover">Support</Link>
                    </div>
                    
                    <div>
                        <h6 className="text-white text-xl font-semibold">Company</h6>
                        <Link to={"/careers"} className="link link-hover">Careers</Link>
                        <Link to={"/blog"} className="link link-hover">Blog</Link>
                        <Link to={"/newsletter"} className="link link-hover">Newsletter</Link>
                        <Link to={"/faq"} className="link link-hover">FAQ</Link>
                    </div>
                </div>
                <hr className='text-[#77af8d]'/>
                <div className="text-center py-4 text-white text-sm">
                    © 2025 GreenNest. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;