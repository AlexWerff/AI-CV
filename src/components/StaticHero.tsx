import React, { useState } from "react";
import Image from "next/image";

interface StaticHeroProps {
  onSearch: (query: string) => void;
}

const StaticHero: React.FC<StaticHeroProps> = ({ onSearch }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchSubmit = (queryText: string) => {
    if (queryText.trim()) {
      onSearch(queryText);
      setShowSearchInput(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Source Code Button */}
      <a
        href="https://github.com/AlexWerff/AI-CV"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 right-8 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-medium flex items-center space-x-2"
      >
        <Image
          src="/icons/code.svg"
          alt="Source Code"
          width={20}
          height={20}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <span>Source Code</span>
      </a>

      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Alexander van der Werff
        </h1>

        <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
          Technical Lead & Founding Engineer
        </p>

        <p className="text-lg md:text-xl text-blue-100 mb-12">
          Hamburg, Germany
        </p>

        {/* Search Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {!showSearchInput && (
            <>
              <button
                onClick={() => {
                  onSearch("full_cv");
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Show full CV
              </button>
              <button
                onClick={() => {
                  onSearch("scala");
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Scala experiences
              </button>
              <button
                onClick={() => {
                  onSearch("typescript");
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Typescript experiences
              </button>
              <button
                onClick={() => setShowSearchInput(true)}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Search
              </button>
            </>
          )}

          {showSearchInput && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const queryText = (e.target as HTMLFormElement).prompt.value;
                handleSearchSubmit(queryText);
              }}
              className="w-full max-w-2xl mx-auto flex gap-2 animate-fadeIn"
            >
              <input
                type="text"
                placeholder="Search for specific skills or experiences..."
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all duration-300 font-medium"
                autoFocus
                name="prompt"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white hover:bg-white/30 transition-all duration-300 font-medium"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSearchInput(false);
                }}
                className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300 font-medium"
              >
                ×
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="https://github.com/alexweff"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-300"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/alexander-van-der-werff"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-300"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:alex@softrocket.net"
            className="group flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-300"
          >
            <Image
              src="/icons/email.svg"
              alt="Email"
              width={24}
              height={24}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg font-medium">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaticHero;
