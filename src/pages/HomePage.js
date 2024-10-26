import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="w-full" style={{ backgroundColor: "rgb(250 250 250)" }}>
            <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <nav className="flex items-center justify-between py-6">
                    <div className="text-2xl font-bold">Components Library</div>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-gray-700">Log in</a>
                        <button className="bg-purple-900 text-white px-4 py-2 rounded-lg">
                            Try now
                        </button>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto pt-8 lg:pt-12 pb-12">
                    <h2 className='pt-8' style={{ fontSize: "18px" }}>Free React + Tailwind Components, Ready to Copy</h2>
                    <div className='flex flex-wrap pt-14 gap-4'>
                        <Link to="/detail/hero-section-1" 
                        className='mb-4 w-full md:w-[45%] p-2 bg-white shadow-lg rounded-lg hover:bg-purple-300 focus:ring-1 focus:ring-opacity-50 transition duration-150 ease-in-out'>
                            <img
                                src="hero-section-1.png"
                                alt="hero section"
                            />
                        </Link>
                        <Link to="/detail/hero-section-2" 
                        className='mb-4  w-full md:w-[45%] p-2 bg-white shadow-lg rounded-lg hover:bg-purple-300 focus:ring-1 focus:ring-opacity-50 transition duration-150 ease-in-out'>
                            <img
                                src="hero-section-2.png"
                                alt="hero section"

                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;