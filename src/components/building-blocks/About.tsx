import React from "react";

interface AboutProps {
  content: string;
  title?: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({
  content,
  title = "About Me",
  className = "",
}) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-8 ${className}`}
    >
      <h2 className="text-3xl font-bold text-blue-200 mb-6 flex items-center">
        <span className="mr-3 text-2xl text-white">👋</span>
        {title}
      </h2>
      <div className="text-blue-100 leading-relaxed prose prose-invert max-w-none text-lg">
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
