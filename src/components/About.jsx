import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Store } from "../store/Context";

function About() {
  let navigate = useNavigate();
  const { responseData, hanldeLogout } = useContext(Store); // Access responseData from context

  if (responseData === null) {
    return;
  }

  return (
    <div className="absolute w-full inset-0 mt-10 z-10 flex justify-center items-center">
      <div className="border border-white py-6 px-8 w-full max-w-xl flex justify-center items-center flex-col space-y-5 shadow-lg rounded-lg @container">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="rounded-4xl min-w-10 w-32 sm:w-50">
            <img
              className="min-w-10 px-5 w-32 sm:w-50 rounded-4xl"
              src={responseData.localPhoto}
              alt=""
            />
          </div>
          <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-semibold text-white">Profile</p>
            {responseData ? (
              <>
                <p className="text-sm sm:text-base lg:text-xl text-white">
                  <strong>Name:</strong> {responseData.localUsername}
                </p>
                <p className="text-sm sm:text-base lg:text-xl text-white">
                  <strong>Email:</strong> {responseData.localEmail}
                </p>
              </>
            ) : (
              <p className="text-sm sm:text-base text-white">
                No user data available. Please log in.
              </p>
            )}
          </div>
        </div>
        <button
          className="px-4 py-2 w-full font-semibold bg-blue-500 text-sm sm:text-base lg:text-xl text-white rounded hover:bg-blue-600 transition"
          onClick={() => hanldeLogout(navigate)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default About;
