import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 body-font bg-gradient-to-t from-gray-900 w-full py-1 bottom-0 fixed cursor-pointer">
        <div className="container mx-auto flex items-center justify-center">
          <span className="flex title-font font-medium items-center justify-center text-white flex-col hover:scale-105 transition ease-in-out">
            <span className="text-2xl">&lt;<span className="text-green-400">Pass</span>OP/&gt;</span>
            {/* Footer Text with Link */}
            <span className="text-2xl text-gray-400  sm:mt-0 mt-2">
              Created with ❤️ by <a href="https://rohandas28.github.io" className="text-green-500" target="_blank" rel="noopener noreferrer">Rohan Das</a>
            </span>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer