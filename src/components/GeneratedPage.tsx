import React from "react";
import {
  TextBox,
  Hero,
  About,
  TechnologyStack,
  Experience,
  Projects,
  Contact,
} from "@/components/building-blocks";
import { GeneratedPageData } from "@/lib/openai";

interface GeneratedPageProps {
  data: GeneratedPageData;
}

const GeneratedPage: React.FC<GeneratedPageProps> = ({ data }) => {
  const renderComponent = (
    component: GeneratedPageData["components"][0],
    index: number
  ) => {
    switch (component.type) {
      case "TextBox":
        return (
          <TextBox
            key={index}
            content={component.props.content}
            title={component.props.title}
            variant={component.props.variant}
          />
        );
      case "Hero":
        return (
          <Hero
            key={index}
            name={component.props.name}
            title={component.props.title}
            location={component.props.location}
            avatar={component.props.avatar}
          />
        );
      case "About":
        return (
          <About
            key={index}
            content={component.props.content}
            title={component.props.title}
          />
        );
      case "TechnologyStack":
        return (
          <TechnologyStack
            key={index}
            title={component.props.title}
            technologies={component.props.technologies}
            layout={component.props.layout}
          />
        );
      case "Experience":
        return (
          <Experience
            key={index}
            title={component.props.title}
            experiences={component.props.experiences}
            layout={component.props.layout}
          />
        );
      case "Projects":
        return (
          <Projects
            key={index}
            title={component.props.title}
            projects={component.props.projects}
            layout={component.props.layout}
          />
        );
      case "Contact":
        return (
          <Contact
            key={index}
            title={component.props.title}
            contactItems={component.props.contactItems}
            layout={component.props.layout}
          />
        );
      default:
        return null;
    }
  };

  const renderLayout = () => {
    const components = data.components.map(renderComponent);

    switch (data.layout) {
      case "two-column":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components}
          </div>
        );
      case "grid":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components}
          </div>
        );
      case "single-column":
      default:
        return <div className="space-y-6">{components}</div>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-200 mb-4">{data.title}</h1>
        {data.description && (
          <p className="text-xl text-white/20">{data.description}</p>
        )}
      </div>

      <div className="mt-8">{renderLayout()}</div>
    </div>
  );
};

export default GeneratedPage;
