import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b shadow-md">
        <h1 className="text-2xl font-bold">TheraBridge+</h1>
        <Link to="/login" className="px-4 py-2 bg-black text-white rounded-md">Login</Link>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="flex flex-grow items-center justify-center px-16 py-12">
        {/* Left Side - Large Gray Box */}
        <div className="w-1/3 h-72 bg-gray-300 rounded-lg"></div>

        {/* Right Side - Title & Placeholder Content */}
        <div className="w-2/3 pl-12">
          <h2 className="text-2xl font-semibold mb-4">TheraBridge+</h2>
          
          {/* Gray Placeholder Blocks for Text */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 w-3/4 rounded-md"></div>
            <div className="h-6 bg-gray-200 w-5/6 rounded-md"></div>
            <div className="h-6 bg-gray-200 w-4/6 rounded-md"></div>
            <div className="h-6 bg-gray-200 w-2/3 rounded-md"></div>
            <div className="h-4 bg-gray-200 w-1/3 rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
