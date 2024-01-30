import React from 'react'
import {FaGithub} from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <header className="text-gray-400 bg-gray-800 body-font">
    <div className="container mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
      <p className="flex title-font font-medium items-center text-white md:mb-0 hover:scale-105 transition ease-in-out cursor-pointer">
        <span className="text-2xl">&lt;<span className="text-green-400">Pass</span>OP/&gt;</span>
      </p>
      {/* Navigation Section */}
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a target="_blank" href="https://github.com/RohanDas28/TyperOp">
          {/* Github Link Button */}
          <button className="inline-flex items-center bg-green-400 border-0 py-2 px-4 focus:outline-none font-semibold text-xl hover:bg-green-500 rounded-full text-black mt-2 md:mt-0 hover:scale-105 transition ease-in-out">
            Github
            <span className="ml-2">
              {/* Github Icon */}
              <FaGithub className='text-2xl' />
            </span>
          </button>
        </a>
      </nav>
    </div>
  </header>
  </>
  )
}

export default Navbar