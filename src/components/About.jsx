import React, { useContext } from "react";
import { Store } from "../store/contextProvider";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  const { responseData, hanldeLogout } = useContext(Store); // Access responseData from context

  if(responseData === null){
    return ;
  }

  return (
    <div className="absolute w-full inset-0 mt-10 z-10 flex justify-center items-center">
      <div className="border border-white py-6 px-8 w-full  max-w-xl flex justify-center items-center flex-col space-y-5 shadow-lg rounded-lg @container">
        <div className="@2xs:flex  justify-center items-center space-x-4">
          <div className="rounded-4xl  min-w-10 w-50 ">
            <img
              className="min-w-10 w-50 rounded-4xl"
              src={responseData.localPhoto}
              alt=""
            />
          </div>
          <div className=" space-y-1 sm:space-y-2">
            <p className="text-2xl font-semibold  text-white">Profile</p>
            {responseData ? (
              <>
                <p className="text-base sm:text-2xl text-white">
                  <strong>Name:</strong> {responseData.localUsername}
                </p>
                <p className="text-base sm:text-2xl text-white">
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
          className="px-4 py-2 w-full font-semibold bg-blue-500 sm:text-2xl text-white rounded hover:bg-blue-600 transition"
          onClick={() => hanldeLogout(navigate)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default About;
