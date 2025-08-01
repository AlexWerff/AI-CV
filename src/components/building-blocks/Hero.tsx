import React from "react";
import Image from "next/image";

interface HeroProps {
  name: string;
  title: string;
  location: string;
  avatar?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  location,
  avatar,
  className = "",
}) => {
  return (
    <div
      className={`text-center py-12 bg-gradient-to-br from-blue-950/50 to-indigo-900/50 backdrop-blur-md rounded-lg border border-white/20 ${className}`}
    >
      {avatar && (
        <div className="mb-6">
          <Image
            src={avatar}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full mx-auto border-4 border-white/30 shadow-lg"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold text-blue-200 mb-2">{name}</h1>
      <p className="text-xl text-blue-300 font-semibold mb-2">{title}</p>
      <p className="text-blue-100">📍 {location}</p>
    </div>
  );
};

export default Hero;
