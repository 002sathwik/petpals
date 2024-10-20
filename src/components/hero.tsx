import React from "react";
import { BackgroundLines } from "./ui/background-lines";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundLines className="flex items-center bg-gray-950 justify-center w-full flex-col px-4 flex-grow relative z-10 h-screen">
        <h2 className="bg-clip-text text-transparent text-center rubik-mono-one-regular bg-gradient-to-b from-yellow-900 to-yellow-300 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          <img
            src="https://i.pinimg.com/originals/d7/d2/cd/d7d2cd60810a40afc13351e53717a7ba.gif"
            alt="Cute pet gif"
            className="w-44 h-40 block mx-auto mb-1"
          />
          PetPals <br />
        </h2>
        <p className="max-w-xl mx-auto text-sm font-mono md:text-lg text-gray-500 dark:text-neutral-400 text-center">
          Join a vibrant community of pet lovers and enthusiasts! Share tips, stories, and photos of your furry friends.
        </p>

        <div className="flex space-x-4 mt-6 cursor-pointer z-30">
          <a href="/feed">
            <button className="bg-yellow-500 rubik-mono-one-regular text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              Feed
            </button>
          </a>
          <a href="/profile">
            <button className="bg-yellow-500 rubik-mono-one-regular  text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              Profile
            </button>
          </a>
          <a href="/games">
            <button className="bg-yellow-500 rubik-mono-one-regular  text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
             Games
            </button>
          </a>
          <a href="/profile1">
            <button className="bg-yellow-500 rubik-mono-one-regular  text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
             Friend
            </button>
          </a>
        </div>
      </BackgroundLines>

      {/* Footer at the bottom of the screen */}
      <footer className="bg-gray-800 text-gray-400 text-center py-4">
        <div>
          <p className="text-sm rubik-mono-one-regular">Made with ❤️ for DESIGN04DEV</p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
