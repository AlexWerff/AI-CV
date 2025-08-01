import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

interface ExperienceProps {
  title: string;
  experiences: ExperienceItem[];
  layout?: "timeline" | "cards" | "list";
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  experiences,
  layout = "timeline",
  className = "",
}) => {
  const renderExperienceItem = (exp: ExperienceItem, index: number) => (
    <div key={index} className="mb-8 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-200">{exp.title}</h3>
          <p className="text-lg text-blue-300 font-semibold">{exp.company}</p>
          <p className="text-blue-100">📍 {exp.location}</p>
        </div>
        <div className="mt-2 md:mt-0 md:ml-4">
          <span className="inline-block px-4 py-2 bg-purple-500/30 backdrop-blur-xl text-purple-200 text-sm font-medium rounded-full border border-purple-300/30">
            {exp.period}
          </span>
        </div>
      </div>

      <div className="text-blue-100 leading-relaxed mb-4">
        {exp.description}
      </div>

      {exp.highlights && exp.highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-blue-200 mb-2">Key Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-blue-100">
            {exp.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/20 backdrop-blur-md text-blue-200 text-sm rounded-lg border border-white/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const renderTimeline = () => (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300/50"></div>
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-12 my-2">
          <div className="absolute left-2 top-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-white/20 shadow-sm"></div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20">
            {renderExperienceItem(exp, index)}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300"
        >
          {renderExperienceItem(exp, index)}
        </div>
      ))}
    </div>
  );

  const renderList = () => (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20"
        >
          {renderExperienceItem(exp, index)}
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (layout) {
      case "cards":
        return renderCards();
      case "list":
        return renderList();
      case "timeline":
      default:
        return renderTimeline();
    }
  };

  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold text-blue-200 mb-8 flex items-center">
        <span className="mr-3 text-2xl">💼</span>
        {title}
      </h2>
      {renderContent()}
    </div>
  );
};

export default Experience;
