import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#227540] text-white py-12">
            <Container>

                <div className="footer sm:footer-horizontal   p-10">
                    <div>
                        <Link className='flex  items-center gap-2 font-bold text-2xl' to={"/"}> <Leaf/>GreenNest</Link>

                        <div className=" mt-7 flex space-x-5">
                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>


                            </Link>


                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </Link>


                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6V24h-4v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.7h-4V8z" />
                                </svg>
                            </Link>


                            <Link to={"#"} className="hover:text-green-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5">
                                    <path d="M714.163 519.284L1160.89 0H1047.3L667.137 442.924L366.76 0H0L468.75 681.102L0 1226.64H113.589L519.875 753.462L844.375 1226.64H1200L714.137 519.284H714.163ZM568.312 691.844L525.419 630.492L154.687 80.357H319.812L611.943 502.785L654.837 564.137L1058.06 1150.28H892.938L568.312 691.844Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-semibold">Services</h6>
                        <Link to={"#"} className="link link-hover">Branding</Link>
                        <Link to={"#"} className="link link-hover">Design</Link>
                        <Link to={"#"} className="link link-hover">Marketing</Link>
                        <Link to={"#"} className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-semibold">Company</h6>
                        <Link to={"#"} className="link link-hover">About us</Link>
                        <Link to={"#"} className="link link-hover">Contact</Link>
                        <Link to={"#"} className="link link-hover">Jobs</Link>
                        <Link to={"#"} className="link link-hover">Press kit</Link>
                    </div>
                    <div>
                        <h6 className="text-white text-xl font-semibold">Legal</h6>
                        <Link to={"#"} className="link link-hover">Terms of use</Link>
                        <Link to={"#"} className="link link-hover">Privacy policy</Link>
                        <Link to={"#"} className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <hr  className='text-[#77af8d]'/>
                <div className="text-center py-4 text-white text-sm">
                    © 2025 GreenNest. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;