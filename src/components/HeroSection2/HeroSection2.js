import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroSection2 = () => {
    return (
        <div className="w-full bg-pink-50 pb-16" >
            <div className="max-w-7xl mx-auto min-h-screen bg-pink-50 px-4 sm:px-6 lg:px-8">

                {/* Navigation */}
                <nav className="flex items-center justify-between py-6">
                    <div className="text-2xl font-bold">WeGrow</div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700">Product</a>
                        <a href="#" className="text-gray-700">Customer</a>
                        <a href="#" className="text-gray-700">Pricing</a>
                        <a href="#" className="text-gray-700">Blog</a>
                        <a href="#" className="text-gray-700">Log in</a>
                        <button className="bg-purple-900 text-white px-4 py-2 rounded-lg">
                            Try now
                        </button>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="max-w-7xl mx-auto pt-16 lg:pt-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div className="space-y-8">
                            <h1 className="text-5xl font-bold leading-tight">
                                Bring out the best in your team.
                            </h1>
                            <p className="text-xl text-gray-600 max-w-xl">
                                Join 10k managers creating better relationships with their teams.
                                Tackle challenges and build strengths so your team can do its best work.
                            </p>
                            <button className="bg-purple-900 text-white px-6 py-3 rounded-lg text-lg">
                                Get started free
                            </button>
                        </div>

                        <div className="relative">
                            <div className="relative">
                                <img
                                    src="https://xergy.com/wp-content/uploads/2024/05/Team-Collab-e1715862201564.jpg"
                                    alt="Team members working together"
                                    className="rounded-2xl shadow-lg"
                                />

                                {/* Floating Cards */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="w-4 h-4 text-pink-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold">8.1</span>
                                            <span className="text-green-600">↑ 0.3pt</span>
                                        </div>
                                        <div className="text-sm text-gray-600">Relationship with Manager</div>
                                    </div>
                                </div>

                                <div className="absolute -right-6 top-1/2 bg-white p-4 rounded-xl shadow-lg">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-green-600 font-bold">9.3%</span>
                                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                                    </div>
                                    <div className="text-sm font-medium">
                                        Boost your team performance
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection2;