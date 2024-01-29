import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="text-gray-400 bg-sky-950 body-font bottom-0 fixed w-full">
        <div className="container mx-auto flex items-center justify-center">
          <span className="flex title-font font-medium items-center justify-center text-white flex-col hover:scale-105 transition ease-in-out">
            <span className="text-2xl">&lt;<span className="text-green-400">Typer</span>Op/&gt;</span>
            {/* Footer Text with Link */}
            <span className="text-2xl text-gray-400 sm:py-2 sm:mt-0 mt-4">
              Created with ❤️ by <a href="https://rohandas28.github.io" className="text-green-500" target="_blank" rel="noopener noreferrer">Rohan Das</a>
            </span>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer