import React, { useState } from "react";

const StaticHero: React.FC = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.dispatchEvent(
        new CustomEvent("search", {
          detail: { type: "custom", query: searchQuery },
        })
      );
      setSearchQuery("");
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
        <span className="text-lg">🐙</span>
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
                  window.dispatchEvent(
                    new CustomEvent("search", {
                      detail: { type: "full-cv" },
                    })
                  );
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Show full CV
              </button>
              <button
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("search", {
                      detail: { type: "scala" },
                    })
                  );
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 hover:border-white/30 transition-all duration-500 ease-in-out font-medium"
              >
                Scala experiences
              </button>
              <button
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("search", {
                      detail: { type: "typescript" },
                    })
                  );
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
              onSubmit={handleSearchSubmit}
              className="w-full max-w-2xl mx-auto flex gap-2 animate-fadeIn"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for specific skills or experiences..."
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-all duration-300 font-medium"
                autoFocus
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
                  setSearchQuery("");
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
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              🐙
            </span>
            <span className="text-lg font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/alexander-van-der-werff"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-300"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              💼
            </span>
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:alex@softrocket.net"
            className="group flex items-center space-x-2 text-white hover:text-blue-100 transition-colors duration-300"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              📧
            </span>
            <span className="text-lg font-medium">Contact</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default StaticHero;
