import React from "react";

function About() {
  return (
    <div className="absolute w-full inset-0 mt-10 z-10 flex justify-center items-center">
      <div className="border border-white py-6 px-8 w-full max-w-md flex justify-center items-center flex-col space-y-5  shadow-lg rounded-lg">
        <p className="text-2xl font-semibold text-white">Profile</p>
        <p className="text-sm sm:text-base text-white">Name</p>
        <p className="text-sm sm:text-base text-white">Email</p>
        <button className="px-4 py-2 w-full font-semibold bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default About;
