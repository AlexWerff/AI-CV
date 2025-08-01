import React from "react";

interface Technology {
  name: string;
  icon?: string;
  category?: string;
}

interface TechnologyStackProps {
  title: string;
  technologies: Technology[];
  layout?: "grid" | "list" | "categories";
  className?: string;
}

const TechnologyStack: React.FC<TechnologyStackProps> = ({
  title,
  technologies,
  layout = "grid",
  className = "",
}) => {
  const renderTechnology = (tech: Technology, index: number) => (
    <div
      key={index}
      className="flex items-center space-x-3 px-4 py-3 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 hover:bg-white/30 hover:shadow-lg transition-all duration-300"
    >
      {tech.icon && <span className="text-xl text-white">{tech.icon}</span>}
      <span className="font-medium text-blue-200">{tech.name}</span>
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {technologies.map(renderTechnology)}
    </div>
  );

  const renderList = () => (
    <div className="space-y-2">{technologies.map(renderTechnology)}</div>
  );

  const renderCategories = () => {
    const categories = technologies.reduce((acc, tech) => {
      const category = tech.category || "Other";
      if (!acc[category]) acc[category] = [];
      acc[category].push(tech);
      return acc;
    }, {} as Record<string, Technology[]>);

    return (
      <div className="space-y-6">
        {Object.entries(categories).map(([category, techs]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold text-blue-200 mb-3">
              {category}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {techs.map(renderTechnology)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (layout) {
      case "list":
        return renderList();
      case "categories":
        return renderCategories();
      case "grid":
      default:
        return renderGrid();
    }
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-8 ${className}`}
    >
      <h2 className="text-3xl font-bold text-blue-200 mb-8 flex items-center">
        <span className="mr-3 text-2xl text-white">⚡</span>
        {title}
      </h2>
      {renderContent()}
    </div>
  );
};

export default TechnologyStack;
