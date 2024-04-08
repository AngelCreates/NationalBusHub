import React from "react";

const AllBusesList = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to Bus Tracking System
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Track your buses in real-time with ease. And book your tickets too,
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBusesList;
