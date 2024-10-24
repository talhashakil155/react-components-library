import React from 'react';

const HeroSection1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6EE] to-[#E6F2EE]">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-green-900">Quin</div>
        <div className="space-x-4">
          <button className="text-gray-700">Login</button>
          <button className="bg-green-900 text-white px-4 py-2 rounded-md">Try Quin</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-8">
        <h1 className="text-4xl text-gray-900" style={{fontWeight: "500", fontSize:"3.5rem", lineHeight:"3.75rem"}}>Stay top-of-mind<br/>with clients</h1>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Quin helps you strengthen client relationships by recalling key personal details and recommending timely, unique gestures.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md">Meet Quin</button>
          <button className="bg-gray-900 text-white px-6 py-2 rounded-md">Schedule a Demo</button>
        </div>
      </section>

      {/* Image Section */}
      <section className="flex justify-center">
        <div className="relative max-w-4xl mx-auto">
          <img
            className="rounded-lg"
            src="https://media.istockphoto.com/id/1212754341/photo/group-of-people-having-meeting-and-disscusing.jpg?s=612x612&w=0&k=20&c=btlfvOhZ4iqQsniBGJ8wO-lKPtYrG8qPeCEPBE6DQLk=" // Replace with actual image path
            alt="Meeting"
            style={{ height: "80%", width: "100%", objectFit: "cover" }}
          />

          {/* Chat Section */}
          <div style={{maxWidth:"15rem"}} className="absolute bottom-8 left-4 flex items-center space-x-2">
            <img
              className="h-14 w-14 rounded-full"
              src="https://www.shutterstock.com/image-photo/head-shot-handsome-hispanic-man-260nw-77457283.jpg"
              alt="Profile"
              style={{ marginBottom: "1rem" }}
            />
            <div style={{ marginBottom: "4rem", fontSize: "10px" }} className="bg-white p-4 shadow-lg rounded-lg">
              <p className="text-gray-900 font-medium">
              🎉 Hey Blake, you just secured a new contract!
              </p>
              <button style={{fontSize: "10px", backgroundColor:"#9faaa5"}} className="mt-4 text-white py-1 px-1 rounded transition">
                Check It Out!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection1;