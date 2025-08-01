import React from "react";

interface Project {
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  image?: string;
  link?: string;
}

interface ProjectsProps {
  title: string;
  projects: Project[];
  layout?: "grid" | "list" | "cards";
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  projects,
  layout = "grid",
  className = "",
}) => {
  const renderProject = (project: Project, index: number) => (
    <div
      key={index}
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-300"
    >
      {project.image && (
        <div className="h-48 bg-gray-800/50 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-200 mb-1">
              {project.title}
            </h3>
            {project.company && (
              <p className="text-blue-300 font-semibold">{project.company}</p>
            )}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 font-medium text-sm"
            >
              View Project →
            </a>
          )}
        </div>

        <div className="text-blue-100 leading-relaxed mb-4">
          {project.description}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-blue-200 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-100">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/20 backdrop-blur-md text-blue-200 text-sm rounded-md border border-white/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(renderProject)}
    </div>
  );

  const renderList = () => (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/20"
        >
          <div className="flex items-start space-x-4">
            {project.image && (
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800/50 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">{renderProject(project, index)}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(renderProject)}
    </div>
  );

  const renderContent = () => {
    switch (layout) {
      case "list":
        return renderList();
      case "cards":
        return renderCards();
      case "grid":
      default:
        return renderGrid();
    }
  };

  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold text-blue-200 mb-8 flex items-center">
        <span className="mr-3 text-2xl text-white">🚀</span>
        {title}
      </h2>
      {renderContent()}
    </div>
  );
};

export default Projects;
