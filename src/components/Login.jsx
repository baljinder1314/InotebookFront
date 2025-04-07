import React from "react";

function Login() {
  return (
    <>
      <div className="relative h-screen bg-[url(wallhaven-x13lxo_1920x1080.png)] bg-center bg-cover bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-66"></div>
        {/* Form */}
        <div className="relative min-h-screen w-full flex justify-center items-center px-4">
          <form
            action=""
            className="border-2 border-white z-10 flex flex-col rounded-2xl px-6 py-7  bg-opacity-90 shadow-lg w-full max-w-sm"
          >
            <label
              htmlFor="email"
              className="text-sm font-semibold text-white "
            >
              Email
            </label>
            <input
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
              className="text-white font-semibold placeholder:text-white border py-2 px-5 mb-3 mt-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button
              type="submit"
              className="mt-4 border cursor-pointer text-xl font-semibold  hover:bg-indigo-700 hover:border-none text-white py-2 px-4 rounded-xl transition duration-200"
            >
              Login
            </button>
            <div className="text-white text-center mt-5">
              If You not have Account?{" "}
              <a className="hover:underline" href="/register">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
