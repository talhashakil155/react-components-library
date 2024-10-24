import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailHeroSection1 = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('image');
    const [componentCode, setComponentCode] = useState('');

    function handleLivePreview(){
        setActiveTab('preview')
        navigate("/hero-section-1")
    }

    const fetchCode = async () => {
        const response = await fetch('/source-code/hero-section-1.txt');
        const code = await response.text();
        await setComponentCode(code);
        await setActiveTab('code')
      };
      

    return (
        <div className="w-full" style={{ backgroundColor: "rgb(250 250 250)" }}>
            <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <nav className="flex items-center justify-between py-6">
                    <div className="text-2xl font-bold">Components Library</div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700">Log in</a>
                        <button className="bg-purple-900 text-white px-4 py-2 rounded-lg">
                            Try now
                        </button>
                    </div>
                </nav>

                <div className="w-full mx-auto mt-10" style={{maxWidth: "55rem"}}>
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-200">
                        <button
                            className={`px-4 py-2 w-1/3 text-center ${activeTab === 'preview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                                }`}
                            onClick={handleLivePreview}
                        >
                            Live Preview
                        </button>
                        <button
                            className={`px-4 py-2 w-1/3 text-center ${activeTab === 'image' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                                }`}
                            onClick={() => setActiveTab('image')}
                        >
                            Image
                        </button>
                        <button
                            className={`px-4 py-2 w-1/3 text-center ${activeTab === 'code' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                                }`}
                            onClick={fetchCode}
                        >
                            Code
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="p-4">
                        {activeTab === 'preview' && (
                            <div className="border rounded-lg p-4">
                                <h2 className="text-lg font-semibold">Live Preview</h2>
                                <p>This is where your live preview content will be displayed.</p>
                            </div>
                        )}
                        {activeTab === 'image' && (
                            <div className="border rounded-lg p-4">
                                <img
                                    src="/hero-section-1.png"
                                    alt="Hero Section"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        )}
                        {activeTab === 'code' && (
                            <div className="border rounded-lg p-4 bg-gray-900 text-white overflow-auto" style={{maxHeight: "35rem"}}>
                                <pre>
                                    <code>
                                        {componentCode}
                                    </code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailHeroSection1;