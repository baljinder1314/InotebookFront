import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../store/contextProvider";
const BACKEND_URL = import.meta.env.VITE_API_URL;
function Register() {
  let { loadingBarRef,setErrorData,errorData } = useContext(Store);
  let navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    photo: null, // Updated to store the file object
  });

  const handleLogin = async ({ username, email, password, photo }) => {
    if (!email || !password || !username || !photo) {
      setErrorData("Each Fields is required")
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("photo", photo); // Append the file
    loadingBarRef.current.continuousStart();
    try {
      const response = await fetch(`${BACKEND_URL}/register`, {
        method: "POST",
        body: formData, // Send FormData directly
      });

      const data = await response.json();
      console.error("Registration failed:", data);

      if (response.ok) {
        navigate("/login");
        // Redirect or handle success here
      } else {
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setInputData({
      ...inputData,
      [name]: name === "photo" ? files[0] : value, // Handle file input
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(inputData);
  };

  return (
    <>
      <div className="relative h-screen bg-[url(wallhaven-x13lxo_1920x1080.png)] bg-center bg-cover bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-66"></div>
        {/* Form */}
        <div className="relative min-h-screen w-full flex justify-center items-center px-4">
          <form
            onSubmit={onSubmit}
            className="border-2 border-white z-10 flex flex-col rounded-2xl px-6 py-7  bg-opacity-90 shadow-lg w-full max-w-sm"
          >
            <label
              htmlFor="username"
              className="text-sm font-semibold text-white "
            >
              Username
            </label>
            <input
              onChange={onChange}
              value={inputData.username}
              className="text-white font-semibold placeholder:text-white border py-2 px-5 mb-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />
            <label
              htmlFor="email"
              className="text-sm font-semibold text-white "
            >
              Email
            </label>
            <input
              onChange={onChange}
              value={inputData.email}
              className="text-white font-semibold placeholder:text-white border py-2 px-5 mb-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="email"
            />
            <label
              htmlFor="password"
              className="text-sm font-semibold text-white "
            >
              Password
            </label>
            <input
              onChange={onChange}
              value={inputData.password}
              className="text-white font-semibold placeholder:text-white border py-2 px-5 mb-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <label
              htmlFor="photo"
              className="text-sm font-semibold text-white "
            >
              Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={onChange}
              className="text-white font-semibold placeholder:text-white border py-2 px-5 mb-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-base text-red-700 font-semibold ml-4">{errorData}</p>
            <button
              type="submit"
              className="mt-4 border cursor-pointer text-xl font-semibold  hover:bg-indigo-700 hover:border-none text-white py-2 px-4 rounded-xl transition duration-200"
            >
              Register
            </button>
            <div className="text-white text-center mt-5">
              If You not have Account?{" "}
              <Link className="hover:underline" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
