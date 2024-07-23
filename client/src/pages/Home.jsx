import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md font-Space Grotesk">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 ">
          Welcome to the User Authentication System
        </h1>
        <p className="text-gray-600 mb-6">
          Please use the navigation above to register or log in to your account.
        </p>
      </div>
    </div>
  );
};

export default Home;
