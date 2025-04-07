import React from 'react'

function Navbar() {
  return (
    <div className="absolute top-0 text-white z-10 w-full bg-black grid grid-cols-2 justify-center items-center grid-rows-1  ">
    <a
      className="text-center bg-indigo-700 font-semibold text-2xl md:text-3xl"
      href="/app"
    >
      Home
    </a>
    <a
      className="text-center font-semibold text-2xl md:text-3xl"
      href="/app/about"
    >
      About
    </a>
  </div>
  )
}

export default Navbar
