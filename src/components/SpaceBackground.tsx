import React from "react";

interface SpaceBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden ${className}`}
    >
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />

      {/* Floating Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Shooting Stars - Small (Bottom Right to Top Left) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`small-br-tl-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
          style={{
            left: `calc(100% + ${Math.random() * 100}px)`,
            top: `calc(100% + ${Math.random() * 100}px)`,
            animationDelay: `${i * 2}s`,
            animationDuration: "8s",
          }}
        />
      ))}

      {/* Shooting Stars - Large (Bottom Right to Top Left) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`large-br-tl-${i}`}
          className="absolute w-2 h-2 bg-blue-300 rounded-full animate-shooting-star-large"
          style={{
            left: `calc(100% + ${Math.random() * 200}px)`,
            top: `calc(100% + ${Math.random() * 200}px)`,
            animationDelay: `${i * 3 + 1}s`,
            animationDuration: "12s",
          }}
        />
      ))}

      {/* Shooting Stars - Blue (Top Right to Bottom Left) */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`blue-tr-bl-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-shooting-star-tr"
          style={{
            left: `calc(100% + ${Math.random() * 100}px)`,
            top: `calc(-100px - ${Math.random() * 100}px)`,
            animationDelay: `${i * 2.5 + 0.5}s`,
            animationDuration: "10s",
          }}
        />
      ))}

      {/* Shooting Stars - Purple (Bottom Left to Top Right) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`purple-bl-tr-${i}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-shooting-star-bl"
          style={{
            left: `calc(-100px - ${Math.random() * 100}px)`,
            top: `calc(100% + ${Math.random() * 100}px)`,
            animationDelay: `${i * 3.5 + 1.5}s`,
            animationDuration: "11s",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpaceBackground;
